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
document.querySelectorAll(".cta02").forEach(function(e) {
  e.addEventListener("submit", function(e) {
    e.preventDefault();
    // Use the FormData object to collect form elements given it's easy (e.g. automatically excludes `submit`) and Netlify only accepts URL-encoded key/value pairs.
    const formData = new FormData(e.target);
    submitForm(formData);
    amplitude.getInstance().logEvent("Absenden submitted");
  });
});

document
  .getElementById("overlay__close-button")
  .addEventListener("click", e => overlay.classList.add("hidden"));

function submitForm(data) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", ".netlify/functions/absenden");
  xhr.send(data);
}
