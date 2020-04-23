amplitude.getInstance().logEvent("Kurs page loaded");

var overlay = document.querySelector(".overlay");
var notReadies = document.querySelectorAll(".notReady");

notReadies.forEach(function(elem) {
  elem.addEventListener("click", showOverlay);
});

function showOverlay() {
  overlay.classList.remove("hidden");
}

document.querySelectorAll(".cta05").forEach(function(e) {
  e.addEventListener("click", function() {
    amplitude.getInstance().logEvent("Jetzt buchen");
  });
});

lessons = [
  { block: "01", cta: "cta07", logEvent: "Kursblock 1", selector: ".cta07" },
  { block: "02", cta: "cta06", logEvent: "Kursblock 2", selector: ".cta06" },
  { block: "03", cta: "cta08", logEvent: "Kursblock 3", selector: ".cta08" },
  { block: "04", cta: "cta09", logEvent: "Kursblock 4", selector: ".cta09" },
  { block: "05", cta: "cta10", logEvent: "Kursblock 5", selector: ".cta10" },
];

lessons.forEach(function(lesson) {
  document.querySelectorAll(lesson.selector).forEach(function(e) {
    e.addEventListener("click", function() {
      setActiveBlock(lesson.block);
      amplitude.getInstance().logEvent(lesson.logEvent);
    });
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
      .filter(function(node) {
        return node.nodeName === "VIDEO";
      })
      .forEach(function(node) {
        acc.push(node);
      });
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
  .addEventListener("click", function(e) {
    overlay.classList.add("hidden");
  });

sections = document.querySelectorAll(".section");
paginator__overlay = document.querySelector(".paginator__overlay");

document.querySelector("body").addEventListener("click", function(event) {
  paginator__overlay.classList.add("paginator__overlay--hidden");
  document.querySelector(".scrim").classList.add("scrim--hidden");
});

document
  .querySelector(".paginator__icon")
  .addEventListener("click", function(event) {
    event.stopPropagation();
    paginator__overlay.classList.remove("paginator__overlay--hidden");
    document.querySelector(".scrim").classList.remove("scrim--hidden");
  });

document.querySelectorAll(".paginator__entry").forEach(function(entry) {
  entry.addEventListener("click", function(event) {
    var activeBlock = event.target.getAttribute("data-block");
    setActiveBlock(activeBlock);
  });
});

function setActiveBlock(activeBlock) {
  document.querySelector("main").setAttribute("data-active-block", activeBlock);
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
