/* global amplitude, document, window */

const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

amplitude.getInstance().logEvent("Page loaded");

document.querySelectorAll(".cta05").forEach(function bindHandler(e) {
  e.addEventListener("click", function logEvent() {
    amplitude.getInstance().logEvent("Jetzt buchen");
  });
});

document
  .getElementById("overlay__close-button")
  .addEventListener("click", function hideOverlay() {
    overlay.classList.add("hidden");
  });

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
