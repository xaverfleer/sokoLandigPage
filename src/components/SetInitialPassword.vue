<template>
  <div class="page">
    <Header />
    <main>
      <section class="section">
        <h2>Passwort definieren</h2>
        <FormVue :formData="setPasswordForm" />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import FormVue from "./FormVue.vue";
import Header from "./Header.vue";

export default {
  components: { Footer, FormVue, Header },
  created() {
    document.title = `Passwort definieren | so* kommunizieren`;
  },
  data() {
    return {
      setPasswordForm: {
        fields: [
          this.$root.appData.formEntries.password,
          this.$root.appData.formEntries.confirm,
        ],
        goal: "Passwort definieren",
        name: "setPassword",
        submitLambdaFunction: "setInitialPassword",
        successRoute: this.$root.appData.routes.definedPassword.to,
      },
    };
  },
};
</script>
