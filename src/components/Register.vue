<template>
  <div class="page">
    <Header :routes="$root.appData.standardNavRoutes" />
    <main>
      <section class="section">
        <h2>Konto erstellen</h2>
        <FormVue :formData="registerForm" />
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
  components: {
    Footer,
    FormVue,
    Header,
  },
  created() {
    if (this.$root.isLoggedIn)
      this.$router.push(this.$root.appData.routes.account.to);
    document.title = `Konto erstellen | so* kommunizieren`;
  },
  data() {
    return {
      registerForm: {
        buttonText: "Weiter",
        fields: [
          { ...this.$root.appData.formEntries.email, fullWidth: true },
          this.$root.appData.formEntries.password,
          this.$root.appData.formEntries.confirm,
        ],
        goal: "Konto erstellen",
        secondaryButton: { route: this.$root.appData.routes.login },
        submitLambdaFunction: "register",
        successRoute: this.$root.appData.routes.registered.to,
      },
    };
  },
};
</script>
