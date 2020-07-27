/* global amplitude, document,  window */
import Vue from "vue/dist/vue.esm";
import VueRouter from "vue-router/dist/vue-router.esm";
import appData from "./data/appData";
import stateM8t from "./stateManagement";
import routes from "./vueRoutes";

Vue.use(VueRouter);

const router = new VueRouter({ routes });

const vm = new Vue({
  template: `<router-view></router-view>`,
  el: "#app",
  data: { appData, state: {} },
  computed: {
    buttons() {
      return this.appData.buttons;
    },
    sessionId() {
      return this.state && this.state.session && this.state.session.sessionId;
    },
    isEarlyBird() {
      return this.state.path === "early-bird";
    },
    isKurs() {
      return this.state.path === "kurs";
    },
    isLoggedIn() {
      const hasSession = this.state.session != null;
      const activeUntil =
        hasSession && this.state.session.ts + 30 * 24 * 60 * 60 * 1000;
      const hasActiveSession = hasSession && Date.now() < activeUntil;
      return hasActiveSession;
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
