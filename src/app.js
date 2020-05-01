import Vue from "vue/dist/vue.esm";
import appData from "./appData";
import Block1 from "./components/Block-1.vue";

// eslint-disable-next-line no-new
new Vue({
  template: `
  <Block1 :appData="appData"/>`,
  el: "#app",
  data: { appData },
  components: {
    Block1,
  },
});
