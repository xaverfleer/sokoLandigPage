<template>
  <Layout>
    <section class="section">
      <h1>Passwort zurücksetzen</h1>
      <FormVue :formData="resetPasswordForm" />
    </section>
  </Layout>
</template>

<script>
import FormVue from "~/components/FormVue.vue";
import appData from "~/data/appData";

export default {
  components: { FormVue },
  computed: {
    appData() {
      return appData;
    },
    resetPasswordForm() {
      return {
        fields: [{ ...appData.formEntries.email }],
        goal: "Zurücksetzen",
        name: "resetPassword",
        submitLambdaFunction: "resetPassword",
        successRoute: appData.routes.passwordLinkSent.to,
      };
    },
  },
  metaInfo: {
    meta: [
      {
        name: "canonical",
        href: "https://so-kommunizieren.ch/passwort-zuruecksetzen/",
      },
      {
        name: "description",
        content: "Passwort vergessen? Hier zurücksetzen und einloggen.",
      },
    ],
    title: "Passwort zurücksetzen",
  },
};
</script>
