<template>
  <form @submit.prevent="handleSubmit" class="form">
    <FormEntry
      v-for="field in formData.fields"
      :key="field.name"
      :options="field"
    />
    <div class="buttons form__buttons">
      <button class="button button--primary">
        {{ formData.goal }}
      </button>
    </div>
  </form>
</template>

<script>
import FormEntry from "./FormEntry.vue";

export default {
  components: { FormEntry },
  computed: {
    compactData() {
      return this.formData.fields.reduce(
        (acc, field) => ({ ...acc, [field.name]: field.value }),
        {}
      );
    },
    stringifiedData() {
      return JSON.stringify(this.compactData);
    },
  },
  methods: {
    handleSubmit(event) {
      this.updateHelp(this.formData.fields);
      if (this.isInputValid(this.formData.fields)) {
        this.submitForm();
      }
    },
    handleFailure() {
      window.alert(
        `${this.formData.goal ||
          "Aktion"} fehlgeschlagen.\nBitte versuche es später noch einmal oder kontaktiere uns unter kurs@so-kommunizieren.ch.`
      );
    },
    handleSuccess() {
      if (this.formData.postSubmit) this.formData.postSubmit();
      if (this.formData.successRoute)
        this.$router.push(this.formData.successRoute);
    },
    isInputValid(fields) {
      return fields.reduce((acc, field) => acc && field.help === "", true);
    },
    submitForm() {
      const xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        `.netlify/functions/${this.formData.submitLambdaFunction}`
      );
      xhr.send(this.stringifiedData);
      xhr.addEventListener("load", () => {
        switch (xhr.status) {
          case 200:
            this.handleSuccess();
            break;
          case 500:
          case 504:
          default:
            this.handleFailure();
            break;
        }
      });
      xhr.addEventListener("error", (xhrEventError) => {
        this.handleFailure();
      });
    },
    updateHelp(formFields) {
      formFields.forEach((field) => {
        const help = field.checks
          ? field.checks
              .filter((check) => !check.test(field.value, this.compactData))
              .reduce((acc, check) => acc.push(check.message) && acc, [])
              .join(" ")
          : "";
        field.help = help;
      });
    },
  },
  props: ["formData"],
};
</script>
