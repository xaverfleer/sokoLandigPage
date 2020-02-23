amplitude.getInstance().logEvent("Page loaded");

var overlay = document.querySelector(".overlay");

document.querySelectorAll(".cta00").forEach(function(e) {
  e.addEventListener("click", function() {
    overlay.classList.remove("hidden");
    amplitude.getInstance().logEvent("Anmelden clicked");
  });
});
document.querySelectorAll(".cta01").forEach(function(e) {
  e.addEventListener("click", function() {
    amplitude.getInstance().logEvent("Zu den Videos clicked");
  });
});

document
  .getElementById("overlay__close-button")
  .addEventListener("click", e => overlay.classList.add("hidden"));
