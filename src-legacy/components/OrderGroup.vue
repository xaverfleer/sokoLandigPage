<template>
  <div class="page">
    <Header />
    <main>
      <section class="section">
        <h2>{{ offer.title }}</h2>
        <PaymentFlow :offer="offer" />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import PaymentFlow from "./PaymentFlow.vue";
import Header from "./Header.vue";

import appData from "../data/appData";

export default {
  components: { Footer, Header, PaymentFlow },
  computed: {
    offer() {
      return appData.offers.group;
    },
  },
  created() {
    document.title = `Jetzt buchen | so* kommunizieren`;
  },
};
</script>
