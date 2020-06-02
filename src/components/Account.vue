<template>
  <div class="page">
    <Header :routes="$root.appData.standardNavRoutes" />
    <main>
      <section class="section">
        <h2>Konto verwalten</h2>
        <h3>Konto löschen</h3>
        <p class="center">
          Achtung, dieser Schritt kann nicht rückgängig gemacht werden!
        </p>
        <FormVue :formData="deleteAccountForm" />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import stateManagement from "../stateManagement";
import Footer from "./Footer.vue";
import FormVue from "./FormVue.vue";
import Header from "./Header.vue";

export default {
  components: { Footer, FormVue, Header },
  created() {
    document.title = `Konto | so* kommunizieren`;
  },
  data() {
    return {
      deleteAccountForm: {
        fields: [
          { ...this.$root.appData.formEntries.password },
          { ...this.$root.appData.formEntries.confirm },
        ],
        goal: "Konto löschen",
        postSubmit() {
          stateManagement.updateSession(null);
        },
        submitLambdaFunction: "deleteAccount",
        successRoute: "/account-deleted",
      },
    };
  },
};
</script>
