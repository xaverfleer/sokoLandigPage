/* global amplitude, document, localStorage, XMLHttpRequest, window  */

amplitude.getInstance().logEvent("Login page loaded");

function getData(elements) {
  const fields = [].slice.call(elements);

  const raw = fields.reduce(function addField(acc, elem) {
    acc[elem.name] = elem.value;
    return acc;
  }, {});

  const stringified = JSON.stringify(raw);
  const encoded = encodeURIComponent(stringified);

  return encoded;
}

function submitForm(data) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", ".netlify/functions/login");
  xhr.send(data);

  xhr.addEventListener("load", () => {
    const { sessionId } = JSON.parse(decodeURIComponent(xhr.responseText));
    localStorage.setItem("soko-non-vue", JSON.stringify({ sessionId }));
  });

  xhr.addEventListener("error", (xhrEventError) => {
    // eslint-disable-next-line no-alert
    window.alert(
      `Anmelden fehlgeschlagen, bitte erneut versuchen.\n\nBei wiederholtem Fehlschlagen, kontaktiere uns bitte mit folgenden Details: xhrEventError ${JSON.stringify(
        xhrEventError
      )}`
    );
  });
}

document.querySelectorAll(".form").forEach(function getForm(element) {
  element.addEventListener("submit", function handleSubmit(event) {
    event.preventDefault();

    const data = getData(event.target.elements);
    submitForm(data);
    element.reset();

    amplitude.getInstance().logEvent("Login submitted");
  });
});

const nav = document.querySelector(".nav");
nav.addEventListener("click", function toggleNav() {
  const { classList } = nav;
  const isActive = [].slice.call(classList).indexOf("nav--active") > -1;
  if (isActive) classList.remove("nav--active");
  else classList.add("nav--active");
});

const header = document.querySelector(".header");
window.addEventListener("scroll", function positionHeader() {
  if (window.pageYOffset > 360) header.classList.add("header--fixed");
  else header.classList.remove("header--fixed");
});
