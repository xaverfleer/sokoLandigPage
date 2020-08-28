<template>
  <div class="page">
    <Header />
    <main>
      <section class="section">
        <h2>Anmelden</h2>
        <FormVue :formData="loginForm" />
        <div>
          Noch kein Konto?
          <router-link :to="$root.appData.routes.register.to"
            >Hier registrieren.
          </router-link>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import stateManagement from "../stateManagement";
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
    document.title = `Anmelden | so* kommunizieren`;
  },
  data() {
    return {
      loginForm: {
        fields: [
          { ...this.$root.appData.formEntries.email },
          { ...this.$root.appData.formEntries.password },
        ],
        goal: "Anmelden",
        name: "login",
        postSubmit: (xhr) => {
          const { email, isPaidAccount, sessionId, ts } = JSON.parse(
            xhr.responseText
          );
          stateManagement.updateSession({
            email,
            isPaidAccount,
            sessionId,
            ts,
          });
        },
        secondaryButton: { route: this.$root.appData.routes.resetPassword },
        submitLambdaFunction: "login",
        successRoute: this.$root.appData.routes.loggedIn.to,
      },
    };
  },
};
</script>
