var amplitudeInstance = amplitude.getInstance();
amplitudeInstance.logEvent("Page loaded");

var overlay = document.querySelector(".overlay");

document.querySelectorAll(".cta00").forEach(function(e) {
  e.addEventListener("click", function() {
    overlay.classList.remove("hidden");
    amplitudeInstance.logEvent("Anmelden clicked");
  });
});
document.querySelectorAll(".cta01").forEach(function(e) {
  e.addEventListener("click", function() {
    amplitudeInstance.logEvent("Zu den Videos clicked");
  });
});
document.querySelectorAll(".cta02").forEach(function(e) {
  e.addEventListener("submit", function(e) {
    e.preventDefault();
    var fields = [].slice.call(e.target.elements);
    data = fields.slice(2).reduce(function(acc, elem) {
      acc[elem.name] = elem.value;
      return acc;
    }, {});
    data.reservations = fields[1].checked ? 2 : 1;
    amplitudeInstance.logEvent("Absenden submitted", data);
  });
});

document
  .getElementById("overlay__close-button")
  .addEventListener("click", e => overlay.classList.add("hidden"));
