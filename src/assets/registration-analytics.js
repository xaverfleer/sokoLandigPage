amplitude.getInstance().logEvent("Booking page loaded");

document.querySelectorAll(".form").forEach(function(element) {
  element.addEventListener("submit", function(event) {
    event.preventDefault();

    var data = getData(event.target.elements);
    submitForm(data);
    element.reset();

    amplitude.getInstance().logEvent("Registration submitted");
  });
});

function submitForm(data) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", ".netlify/functions/register");
  xhr.send(data);

  xhr.addEventListener("load", function() {
    window.alert(`Registrierung erfolgreich.`);
  });

  xhr.addEventListener("error", (xhrEventError) => {
    window.alert(
      `Registrierung fehlgeschlagen, bitte erneut versuchen.\n\nBei wiederholtem Fehlschlagen, kontaktiere uns bitte mit folgenden Details: xhrEventError ${JSON.stringify(
        xhrEventError
      )}`
    );
  });
}

function getData(elements) {
  var fields = [].slice.call(elements);

  var raw = fields.slice(2).reduce(function(acc, elem) {
    acc[elem.name] = elem.value;
    return acc;
  }, {});
  raw.product = fields[1].checked ? "standard" : "early-bird";

  var stringified = JSON.stringify(raw);
  var encoded = encodeURIComponent(stringified);

  return encoded;
}

var nav = document.querySelector(".nav");
nav.addEventListener("click", function() {
  var classList = nav.classList;
  [].slice.call(classList).indexOf("nav--active") > -1
    ? classList.remove("nav--active")
    : classList.add("nav--active");
});

var header = document.querySelector(".header");
window.addEventListener("scroll", function(event) {
  window.pageYOffset > 360
    ? header.classList.add("header--fixed")
    : header.classList.remove("header--fixed");
});
