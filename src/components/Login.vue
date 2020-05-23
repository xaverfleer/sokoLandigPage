<template>
  <div class="page">
    <Header :routes="loginData.routes" />
    <main>
      <section class="section section--subscription" id="subscription">
        <div class="section__subsection">
          <h2 class="section__header">Anmelden</h2>
          <form
            action="."
            method="POST"
            class="form form--narrow"
            data-netlify="true"
          >
            <div class="form-entry form-entry--fullwidth">
              <label class="form-entry__label text" for="form__email"
                >E-Mail-Adresse*</label
              >
              <input
                class="form-entry__input text"
                type="email"
                name="email"
                id="form__email"
                required=""
              />
            </div>
            <div class="form-entry form-entry--fullwidth form-entry--password">
              <label class="form-entry__label text" for="form__password"
                >Passwort*</label
              >
              <input
                class="form-entry__input text"
                type="password"
                name="password"
                id="form__password"
                required=""
              />
            </div>
            <div class="buttons form__buttons form-buttons--dual">
              <a
                class="button button--2ndary button--left"
                href="./register.html"
                >Konto erstellen</a
              >
              <button class="button button--primary">Anmelden</button>
            </div>
          </form>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Header from "./Header.vue";

export default {
  components: {
    Footer,
    Header,
  },
  computed: {
    loginData() {
      return this.$root.appData.login;
    },
  },
};

document.title = `Login | so* kommunizieren`;
</script>

<style scoped></style>
