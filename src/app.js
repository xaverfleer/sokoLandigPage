import Vue from "vue/dist/vue.esm";
import appData from "./appData";
import Section11 from "./components/Section-1-1.vue";
import Section12 from "./components/Section-1-2.vue";
import Section13 from "./components/Section-1-3.vue";
import Section14 from "./components/Section-1-4.vue";
import Section15 from "./components/Section-1-5.vue";
import Section16 from "./components/Section-1-6.vue";
import Section17 from "./components/Section-1-7.vue";

// eslint-disable-next-line no-new
new Vue({
  template: `
  <div class="hidden-by-default section--kurs01">
    <Section-1-1 :documents="documents" :block01="block01"/>
    <Section-1-2 :documents="documents"/>
    <Section-1-3 :documents="documents"/>
    <Section-1-4 :documents="documents"/>
    <Section-1-5 :documents="documents"/>
    <Section-1-6 :documents="documents"/>
    <Section-1-7 :documents="documents"/>
  </div>`,
  el: "#app",
  data: appData,
  components: {
    Section11,
    Section12,
    Section13,
    Section14,
    Section15,
    Section16,
    Section17,
  },
});
