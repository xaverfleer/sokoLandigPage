amplitude.getInstance().logEvent("Submitted page loaded");

document.querySelectorAll(".cta01").forEach(function(e) {
  e.addEventListener("click", function() {
    amplitude.getInstance().logEvent("Zu den Videos clicked");
  });
});
document.querySelectorAll(".cta03").forEach(function(e) {
  e.addEventListener("click", function() {
    amplitude.getInstance().logEvent("Zur Startseite");
  });
});
