/* global XMLHttpRequest, alert, amplitude, document, localStorage, window */
import LogRocket from "logrocket";

const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const formElem = document.querySelector("form");
const modalElems = {
  modal: document.querySelector(".modal"),
  close: document.querySelector(".modal__close"),
};
const page = document.querySelector(".page");

const hideGdpr = () =>
  document.querySelector(".gdpr").setAttribute("style", "display: none;");

function consentRequiringActions() {
  if (window.location.toString().indexOf("localhost") === -1) {
    LogRocket.init("yxvjmb/soko");
    amplitude.getInstance().logEvent("Page loaded");

    document.querySelectorAll(".cta05").forEach(function bindHandler(e) {
      e.addEventListener("click", function logEvent() {
        amplitude.getInstance().logEvent("Jetzt buchen");
      });
    });
  }
}

const storageGdpr = localStorage.getItem("soko-gdpr");

if (["accepted", "ignored"].indexOf(storageGdpr) >= 0) {
  hideGdpr();
} else {
  const elems = {
    accept: document.getElementById("gdpr__accept"),
    ignore: document.getElementById("gdpr__ignore"),
  };
  const handle = {
    accept: () => {
      localStorage.setItem("soko-gdpr", "accepted");
      hideGdpr();
      handle.unbind();
      consentRequiringActions();
    },
    ignore: () => {
      localStorage.setItem("soko-gdpr", "ignored");
      hideGdpr();
      handle.unbind();
    },
    unbind: () => {
      elems.accept.removeEventListener("click", handle.accept);
      elems.ignore.removeEventListener("click", handle.ignore);
    },
  };

  elems.accept.addEventListener("click", handle.accept);
  elems.ignore.addEventListener("click", handle.ignore);
}

if (storageGdpr === "accepted") consentRequiringActions();

nav.addEventListener("click", function toggleNavActive() {
  const { classList } = nav;
  if ([].slice.call(classList).indexOf("nav--active") > -1)
    classList.remove("nav--active");
  else classList.add("nav--active");
});

window.addEventListener("scroll", function toggleHeaderPositioning() {
  if (window.pageYOffset > 360) header.classList.add("header--fixed");
  else header.classList.remove("header--fixed");
});

function offsetAnchor() {
  if (window.location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 50);
  }
}

document
  .querySelectorAll('a[href^="#"]')
  .forEach((elem) =>
    elem.addEventListener("click", () =>
      window.setTimeout(() => offsetAnchor())
    )
  );

window.setTimeout(offsetAnchor);

function getFormData() {
  const entries = [].slice.call(formElem.elements);

  const data = entries.reduce(
    (acc, elem) => (elem.value ? { ...acc, [elem.name]: elem.value } : acc),
    {}
  );
  return JSON.stringify(data);
}

function submitForm() {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", `.netlify/functions/sendMessage`);
  xhr.send(getFormData());
  xhr.addEventListener("load", () => {
    switch (xhr.status) {
      case 200:
        [].slice.call(formElem.elements).forEach(function clearElem(elem) {
          // eslint-disable-next-line no-param-reassign
          elem.value = "";
        });
        // this.handleSuccess(xhr);
        break;
      default:
        // eslint-disable-next-line no-alert
        alert(
          "Senden der Nachricht fehlgeschlagen.\nBitte versuche es später noch einmal oder kontaktiere uns unter kurs@so-kommunizieren.ch."
        );
        break;
    }
  });

  xhr.addEventListener("error", () => {
    // eslint-disable-next-line no-alert
    alert(
      "Senden der Nachricht fehlgeschlagen.\nBitte versuche es später noch einmal oder kontaktiere uns unter kurs@so-kommunizieren.ch."
    );
  });
}

document.querySelector("form").addEventListener("submit", submitForm);

modalElems.close.addEventListener("click", () => {
  modalElems.modal.classList.remove("modal--open");
  page.classList.remove("page--modal-is-open");
});
