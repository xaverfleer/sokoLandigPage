/* global amplitude, document,  window */
import Vue from "vue/dist/vue.esm";
import VueRouter from "vue-router/dist/vue-router.esm";
import appData from "./appData";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import stateM8t from "./stateManagement";
import Block1 from "./components/Block-1.vue";
import Block2 from "./components/Block-2.vue";
import Block3 from "./components/Block-3.vue";
import Block4 from "./components/Block-4.vue";
import Block5 from "./components/Block-5.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/kursblock-1", component: Block1 },
  { path: "/kursblock-2", component: Block2 },
  { path: "/kursblock-3", component: Block3 },
  { path: "/kursblock-4", component: Block4 },
  { path: "/kursblock-5", component: Block5 },
];

const router = new VueRouter({ routes });

const vm = new Vue({
  template: `
    <div class="page">
      <Header />
      <main>
        <router-view></router-view>
      </main>
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
