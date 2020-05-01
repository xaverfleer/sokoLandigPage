<template>
  <header class="header" id="header">
    <div class="header__emotion"></div>
    <div class="header__content">
      <a class="header__home" href="./index.html">
        <img
          alt="Growing tree"
          class="header__logo"
          :src="img"
          title="Zur Startseite"
        />
      </a>
      <nav class="nav nav--kurs">
        <a
          class="nav__entry nav__entry--primary cta05"
          href="index.html#prizing"
          title="Jetzt buchen"
          >Jetzt buchen</a
        >
        <a class="cta07 nav__entry nav__entry--2ndary"
          >Kursblock&nbsp;1: Innere Stärke und Gleichwürdigkeit</a
        >
        <a class="cta06 nav__entry nav__entry--2ndary"
          >Kursblock&nbsp;2: Mit dem Baby interagieren...</a
        >
        <a class="cta08 nav__entry nav__entry--2ndary"
          >Kursblock&nbsp;3: Das Baby verstehen...</a
        >
        <a class="cta09 nav__entry nav__entry--2ndary"
          >Kursblock&nbsp;4: Auf mich selbst achten...</a
        >
        <a class="cta10 nav__entry nav__entry--2ndary"
          >Kursblock&nbsp;5: Zurückhaltung üben...</a
        >
      </nav>
    </div>
  </header>
</template>

<script>
import logo from "../imgs/logo.png";

export default {
  data: function() {
    return {
      logoUrl: "../imgs/logo.png",
      img: logo,
    };
  },
};
</script>

<style scoped></style>
