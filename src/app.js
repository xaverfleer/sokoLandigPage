import Vue from "vue/dist/vue.esm";
import appData from "./appData";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

// eslint-disable-next-line no-new
new Vue({
  template: `
    <div class="page" data-active-block="01">
      <Header />
      <Main :appData="appData" />
      <Footer />
    </div>
  `,
  el: "#app",
  data: { appData },
  components: { Header, Main, Footer },
});
