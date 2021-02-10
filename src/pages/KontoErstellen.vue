<template>
  <Layout>
    <section class="section">
      <h2>Konto erstellen</h2>
      <FormVue :formData="registerForm" />
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
    registerForm() {
      return {
        buttonText: "Weiter",
        fields: [
          { ...appData.formEntries.email, fullWidth: true },
          { ...appData.formEntries.password },
          { ...appData.formEntries.confirm },
        ],
        goal: "Konto erstellen",
        name: "register",
        secondaryButton: { route: appData.routes.login },
        submitLambdaFunction: "register",
        successRoute: appData.routes.registered.to,
      };
    },
  },
  metaInfo: {
    meta: [
      {
        name: "canonical",
        href: "https://so-kommunizieren.ch/konto-erstellen/",
      },
      {
        name: "description",
        content:
          "Neues Konto erstellen und loslegen. Registrierung zum Online-Videokurs.",
      },
    ],
    title: "Konto erstellen",
  },
};
</script>
