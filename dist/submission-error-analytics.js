amplitude.getInstance().logEvent("Submission-error page loaded");

document.querySelectorAll(".cta03").forEach(function(e) {
e.addEventListener("click", function() {
amplitude.getInstance().logEvent("Zur Startseite");
});
});
