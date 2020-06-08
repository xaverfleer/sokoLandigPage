<template>
  <div class="page">
    <Header
      :routes="
        $root.isLoggedIn
          ? $root.appData.standardNavRoutesLoggedIn
          : $root.appData.standardNavRoutesLoggedOut
      "
    />
    <main>
      <section class="section">
        <h2>Passwort zurücksetzen</h2>
        <FormVue :formData="resetPasswordForm" />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import FormVue from "./FormVue.vue";

export default {
  components: {
    Footer,
    Header,
    FormVue,
  },
  created() {
    if (this.$root.isLoggedIn)
      this.$router.push(this.$root.appData.routes.account.to);
    document.title = `Passwort zurücksetzen | so* kommunizieren`;
  },
  data() {
    return {
      resetPasswordForm: {
        fields: [{ ...this.$root.appData.formEntries.email }],
        goal: "Zurücksetzen",
        submitLambdaFunction: "resetPassword",
        successRoute: this.$root.appData.routes.passwordLinkSent.to,
      },
    };
  },
};
</script>
