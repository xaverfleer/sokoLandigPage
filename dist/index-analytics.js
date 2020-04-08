amplitude.getInstance().logEvent("Page loaded");

var overlay = document.querySelector(".overlay");

document.querySelectorAll(".cta00").forEach(function(e) {
  e.addEventListener("click", function() {
    amplitude.getInstance().logEvent("Anmelden clicked");
  });
});
document.querySelectorAll(".cta01").forEach(function(e) {
  e.addEventListener("click", function() {
    amplitude.getInstance().logEvent("Zu den Videos clicked");
  });
});
document.querySelectorAll(".cta02").forEach(function(element) {
  element.addEventListener("submit", function(event) {
    event.preventDefault();

    var data = getData(event.target.elements);
    submitForm(data);
    element.reset();

    amplitude.getInstance().logEvent("Absenden submitted");
  });
});

document
  .getElementById("overlay__close-button")
  .addEventListener("click", (e) => overlay.classList.add("hidden"));

function submitForm(data) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", ".netlify/functions/absenden");
  xhr.send(data);

  xhr.addEventListener("load", function() {
    window.location.href = "/submitted.html";
  });

  xhr.addEventListener("error", (xhrEventError) => {
    window.alert(
      `Senden fehlgeschlagen, bitte erneut versuchen.\n\nBei wiederholtem Fehlschlagen, kontaktiere uns bitte mit folgenden Details: xhrEventError ${JSON.stringify(
        xhrEventError
      )}`
    );
    window.location.href = "/submission-error.html";
  });
}

function getData(elements) {
  var fields = [].slice.call(elements);

  var raw = fields.slice(2).reduce(function(acc, elem) {
    acc[elem.name] = elem.value;
    return acc;
  }, {});
  raw.reservations = fields[1].checked ? 2 : 1;

  var stringified = JSON.stringify(raw);
  var encoded = encodeURIComponent(stringified);

  return encoded;
}
