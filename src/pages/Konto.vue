<template>
  <Layout>
    <section class="section">
      <h2>Konto verwalten ({{ shortenedEmail }})</h2>
      <h3>Abmelden</h3>
      <div class="form">
        <p>
          Du bist als
          {{ isLoggedIn ? state.session && state.session.email : "unbekannt" }}
          angemeldet. Falls diese Adresse nicht dir gehört, melde dich bitte
          <g-link to="/abmelden/">hier</g-link> ab.
        </p>
        <div class="buttons form__buttons">
          <button class="button button--primary">
            <g-link to="/abmelden/">Abmelden</g-link>
          </button>
        </div>
      </div>
    </section>
    <section class="section" v-if="!isPaidAccount">
      <h3>Kurs buchen</h3>
      <div class="form">
        <p>
          Du hast freien Zugriff
          <g-link to="/kurs/">zum ersten Kursblock.</g-link>
          Buche den Kurs, um alle Inhalte zu sehen.
        </p>
        <div class="buttons form__buttons">
          <button class="button button--primary">
            <g-link to="/#offer">Jetzt buchen</g-link>
          </button>
        </div>
      </div>
    </section>
    <section class="section">
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
  </Layout>
</template>

<script>
import FormVue from "~/components/FormVue.vue";

import appData from "~/data/appData";
import stateManagement from "~/stateManagement";

export default {
  components: { FormVue },
  computed: {
    changePasswordForm() {
      return {
        fields: [
          {
            inputId: "form__old-password",
            label: "Altes Passwort",
            name: "oldPassword",
            type: "password",
            fullWidth: true,
          },
          {
            ...appData.formEntries.password,
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
            ...appData.formEntries.confirm,
            label: "Neues Passwort bestätigen",
          },
        ],
        goal: "Passwort ändern",
        name: "changePassword",
        submitLambdaFunction: "changePassword",
        successRoute: appData.routes.changedPassword.to,
      };
    },
    deleteAccountForm() {
      return {
        fields: [
          { ...appData.formEntries.password },
          { ...appData.formEntries.confirm },
        ],
        goal: "Konto löschen",
        name: "deleteAccount",
        postSubmit: () => stateManagement.updateSession(null),
        submitLambdaFunction: "deleteAccount",
        successRoute: appData.routes.accountDeleted.to,
      };
    },
    isLoggedIn() {
      return stateManagement.isLoggedIn();
    },
    shortenedEmail() {
      const email =
        (this.isLoggedIn && this.state.session && this.state.session.email) ||
        "";
      return `${email.substring(0, 3)}...${email.substring(email.length - 3)}`;
    },
    isPaidAccount() {
      return stateManagement.isPaidAccount;
    },
  },
  data() {
    return { state: {} };
  },
  metaInfo: {
    meta: [
      {
        name: "canonical",
        href: "https://so-kommunizieren.ch/konto/",
      },
      {
        name: "description",
        content: "Dein Konto",
      },
      { name: "robots", content: "noindex" },
    ],
    title: "Konto",
  },
  mounted() {
    this.state = stateManagement.subscribe((state) => {
      this.state = state;
    });
  },
};
</script>
