/* global alert, amplitude, document, paypal, window, XMLHttpRequest */

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
