<template>
  <Layout>
    <section class="section">
      <h1>Konto verwalten ({{ shortenedEmail }})</h1>
      <h2>Abmelden</h2>
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
      <h2>Kurs buchen</h2>
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
      <h2>Passwort ändern</h2>
      <FormVue :formData="changePasswordForm" />
    </section>
    <section class="section">
      <h2>Konto löschen</h2>
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
import stateM8t from "~/stateManagement";

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
        postSubmit: () => stateM8t.updateSession(null),
        submitLambdaFunction: "deleteAccount",
        successRoute: appData.routes.accountDeleted.to,
      };
    },
    isLoggedIn() {
      return stateM8t.isLoggedIn();
    },
    shortenedEmail() {
      const email =
        (this.isLoggedIn && this.state.session && this.state.session.email) ||
        "";
      return `${email.substring(0, 3)}...${email.substring(email.length - 3)}`;
    },
    isPaidAccount() {
      return stateM8t.isPaidAccount;
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
    this.state = stateM8t.subscribe((state) => {
      this.state = state;
    });
  },
};
</script>
