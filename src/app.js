/* global amplitude, document,  window */
import Vue from "vue/dist/vue.esm";
import VueRouter from "vue-router/dist/vue-router.esm";
import appData from "./appData";
import stateM8t from "./stateManagement";
import Course from "./components/Course.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/course/:block", component: Course },
  { path: "", redirect: "course/block-1" },
];

const router = new VueRouter({ routes });

const vm = new Vue({
  template: `<router-view></router-view>`,
  el: "#app",
  data: { appData, state: {} },
  computed: {
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
  router,
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

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.pageYOffset > 360) header.classList.add("header--fixed");
  else header.classList.remove("header--fixed");
});
