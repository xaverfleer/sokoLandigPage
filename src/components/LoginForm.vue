<template>
  <form
    @submit.prevent="handleSubmit"
    class="form form--narrow"
    id="login-form"
  >
    <FormEntry
      :options="{ ...$root.appData.formEntries.email, fullWidth: true }"
    />
    <FormEntry
      :options="{ ...$root.appData.formEntries.password, fullWidth: true }"
    />
    <div class="buttons form__buttons form-buttons--dual">
      <RouteVue :info="$root.appData.routes.register" />
      <button class="button button--primary">
        Anmelden
      </button>
    </div>
  </form>
</template>

<script>
import FormEntry from "./FormEntry.vue";
import RouteVue from "./RouteVue.vue";
import helpers from "../helpers";
import stateManagement from "../stateManagement";

export default {
  components: { RouteVue, FormEntry },
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
    submitForm(data) {
      const xhr = new XMLHttpRequest();
      xhr.open("PUT", ".netlify/functions/login");
      xhr.send(data);

      xhr.addEventListener("load", () => {
        switch (xhr.status) {
          case 200:
            const { sessionId } = JSON.parse(
              decodeURIComponent(xhr.responseText)
            );
            stateManagement.updateSession(sessionId);
            break;
          case 504:
          default:
            window.alert(
              `Anmelden fehlgeschlagen./n/nBitte versuche es später noch einmal oder kontaktiere uns unter kurs@so-kommunizieren.ch`
            );
            this.isDisabled = false;
            break;
        }
      });

      xhr.addEventListener("error", (xhrEventError) => {
        window.alert(
          `Anmelden fehlgeschlagen:/n/nBitte versuche es später noch einmal oder kontaktiere uns unter kurs@so-kommunizieren.ch mit dem dem folgenden Text: xhrEventError ${JSON.stringify(
            xhrEventError
          )}`
        );
        this.isDisabled = false;
      });
    },
  },
};
</script>

<style scoped></style>
