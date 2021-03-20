<template>
  <div class="subscription">
    <div>
      Möchtest du auf dem Laufenden bleiben? Abonniere den Newsletter und werde
      informiert, sobald es Neuigkeiten gibt.
    </div>
    <FormVue :formData="newsletterSubscriptionForm" />
  </div>
</template>

<script>
import FormVue from "~/components/FormVue";
import appData from "~/data/appData";

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
