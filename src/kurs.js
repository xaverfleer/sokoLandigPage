/* global amplitude, document, localStorage, MutationObserver,  window */
import Vue from "vue/dist/vue.esm";
import Document from "./components/Document.vue";

if (window.location.href.indexOf("early-bird") > -1) {
  amplitude.getInstance().logEvent("Early-Bird page loaded");
} else {
  amplitude.getInstance().logEvent("Kurs page loaded");
}

const overlay = document.querySelector(".overlay");
const notReadies = document.querySelectorAll(".notReady");

function showOverlay() {
  overlay.classList.remove("hidden");
}

notReadies.forEach((elem) => {
  elem.addEventListener("click", showOverlay);
});

document.querySelectorAll(".cta05").forEach((e) => {
  e.addEventListener("click", () => {
    amplitude.getInstance().logEvent("Jetzt buchen");
  });
});

const lessons = [
  { block: "01", cta: "cta07", logEvent: "Kursblock 1", selector: ".cta07" },
  { block: "02", cta: "cta06", logEvent: "Kursblock 2", selector: ".cta06" },
  { block: "03", cta: "cta08", logEvent: "Kursblock 3", selector: ".cta08" },
  { block: "04", cta: "cta09", logEvent: "Kursblock 4", selector: ".cta09" },
  { block: "05", cta: "cta10", logEvent: "Kursblock 5", selector: ".cta10" },
];

function validateState(stringState) {
  let state;
  try {
    state = JSON.parse(stringState);
  } catch (e) {
    return false;
  }
  const checks = [
    (s) => {
      return s && typeof s === "object";
    },
    (s) => {
      return typeof s.activeBlock === "string";
    },
    (s) => {
      return ["01", "02", "03", "04", "05"].indexOf(s.activeBlock) > -1;
    },
  ];

  const isValid = checks.reduce((acc, check) => {
    return acc && check(state);
  }, true);

  return isValid;
}

function getState() {
  const defaultState = {
    activeBlock: "01",
  };

  const lsState = localStorage.getItem("soko");
  return (validateState(lsState) && JSON.parse(lsState)) || defaultState;
}

function updatePage() {
  const state = getState();
  document
    .querySelector(".page")
    .setAttribute("data-active-block", state.activeBlock);
}

function setState(change) {
  const oldState = getState();

  const newState = change(oldState);
  if (validateState(JSON.stringify(newState))) {
    localStorage.setItem("soko", JSON.stringify(newState));
    updatePage();
  }
}

function updateActiveBlock(activeBlock) {
  setState((oldState) => {
    const newState = oldState;
    newState.activeBlock = activeBlock;
    return newState;
  });
}

lessons.forEach((lesson) => {
  document.querySelectorAll(lesson.selector).forEach((e) => {
    e.addEventListener("click", () => {
      updateActiveBlock(lesson.block);
      amplitude.getInstance().logEvent(lesson.logEvent);
    });
  });
});

function bindVideoEventHandlers(mutations) {
  const addedVideos = mutations.reduce((acc, mutation) => {
    Array.prototype.slice
      .call(mutation.addedNodes)
      .filter((node) => {
        return node.nodeName === "VIDEO";
      })
      .forEach((node) => {
        acc.push(node);
      });
    return acc;
  }, []);

  addedVideos.forEach((video) => {
    const { id } = video.closest(".video-wrapper");
    video.addEventListener("play", () => {
      amplitude.getInstance().logEvent(`Played ${id}`);
    });
    video.addEventListener("ended", () => {
      amplitude.getInstance().logEvent(`Ended ${id}`);
    });
    video.addEventListener("pause", () => {
      amplitude.getInstance().logEvent(`Paused ${id}`);
    });
  });
}

const observerOptions = { childList: true, attributes: false, subtree: true };

const observer = new MutationObserver(bindVideoEventHandlers);
const targetNode = document.querySelector("main");
observer.observe(targetNode, observerOptions);

document
  .getElementById("overlay__close-button")
  .addEventListener("click", () => {
    overlay.classList.add("hidden");
  });

const nav = document.querySelector(".nav");
nav.addEventListener("click", () => {
  const { classList } = nav;
  if ([].slice.call(classList).indexOf("nav--active") > -1)
    classList.remove("nav--active");
  else classList.add("nav--active");
});

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 360) header.classList.add("header--fixed");
  else header.classList.remove("header--fixed");
});

updatePage();

// eslint-disable-next-line no-new
new Vue({
  template: `<Document/>`,
  el: "#app",
  components: { Document },
});
