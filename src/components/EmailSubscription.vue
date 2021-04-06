<template>
  <div class="subscription">
    <h2>E-Mails abonnieren</h2>
    <div>
      Möchtest du auf dem Laufenden bleiben? Abonniere den Newsletter und werde
      1x im Monat über Neuigkeiten informiert. Keine Angst, du kannst dich
      jederzeit austragen.
    </div>
    <FormVue :formData="newsletterSubscriptionForm" />
  </div>
</template>

<script>
import FormVue from "~/components/FormVue";
import appData from "~/data/appData";
import { setSubscriptionAlert } from "~/stateManagement";

export default {
  components: { FormVue },
  data() {
    return {
      newsletterSubscriptionForm: {
        fields: [{ ...appData.formEntries.email }],
        goal: "Newsletter abonnieren",
        layout: "small",
        name: "newsletter-subscription",
        postSubmit: () => {
          alert("Vielen Dank. Deine E-Mail-Adresse ist registriert.");
          setSubscriptionAlert({ subscribed: true });
        },
        submitLambdaFunction: "subscribeForNewsletter",
      },
    };
  },
};
</script>

<style scoped>
.subscription {
  margin-bottom: 3em;
}
</style>
