amplitude.getInstance().logEvent("Blog page loaded");

var overlay = document.querySelector(".overlay");

document
  .getElementById("overlay__close-button")
  .addEventListener("click", function() {
    overlay.classList.add("hidden");
  });

var headerContent = document.querySelector(".header__content");
window.addEventListener("scroll", function(event) {
  window.pageYOffset > 360
    ? headerContent.classList.add("header__content--fixed")
    : headerContent.classList.remove("header__content--fixed");
});
