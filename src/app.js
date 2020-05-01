import Vue from "vue/dist/vue.esm";
import appData from "./appData";
import Main from "./components/Main.vue";

// eslint-disable-next-line no-new
new Vue({
  template: `
  <div class="page" data-active-block="01">
  <header class="header" id="header">
  <div class="header__emotion"></div>
  <div class="header__content">
    <a class="header__home" href="./index.html">
      <img alt="Growing tree" class="header__logo" src="./imgs/logo.png" title="Zur Startseite">
    </a>
    <nav class="nav nav--kurs">
      <a class="nav__entry nav__entry--primary cta05" href="index.html#prizing" title="Jetzt buchen">Jetzt
        buchen</a>
      <a class="cta07 nav__entry nav__entry--2ndary">Kursblock&nbsp;1: Innere Stärke und Gleichwürdigkeit</a>
      <a class="cta06 nav__entry nav__entry--2ndary">Kursblock&nbsp;2: Mit dem Baby interagieren...</a>
      <a class="cta08 nav__entry nav__entry--2ndary">Kursblock&nbsp;3: Das Baby verstehen...</a>
      <a class="cta09 nav__entry nav__entry--2ndary">Kursblock&nbsp;4: Auf mich selbst achten...</a>
      <a class="cta10 nav__entry nav__entry--2ndary">Kursblock&nbsp;5: Zurückhaltung üben...</a>
    </nav>
  </div>
</header>
  <Main :appData="appData" />
  <footer class="footer">
  <div id="contact" class="footer__contact">Kontaktiere uns unter <a href="mailto:kurs@so-kommunizieren.ch"
      rel="nofollow">kurs@so-kommunizieren.ch</a>
    oder
    <a href="tel:+41774466505" rel="nofollow">+41 77 44 66 505</a>
  </div>
  <div class="footer__copyright">© 2020 Fleer & Fleer</div>
</footer>
</div>
  `,
  el: "#app",
  data: { appData },
  components: { Main },
});
