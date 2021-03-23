<template>
  <form @submit.prevent="handleSubmit" class="form">
    <FormEntry
      v-for="field in uniqueIdFields"
      :key="field.name"
      :options="field"
    />
    <div :class="buttonsClasses">
      <RouteVue
        v-if="formData.secondaryButton"
        :info="formData.secondaryButton.route"
      />
      <button v-if="buttonLabel" :class="buttonClasses">
        {{ buttonLabel }}
      </button>
    </div>
  </form>
</template>

<script>
import FormEntry from "./FormEntry.vue";
import RouteVue from "./RouteVue.vue";

import stateM8t from "~/stateManagement";

export default {
  components: { FormEntry, RouteVue },
  computed: {
    buttonClasses() {
      return [
        "button",
        "button--primary",
        this.formData.layout === "small" && "button--sameline",
      ];
    },
    buttonLabel() {
      return this.formData.buttonText || this.formData.goal || "";
    },
    buttonsClasses() {
      return [
        "buttons form__buttons",
        this.formData.secondaryButton && "form-buttons--dual",
        this.formData.layout === "small" && "form-buttons--sameline",
      ];
    },
    compactData() {
      const formData = this.formData.fields.reduce(
        (acc, field) => ({ ...acc, [field.name]: field.value }),
        { sessionId: stateM8t.getSessionId() }
      );
      const searchData = window.location.search
        .substring(1)
        .split("&")
        .map((entry) => entry.split("=").map((str) => decodeURIComponent(str)))
        .reduce((acc, curr) => ({ ...acc, [curr[0]]: curr[1] }), {});

      return { ...formData, ...searchData };
    },
    uniqueIdFields() {
      return this.formData.fields.map((field) => {
        field.inputId = this.formData.name + field.inputId;
        return field;
      });
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
    handleSuccess(xhr) {
      if (this.formData.postSubmit) this.formData.postSubmit(xhr);
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
        `/.netlify/functions/${this.formData.submitLambdaFunction}`
      );
      xhr.send(this.stringifiedData);
      xhr.addEventListener("load", () => {
        switch (xhr.status) {
          case 200:
            this.handleSuccess(xhr);
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
