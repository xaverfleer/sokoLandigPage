amplitude.getInstance().logEvent("Kurs page loaded");

var overlay = document.querySelector(".overlay");

document.querySelectorAll(".cta00").forEach(function(e) {
  e.addEventListener("click", function() {
    amplitude.getInstance().logEvent("Anmelden clicked");
  });
});

var observerOptions = { childList: true, attributes: false, subtree: true };

var observer = new MutationObserver(bindVideoEventHandlers);
var targetNode = document.querySelector("main");
observer.observe(targetNode, observerOptions);

function bindVideoEventHandlers(mutations) {
  var addedVideos = mutations.reduce(function(acc, mutation) {
    Array.prototype.slice
      .call(mutation.addedNodes)
      .filter(node => node.nodeName === "VIDEO")
      .forEach(node => acc.push(node));
    return acc;
  }, []);

  addedVideos.forEach(function(video) {
    var id = video.closest(".video-wrapper").id;
    video.addEventListener("play", function(event) {
      amplitude.getInstance().logEvent("Played " + id);
    });
    video.addEventListener("ended", function(event) {
      amplitude.getInstance().logEvent("Ended " + id);
    });
    video.addEventListener("pause", function(event) {
      amplitude.getInstance().logEvent("Paused " + id);
    });
  });
}

document
  .getElementById("overlay__close-button")
  .addEventListener("click", e => overlay.classList.add("hidden"));

document
  .getElementById("login")
  .addEventListener("click", event => overlay.classList.remove("hidden"));
