<template>
  <div class="page">
    <Header />
    <main>
      <section class="section">
        <h2>Early-Bird-Packet buchen – CHF&thinsp;35</h2>
        <p>
          Dieser Onlinekurs befindet sich noch im Aufbau. <em>DEIN</em> Feedback
          ist uns wichtig! Deswegen suchen wir zehn neugierige Eltern oder
          Bezugspersonen, die fortlaufend unsere neuen Kursinhalte testen. Werde
          zum Early-Bird und profitiere jetzt von einem einmaligen Rabatt von
          80%, wenn du...
        </p>
        <ul class="ul--3-dots">
          <li>
            Elternteil oder Bezugsperson eines Babys zwischen 0 und 2 Jahren
            bist,
          </li>
          <li>
            dich für die einfühlsame, wertschätzende, stärkende Kommunikation
            mit Babys interessierst,
          </li>
          <li>
            uns mit deinem Feedback zu unseren Kursinhalten weiterhelfen willst.
          </li>
        </ul>
        <p>
          Die ersten zehn Personen, die sich für unser Early Bird Paket
          anmelden, ...
        </p>
        <ul class="ul--3-dots">
          <li>
            profitieren von einem Rabatt von 80% (CHF&thinsp;35 statt
            Standardpreis CHF&thinsp;180),
          </li>
          <li>erhalten sofort Zugriff auf alle verfügbaren Inhalte,</li>
          <li>
            erhalten fortlaufend und dauerhaft Zugriff auf alle neuen und
            überarbeiteten Kursinhalte.
          </li>
        </ul>
      </section>
      <section class="section">
        <PaymentFlow />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import PaymentFlow from "./PaymentFlow.vue";
import Header from "./Header.vue";

export default {
  components: { Footer, Header, PaymentFlow },
  created() {
    document.title = `Early-Bird buchen | so* kommunizieren`;
  },
};
</script>
