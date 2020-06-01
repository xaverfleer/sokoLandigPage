<template>
  <form @submit.prevent="handleSubmit" class="form">
    <FormEntry
      v-for="field in formData.fields"
      :key="field.name"
      :options="field"
    />
    <div class="buttons form__buttons">
      <button class="button button--primary">Konto löschen</button>
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
  },
  methods: {
    handleSubmit(event) {
      this.updateHelp(this.formData.fields);
      if (this.isInputValid(this.formData.fields)) {
      }
    },
    isInputValid(fields) {
      return fields.reduce((acc, field) => acc && field.help === "", true);
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
