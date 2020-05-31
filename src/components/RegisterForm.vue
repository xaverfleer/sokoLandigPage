<template>
  <form @submit.prevent="handleSubmit" class="form" id="register-form">
    <FormEntry
      :options="{ ...$root.appData.formEntries.email, fullWidth: true }"
    />
    <FormEntry :options="{ ...$root.appData.formEntries.password }" />
    <FormEntry :options="$root.appData.formEntries.confirm" />
    <div class="buttons form__buttons form-buttons--dual">
      <RouteVue :info="$root.appData.routes.login" />
      <button class="button button--primary">Weiter</button>
    </div>
  </form>
</template>

<script>
import FormEntry from "./FormEntry.vue";
import RouteVue from "./RouteVue.vue";
import helpers from "../helpers";

export default {
  components: { FormEntry, RouteVue },
  data: () => ({ isDisabled: false }),
  methods: {
    handleSubmit(event) {
      const form = event.target;

      if (form.checkValidity()) {
        const payload = JSON.stringify(helpers.formToData(form));
        this.submitForm(payload);
        this.isDisabled = true;
      }
    },
    submitForm(body) {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", ".netlify/functions/register");
      xhr.send(body);

      xhr.addEventListener("load", () => {
        switch (xhr.status) {
          case 200:
            this.$router.push("/registered");
            break;
          case 500:
          case 504:
          default:
            window.alert(
              `Registrieren fehlgeschlagen./n/nBitte versuche es später noch einmal oder kontaktiere uns unter kurs@so-kommunizieren.ch`
            );
            break;
        }
      });
      xhr.addEventListener("error", (xhrEventError) => {
        window.alert(
          `Registrierung fehlgeschlagen, bitte erneut versuchen.\n\nBei wiederholtem Fehlschlagen, kontaktiere uns bitte mit folgenden Details: xhrEventError ${JSON.stringify(
            xhrEventError
          )}`
        );
      });
    },
  },
};
</script>
