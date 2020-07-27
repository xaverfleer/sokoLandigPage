/* global amplitude, document, window */

const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

amplitude.getInstance().logEvent("Page loaded");

document.querySelectorAll(".cta05").forEach(function bindHandler(e) {
  e.addEventListener("click", function logEvent() {
    amplitude.getInstance().logEvent("Jetzt buchen");
  });
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
