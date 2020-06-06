<template>
  <div class="page">
    <Header :routes="$root.appData.account.routes" />
    <main>
      <section class="section">
        <h2>Konto verwalten</h2>
        <h3>Passwort ändern</h3>
        <FormVue :formData="changePasswordForm" />
      </section>
      <section class="section">
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
import routes from "../data/routes";
import stateManagement from "../stateManagement";
import Footer from "./Footer.vue";
import FormVue from "./FormVue.vue";
import Header from "./Header.vue";

export default {
  components: { Footer, FormVue, Header },
  created() {
    if (!this.$root.isLoggedIn)
      this.$router.push(this.$root.appData.routes.register.to);
    document.title = `Konto | so* kommunizieren`;
  },
  data() {
    return {
      changePasswordForm: {
        fields: [
          {
            inputId: "form__old-password",
            label: "Altes Passwort",
            name: "oldPassword",
            type: "password",
            fullWidth: true,
          },
          {
            ...this.$root.appData.formEntries.password,
            checks: [
              {
                test: (val, entries) => val !== entries.oldPassword,
                message:
                  "Das neue Passwort muss sich vom alten Passwort unterscheiden.",
              },
            ],
            help: "",
            label: "Neues Passwort",
          },
          {
            ...this.$root.appData.formEntries.confirm,
            label: "Neues Passwort bestätigen",
          },
        ],
        goal: "Passwort ändern",
        submitLambdaFunction: "changePassword",
        successRoute: this.$root.appData.routes.changedPassword.to,
      },
      deleteAccountForm: {
        fields: [
          { ...this.$root.appData.formEntries.password },
          { ...this.$root.appData.formEntries.confirm },
        ],
        goal: "Konto löschen",
        postSubmit: () => stateManagement.updateSession(null),
        submitLambdaFunction: "deleteAccount",
        successRoute: "/account-deleted",
      },
    };
  },
};
</script>
