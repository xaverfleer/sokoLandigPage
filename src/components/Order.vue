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
        <div class="paypal-button-container"></div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import routes from "../data/routes";
import stateManagement from "../stateManagement";
import Footer from "./Footer.vue";
import FormVue from "./FormVue.vue";
import Header from "./Header.vue";

export default {
  components: { Footer, FormVue, Header },
  created() {
    document.title = `Early-Bird buchen | so* kommunizieren`;
  },
  methods: {
    loadPaypalButton() {
      paypal
        .Buttons({
          createOrder(data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "35",
                  },
                },
              ],
            });
          },
          onApprove(data, actions) {
            return actions.order.capture().then((details) => {
              function handleSuccess() {
                // eslint-disable-next-line no-alert
                alert(
                  `Zahlung von ${details.payer.name.given_name} erfolgreich ausgeführt. Vorläufig wird dein Konto manuell aktiviert. Wir melden uns in Kürze bei dir. Falls du Fragen hast, melde dich bitte bei kurs@so-kommunizieren.ch.`
                );
              }
              function handleFailure() {
                // Fingers crossed (thread should not enter here)
                handleSuccess();
              }

              const stringifiedData = JSON.stringify(details);
              const xhr = new XMLHttpRequest();
              xhr.open("POST", `.netlify/functions/order`);
              xhr.send(stringifiedData);
              xhr.addEventListener("load", () => {
                switch (xhr.status) {
                  case 200:
                    handleSuccess(xhr);
                    break;
                  case 500:
                  case 504:
                  default:
                    handleFailure();
                    break;
                }
              });

              xhr.addEventListener("error", () => {
                handleFailure();
              });
            });
          },
        })
        .render(".paypal-button-container");
    },
    waitForPaypal(i) {
      if (i < 100) {
        if (window.paypal) {
          this.loadPaypalButton();
        } else {
          window.setTimeout(this.waitForPaypal.bind(this, i + 1), i * 100);
        }
      }
    },
  },
  mounted() {
    this.waitForPaypal(0);
  },
};
</script>
