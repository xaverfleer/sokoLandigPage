<template>
  <Layout>
    <section class="section">
      <h1>Passwort definieren</h1>
      <FormVue :formData="setPasswordForm" />
    </section>
  </Layout>
</template>

<script>
import FormVue from "~/components/FormVue.vue";
import appData from "~/data/appData";

export default {
  components: { FormVue },
  computed: {
    setPasswordForm() {
      return {
        fields: [appData.formEntries.password, appData.formEntries.confirm],
        goal: "Passwort definieren",
        name: "setPassword",
        submitLambdaFunction: "setInitialPassword",
        successRoute: appData.routes.definedPassword.to,
      };
    },
  },
  metaInfo: {
    meta: [
      {
        name: "canonical",
        href: "https://so-kommunizieren.ch/passwort-definieren/",
      },
      {
        name: "description",
        content:
          "Passwort definieren, damit du dich in Zukunft anmelden kannst.",
      },
      { name: "robots", content: "noindex" },
    ],
    title: "Passwort definieren",
  },
};
</script>
