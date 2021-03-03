<template>
  <Layout>
    <section class="section">
      <h2>{{ offer.title }}</h2>
      <PaymentFlow :offer="offer" />
    </section>
  </Layout>
</template>

<script>
import PaymentFlow from "~/components/PaymentFlow.vue";
import { trackPageLoad } from "~/scripts/analytics";
import appData from "~/data/appData";

export default {
  components: { PaymentFlow },
  computed: {
    appData() {
      return appData;
    },
    offer() {
      return appData.offers.group;
    },
  },
  metaInfo: {
    meta: [
      {
        name: "canonical",
        href: "https://so-kommunizieren.ch/gruppenkurs-buchen/",
      },
      {
        name: "description",
        content:
          "Geleiteten, strukturierten Online-Video-Kurs buchen und unbeschränkten Zugriff sichern.",
      },
    ],
    script: [
      {
        async: true,
        src:
          // Production account
          "https://www.paypal.com/sdk/js?client-id=AVxs7MSWpOS4Dl88lLb4EPFLK0WVj2x38B69JlPVgtaHXlV5UAiosc_HXefejUgY0a_azV9ktFYclM5E&currency=CHF&integration-date=2020-08-03",
        // Sandbox account
        // "https://www.paypal.com/sdk/js?client-id=AU3WQ_fkz9T61156i3E3RGNIg0doaMBqq1FLMEhno702Tth_MZix5a3Dn1LUPsTqNRZ0NoaTobLuRAXE&currency=CHF&integration-date=2020-08-03&debug=true",
      },
    ],
    title: "Gruppenkurs buchen",
  },
  mounted() {
    trackPageLoad(this.$route.path);
  },
};
</script>
