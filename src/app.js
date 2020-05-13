/* global amplitude, document, MutationObserver,  window */
import Vue from "vue/dist/vue.esm";
import appData from "./appData";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import stateM8t from "./stateManagement";

const vm = new Vue({
  template: `
    <div class="page">
      <Header />
      <Main :appData="appData" />
      <Footer />
    </div>
  `,
  el: "#app",
  data: { appData, state: {} },
  components: { Header, Main, Footer },
  computed: {
    activeBlock() {
      return this.state.activeBlock;
    },
    buttons() {
      return this.appData.buttons;
    },
    docs() {
      return this.appData.documents;
    },
    isEarlyBird() {
      return this.state.path === "early-bird";
    },
    isKurs() {
      return this.state.path === "kurs";
    },
    videos() {
      return this.appData.videos;
    },
  },
  methods: {
    updateActiveBlock(block) {
      stateM8t.updateActiveBlock(block);
    },
  },
});

vm.state = stateM8t.subscribe(function updateVmState(state) {
  vm.state = state;
});

if (window.location.href.indexOf("early-bird") > -1) {
  amplitude.getInstance().logEvent("Early-Bird page loaded");
  stateM8t.updatePath("early-bird");
} else {
  amplitude.getInstance().logEvent("Kurs page loaded");
  stateM8t.updatePath("kurs");
}

document.querySelectorAll(".cta05").forEach((e) => {
  e.addEventListener("click", () => {
    amplitude.getInstance().logEvent("Jetzt buchen");
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

const lessons = [
  { block: "01", cta: "cta07", logEvent: "Kursblock 1", selector: ".cta07" },
  { block: "02", cta: "cta06", logEvent: "Kursblock 2", selector: ".cta06" },
  { block: "03", cta: "cta08", logEvent: "Kursblock 3", selector: ".cta08" },
  { block: "04", cta: "cta09", logEvent: "Kursblock 4", selector: ".cta09" },
  { block: "05", cta: "cta10", logEvent: "Kursblock 5", selector: ".cta10" },
];

lessons.forEach((l) =>
  document.querySelectorAll(l.selector).forEach((elem) => {
    elem.addEventListener("click", () => vm.updateActiveBlock(l.block));
  })
);
