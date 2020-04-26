import "./styles.css";

if (window.location.href.indexOf("early-bird") > -1) {
  amplitude.getInstance().logEvent("Early-Bird page loaded");
} else {
  amplitude.getInstance().logEvent("Kurs page loaded");
}

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

var lessons = [
  { block: "01", cta: "cta07", logEvent: "Kursblock 1", selector: ".cta07" },
  { block: "02", cta: "cta06", logEvent: "Kursblock 2", selector: ".cta06" },
  { block: "03", cta: "cta08", logEvent: "Kursblock 3", selector: ".cta08" },
  { block: "04", cta: "cta09", logEvent: "Kursblock 4", selector: ".cta09" },
  { block: "05", cta: "cta10", logEvent: "Kursblock 5", selector: ".cta10" },
];

lessons.forEach(function(lesson) {
  document.querySelectorAll(lesson.selector).forEach(function(e) {
    e.addEventListener("click", function() {
      updateActiveBlock(lesson.block);
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

var sections = document.querySelectorAll(".section");
var paginator__overlay = document.querySelector(".paginator__overlay");

function updateActiveBlock(activeBlock) {
  setState(function(oldState) {
    oldState.activeBlock = activeBlock;
    return oldState;
  });
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

function getState() {
  var defaultState = {
    activeBlock: "01",
  };

  var lsState = localStorage.getItem("soko");
  return (validateState(lsState) && JSON.parse(lsState)) || defaultState;
}

function validateState(stringState) {
  var state;
  try {
    state = JSON.parse(stringState);
  } catch (e) {
    return false;
  }
  var checks = [
    function(s) {
      return s && typeof s === "object";
    },
    function(s) {
      return typeof s.activeBlock === "string";
    },
    function(s) {
      return ["01", "02", "03", "04", "05"].indexOf(state.activeBlock) > -1;
    },
  ];

  var isValid = checks.reduce(function(acc, check) {
    return acc && check(state);
  }, true);

  return isValid;
}

function setState(change) {
  var oldState = getState();
  var newState = change(oldState);
  if (validateState(JSON.stringify(newState))) {
    localStorage.setItem("soko", JSON.stringify(newState));
    updatePage();
  }
}

function updatePage() {
  var state = getState();
  document
    .querySelector(".page")
    .setAttribute("data-active-block", state.activeBlock);
}

updatePage();
