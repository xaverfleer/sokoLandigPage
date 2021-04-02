<template>
  <Layout>
    <section>
      <h1>Neues Passwort definieren</h1>
      <FormVue :formData="newPasswordForm" />
    </section>
  </Layout>
</template>

<script>
import FormVue from "~/components/FormVue.vue";
import appData from "~/data/appData";

export default {
  components: { FormVue },
  computed: {
    newPasswordForm() {
      return {
        fields: [
          { ...appData.formEntries.password, label: "Neues Passwort" },
          { ...appData.formEntries.confirm },
        ],
        goal: "Passwort ändern",
        name: "enterNewPassword",
        submitLambdaFunction: "resetChangePassword",
        successRoute: appData.routes.changedPassword.to,
      };
    },
  },
  metaInfo: {
    meta: [
      {
        name: "canonical",
        href: "https://so-kommunizieren.ch/neues-passwort-definieren/",
      },
      {
        name: "description",
        content:
          "Neues Passwort definieren, damit du dich in Zukunft anmelden kannst.",
      },
      { name: "robots", content: "noindex" },
    ],
    title: "Neues Passwort definieren",
  },
};
</script>
