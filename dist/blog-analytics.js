amplitude.getInstance().logEvent("Blog page loaded");

var overlay = document.querySelector(".overlay");

document
  .getElementById("overlay__close-button")
  .addEventListener("click", function() {
    overlay.classList.add("hidden");
  });

document.getElementById("login").addEventListener("click", function() {
  overlay.classList.remove("hidden");
});
