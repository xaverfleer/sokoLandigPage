<template>
  <form
    @submit.prevent="handleSubmit"
    class="form form--narrow"
    id="login-form"
  >
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
    <div class="form-entry form-entry--fullwidth form-entry--password">
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
    <div class="buttons form__buttons form-buttons--dual">
      <RouteVue :info="$root.appData.routes.register" />
      <button class="button button--primary">
        Anmelden
      </button>
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
            localStorage.setItem("soko-non-vue", JSON.stringify({ sessionId }));
            break;
          case 504:
          default:
            window.alert(
              `Anmelden fehlgeschlagen./n/nBitte versuche es später noch einmal oder kontaktiere uns unter kurs@so-kommunizieren.ch`
            );
            break;
        }
      });

      xhr.addEventListener("error", (xhrEventError) => {
        window.alert(
          `Anmelden fehlgeschlagen:/n/nBitte versuche es später noch einmal oder kontaktiere uns unter kurs@so-kommunizieren.ch mit dem dem folgenden Text: xhrEventError ${JSON.stringify(
            xhrEventError
          )}`
        );
      });
    },
  },
};
</script>

<style scoped></style>
