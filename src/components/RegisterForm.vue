<template>
  <form class="form" id="register-form">
    <div class="form-entry form-entry--fullwidth">
      <label class="form-entry__label" for="form__email">E-Mail-Adresse*</label>
      <input
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
        class="form-entry__input"
        type="password"
        name="confirm"
        id="form__confirm"
        required=""
      />
    </div>
    <div class="buttons form__buttons form-buttons--dual">
      <RouteVue :info="$root.appData.routes.login" />
      <button @click="handleSubmit" class="button button--primary">
        Weiter
      </button>
    </div>
  </form>
</template>

<script>
import RouteVue from "./RouteVue.vue";

export default {
  components: { RouteVue },
  methods: {
    handleSubmit(event) {
      const form = this.getForm();

      if (form.checkValidity()) {
        const data = getData(form.elements);
        submitForm(data);
        form.reset();
      }
    },
    getForm() {
      return document.getElementById("register-form");
    },
  },
};

function getData(elements) {
  const fields = Array.prototype.slice
    .call(elements)
    .filter((elem) => elem.nodeName === "INPUT");

  const raw = fields.reduce(function addField(acc, elem) {
    acc[elem.name] = elem.value;
    return acc;
  }, {});

  const stringified = JSON.stringify(raw);
  const encoded = encodeURIComponent(stringified);

  return encoded;
}

function submitForm(data) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", ".netlify/functions/register");
  xhr.send(data);

  xhr.addEventListener("load", () => {
    switch (xhr.status) {
      case "504":
        window.alert(
          `Registrieren fehlgeschlagen./n/nBitte versuche es später noch einmal oder kontaktiere uns unter kurs@so-kommunizieren.ch`
        );
        break;
      default:
        window.location = "/registered.html";
    }
  });
  xhr.addEventListener("error", (xhrEventError) => {
    window.alert(
      `Registrierung fehlgeschlagen, bitte erneut versuchen.\n\nBei wiederholtem Fehlschlagen, kontaktiere uns bitte mit folgenden Details: xhrEventError ${JSON.stringify(
        xhrEventError
      )}`
    );
  });
}
</script>

<style scoped></style>
