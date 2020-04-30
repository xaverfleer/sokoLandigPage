import Vue from "vue/dist/vue.esm";
import Document from "./components/Document.vue";

// eslint-disable-next-line no-new
new Vue({
  template: `<Document/>`,
  el: "#app",
  components: { Document },
});
