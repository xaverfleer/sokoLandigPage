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
import appData from "~/data/appData";

export default {
  components: { PaymentFlow },
  computed: {
    appData() {
      return appData;
    },
    offer() {
      return appData.offers.single;
    },
  },
  metaInfo: {
    meta: [
      { name: "canonical", href: "https://so-kommunizieren.ch/buchen" },
      {
        name: "description",
        content: "Buchen und unbeschränkten Zugriff sichern.",
      },
    ],
    script: [
      {
        src: "/amplitudeSnippet.js",
      },
    ],
    title: "Kurs buchen",
  },
};
</script>
