import Vue from "vue/dist/vue.esm";
import appData from "./appData";
import Block1 from "./components/Block-1.vue";
import Block2 from "./components/Block-2.vue";
import Block3 from "./components/Block-3.vue";
import Block4 from "./components/Block-4.vue";
import Block5 from "./components/Block-5.vue";

// eslint-disable-next-line no-new
new Vue({
  template: `
  <main>
    <Block1 :appData="appData"/>
    <Block2 :appData="appData"/>
    <Block3 :appData="appData"/>
    <Block4 :appData="appData"/>
    <Block5 :appData="appData"/>
  </main>`,
  el: "#app",
  data: { appData },
  components: {
    Block1,
    Block2,
    Block3,
    Block4,
    Block5,
  },
});
