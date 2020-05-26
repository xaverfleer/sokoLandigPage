<template>
  <form class="form form--narrow" id="login-form">
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
      <button @click="handleSubmit" class="button button--primary">
        Anmelden
      </button>
    </div>
  </form>
</template>

<script>
import RouteVue from "./RouteVue.vue";

export default {
  components: { RouteVue },
  data: () => {
    return { isDisabled: false };
  },
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
      return document.getElementById("login-form");
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
  xhr.open("PUT", ".netlify/functions/login");
  xhr.send(data);

  xhr.addEventListener("load", () => {
    switch (xhr.status) {
      case "200":
        const { sessionId } = JSON.parse(decodeURIComponent(xhr.responseText));
        localStorage.setItem("soko-non-vue", JSON.stringify({ sessionId }));
        break;
      case "504":
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
}
</script>

<style scoped></style>
