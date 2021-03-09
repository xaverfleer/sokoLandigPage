<template>
  <div class="subscription">
    <div class="subscription__separator" />
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
        submitLambdaFunction: "sendMessage",
      },
    };
  },
};
</script>

<style scoped>
.subscription {
  margin-bottom: 3em;
}

.subscription__separator {
  margin: 2em 0;
  border-top: 1px solid #966b40;
}
</style>
