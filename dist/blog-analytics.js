amplitude.getInstance().logEvent("Blog page loaded");

var overlay = document.querySelector(".overlay");

document
  .getElementById("overlay__close-button")
  .addEventListener("click", function() {
    overlay.classList.add("hidden");
  });

var header = document.querySelector(".header");
window.addEventListener("scroll", function(event) {
  window.pageYOffset > 360
    ? header.classList.add("header--fixed")
    : header.classList.remove("header--fixed");
});
