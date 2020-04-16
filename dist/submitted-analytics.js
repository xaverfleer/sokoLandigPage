amplitude.getInstance().logEvent("Submitted page loaded");

var headerContent = document.querySelector(".header__content");
window.addEventListener("scroll", function(event) {
  window.pageYOffset > 360
    ? headerContent.classList.add("header__content--fixed")
    : headerContent.classList.remove("header__content--fixed");
});
