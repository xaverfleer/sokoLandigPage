amplitude.getInstance().logEvent("Booking page loaded");

document.querySelectorAll(".form").forEach(function(element) {
  element.addEventListener("submit", function(event) {
    event.preventDefault();

    var data = getData(event.target.elements);
    submitForm(data);
    element.reset();

    amplitude.getInstance().logEvent("Absenden submitted");
  });
});

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

  const data = fields
    .filter((elem) => elem.nodeName === "INPUT" || elem.nodeName === "TEXTAREA")
    .filter((elem) => elem.type !== "radio" || elem.checked === true)
    .reduce((acc, elem) => {
      return { ...acc, [elem.name]: elem.value };
    }, {});

  var stringified = JSON.stringify(data);

  return stringified;
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
