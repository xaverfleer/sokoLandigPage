<template>
  <Layout>
    <section class="section">
      <h2>Anmelden</h2>
      <FormVue :formData="loginForm" />
      <div>
        Noch kein Konto?
        <g-link :to="appData.routes.register.to">Hier registrieren. </g-link>
      </div>
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
    appData() {
      return appData;
    },
    loginForm() {
      return {
        fields: [
          { ...appData.formEntries.email },
          { ...appData.formEntries.password },
        ],
        goal: "Anmelden",
        name: "login",
        postSubmit: (xhr) => {
          const { email, isPaidAccount, sessionId, ts } = JSON.parse(
            xhr.responseText
          );
          stateManagement.updateSession({
            email,
            isPaidAccount,
            sessionId,
            ts,
          });
        },
        secondaryButton: { route: appData.routes.resetPassword },
        submitLambdaFunction: "login",
        successRoute: appData.routes.loggedIn.to,
      };
    },
  },
  metaInfo: {
    meta: [
      { name: "canonical", href: "https://so-kommunizieren.ch/login/" },
      {
        name: "description",
        content: "Anmelden und loslegen. Login zum Online-Videokurs.",
      },
    ],
    title: "Login",
  },
};
</script>
