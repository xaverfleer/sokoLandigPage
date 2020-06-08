<template>
  <div class="page">
    <Header />
    <main>
      <section class="section">
        <h2>Neues Passwort eingeben</h2>
        <FormVue :formData="newPasswordForm" />
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
    if (this.$root.isLoggedIn)
      this.$router.push(this.$root.appData.routes.account.to);
    if (location.search.indexOf("passwordChangeCode") < 0)
      this.$router.push("page-not-found");
    document.title = `Passwort eingeben | so* kommunizieren`;
  },
  data() {
    return {
      newPasswordForm: {
        fields: [
          {
            ...this.$root.appData.formEntries.password,
            label: "Neues Passwort",
          },
          { ...this.$root.appData.formEntries.confirm },
        ],
        goal: "Passwort ändern",
        name: "enterPassword",
        submitLambdaFunction: "resetChangePassword",
        successRoute: this.$root.appData.routes.changedPassword.to,
      },
    };
  },
};
</script>
