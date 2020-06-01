<template>
  <div class="page">
    <Header :routes="$root.appData.standardNavRoutes" />
    <main>
      <section class="section">
        <h2>Konto verwalten</h2>
        <h3>Konto löschen</h3>
        <FormVue :formData="deleteAccountForm" />
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
    document.title = `Konto | so* kommunizieren`;
  },
  data() {
    return {
      deleteAccountForm: {
        fields: [
          { ...this.$root.appData.formEntries.email, fullWidth: true },
          { ...this.$root.appData.formEntries.password },
          {
            ...this.$root.appData.formEntries.confirm,
            help: "",
            checks: [
              {
                test: (val, allEntries) => val === allEntries.password,
                message: "Die Passwörter stimmen nicht überein.",
              },
            ],
          },
        ],
      },
    };
  },
};
</script>
