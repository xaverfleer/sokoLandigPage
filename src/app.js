/* global amplitude, document,  window */
import Vue from "vue/dist/vue.esm";
import VueRouter from "vue-router/dist/vue-router.esm";
import appData from "./data/appData";
import stateM8t from "./stateManagement";
import ConfirmEmail from "./components/ConfirmEmail.vue";
import Course from "./components/Course.vue";
import EmailConfirmed from "./components/EmailConfirmed.vue";
import EmailConfirmFailed from "./components/EmailConfirmFailed.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/course/:block", component: Course },
  { path: "/confirm-email", component: ConfirmEmail },
  { path: "/email-confirm-failed", component: EmailConfirmFailed },
  { path: "/email-confirmed", component: EmailConfirmed },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/kursblock-1", redirect: "course/block-1" },
  { path: "/kursblock-2", redirect: "course/block-2" },
  { path: "/kursblock-3", redirect: "course/block-3" },
  { path: "/kursblock-4", redirect: "course/block-4" },
  { path: "/kursblock-5", redirect: "course/block-5" },
  { path: "*", redirect: "course/block-1" },
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
    isEarlyBird() {
      return this.state.path === "early-bird";
    },
    isKurs() {
      return this.state.path === "kurs";
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
