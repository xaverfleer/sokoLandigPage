<template>
  <div class="page">
    <Header :routes="$root.appData.standardNavRoutes" />
    <main>
      <section class="section">
        <h2>Anmelden</h2>
        <FormVue :formData="loginForm" />
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
    document.title = `Anmelden | so* kommunizieren`;
  },
  data() {
    return {
      loginForm: {
        fields: [
          this.$root.appData.formEntries.email,
          this.$root.appData.formEntries.password,
        ],
        goal: "Anmelden",
        postSubmit: (xhr) => {
          const { sessionId, ts } = JSON.parse(
            decodeURIComponent(xhr.responseText)
          );
          stateManagement.updateSession({ sessionId, ts });
        },
        secondaryButton: { route: this.$root.appData.routes.register },
        submitLambdaFunction: "login",
        successRoute: this.$root.appData.routes.loggedIn.to,
      },
    };
  },
};
</script>
