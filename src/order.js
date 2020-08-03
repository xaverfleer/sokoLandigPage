/* global alert, amplitude, document, paypal, window */

amplitude.getInstance().logEvent("Order page loaded");

const nav = document.querySelector(".nav");
nav.addEventListener("click", () => {
  const { classList } = nav;
  if ([].slice.call(classList).indexOf("nav--active") > -1)
    classList.remove("nav--active");
  else classList.add("nav--active");
});

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 360) header.classList.add("header--fixed");
  else header.classList.remove("header--fixed");
});

document.querySelector(".paypal-button-container").innerHTML = "";
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
        // eslint-disable-next-line no-alert
        alert(
          `Zahlung von ${details.payer.name.given_name} erfolgreich ausgeführt. Vorläufig wird dein Konto manuell aktiviert. Wir melden uns in Kürze bei dir. Falls du Fragen hast, melde dich bitte bei kurs@so-kommunizieren.ch.`
        );
      });
    },
  })
  .render(".paypal-button-container");
