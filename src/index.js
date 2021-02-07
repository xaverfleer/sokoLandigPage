/* global XMLHttpRequest, alert, amplitude, document, localStorage, window */
import LogRocket from "logrocket";

const Player = require("@vimeo/player").default;

const Vimeo = { Player };

const header = document.querySelector(".header");
const headerPlayVideo = document.querySelector(".header__play-video");
const nav = document.querySelector(".nav");
const formElem = document.querySelector("form");
const modalElems = {
  modal: document.querySelector(".modal"),
  close: document.querySelector(".modal__close"),
  vimeoVideo: document.querySelector(".modal__video-iframe"),
};

const learningMode = {
  buttons: {
    alone: document.getElementById("learn-button--alone"),
    group: document.getElementById("learn-button--in-group"),
  },
  content: {
    alone: document.querySelector(".offers__offer--alone"),
    group: document.querySelector(".offers__offer--group"),
  },
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
  if (window.pageYOffset > 350) header.classList.add("header--fixed");
  else header.classList.remove("header--fixed");
});

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

const modalPlayer = new Vimeo.Player(modalElems.vimeoVideo);

function closeModal() {
  modalElems.modal.classList.remove("modal--open");
  page.classList.remove("page--modal-is-open");
  modalPlayer.pause();
}

function openModal() {
  modalElems.modal.classList.add("modal--open");
  page.classList.add("page--modal-is-open");
  modalPlayer.play();
  document.addEventListener("keyup", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

headerPlayVideo.addEventListener("click", openModal);
modalElems.close.addEventListener("click", closeModal);

learningMode.buttons.alone.addEventListener("click", () => {
  learningMode.buttons.alone.classList.add("offer-selector__button--active");
  learningMode.buttons.group.classList.remove("offer-selector__button--active");
  learningMode.content.alone.classList.add("offers__offer--active");
  learningMode.content.group.classList.remove("offers__offer--active");
});

learningMode.buttons.group.addEventListener("click", () => {
  learningMode.buttons.alone.classList.remove("offer-selector__button--active");
  learningMode.buttons.group.classList.add("offer-selector__button--active");
  learningMode.content.alone.classList.remove("offers__offer--active");
  learningMode.content.group.classList.add("offers__offer--active");
});
