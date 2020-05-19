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
        <router-link to="/kursblock-1" class="nav__entry nav__entry--2ndary"
          >Kursblock&nbsp;1: Innere Stärke und Gleichwürdigkeit</router-link
        >
        <router-link to="/kursblock-2" class="nav__entry nav__entry--2ndary"
          >Kursblock&nbsp;2: Mit dem Baby interagieren...</router-link
        >
        <router-link to="/kursblock-3" class="nav__entry nav__entry--2ndary"
          >Kursblock&nbsp;3: Das Baby verstehen...</router-link
        >
        <router-link to="/kursblock-4" class="nav__entry nav__entry--2ndary"
          >Kursblock&nbsp;4: Auf mich selbst achten...</router-link
        >
        <router-link to="/kursblock-5" class="nav__entry nav__entry--2ndary"
          >Kursblock&nbsp;5: Zurückhaltung üben...</router-link
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
