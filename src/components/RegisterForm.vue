<template>
  <form v-on:submit.prevent="handleSubmit" class="form" id="register-form">
    <div class="form-entry form-entry--fullwidth">
      <label class="form-entry__label" for="form__email">E-Mail-Adresse*</label>
      <input
        :disabled="isDisabled"
        class="form-entry__input"
        type="email"
        name="email"
        id="form__email"
        required=""
      />
    </div>
    <div class="form-entry form-entry--halfwidth form-entry--password">
      <label class="form-entry__label" for="form__password">Passwort*</label>
      <input
        :disabled="isDisabled"
        class="form-entry__input"
        type="password"
        name="password"
        id="form__password"
        required=""
      />
    </div>
    <div class="form-entry form-entry--halfwidth form-entry--password">
      <label class="form-entry__label" for="form__confirm">Bestätigen*</label>
      <input
        :disabled="isDisabled"
        class="form-entry__input"
        type="password"
        name="confirm"
        id="form__confirm"
        required=""
      />
    </div>
    <div class="buttons form__buttons form-buttons--dual">
      <RouteVue :info="$root.appData.routes.login" />
      <button class="button button--primary">Weiter</button>
    </div>
  </form>
</template>

<script>
import RouteVue from "./RouteVue.vue";
import helpers from "../helpers";

export default {
  components: { RouteVue },
  data: () => {
    return { isDisabled: false };
  },
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
          case "504":
            window.alert(
              `Registrieren fehlgeschlagen./n/nBitte versuche es später noch einmal oder kontaktiere uns unter kurs@so-kommunizieren.ch`
            );
            break;
          default:
            this.$router.push("/registered");
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

<style scoped></style>
