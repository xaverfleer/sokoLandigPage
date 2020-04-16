amplitude.getInstance().logEvent("Submission-error page loaded");

document.querySelectorAll(".cta03").forEach(function(e) {
  e.addEventListener("click", function() {
    amplitude.getInstance().logEvent("Zur Startseite");
  });
});

var headerContent = document.querySelector(".header__content");
window.addEventListener("scroll", function(event) {
  window.pageYOffset > 360
    ? headerContent.classList.add("header__content--fixed")
    : headerContent.classList.remove("header__content--fixed");
});
