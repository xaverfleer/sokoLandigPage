amplitude.getInstance().logEvent("Page loaded");

var overlay = document.querySelector(".overlay");

document.querySelectorAll(".cta05").forEach(function(e) {
  e.addEventListener("click", function() {
    amplitude.getInstance().logEvent("Jetzt buchen");
  });
});

document
  .getElementById("overlay__close-button")
  .addEventListener("click", function(e) {
    overlay.classList.add("hidden");
  });

var nav = document.querySelector(".nav");
nav.addEventListener("click", function() {
  var classList = nav.classList;
  [].slice.call(classList).indexOf("nav--active") > -1
    ? classList.remove("nav--active")
    : classList.add("nav--active");
});

var headerContent = document.querySelector(".header__content");
window.addEventListener("scroll", function(event) {
  window.pageYOffset > 360
    ? headerContent.classList.add("header__content--fixed")
    : headerContent.classList.remove("header__content--fixed");
});
