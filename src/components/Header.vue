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
      <nav :class="navClasses" @click="toggleNav">
        <NavEntry v-for="route in routes" :key="route.to" :route="route" />
      </nav>
    </div>
  </header>
</template>

<script>
import NavEntry from "./NavEntry.vue";
import logo from "../imgs/logo.png";

export default {
  components: { NavEntry },
  computed: {
    navClasses() {
      return ["nav", "nav--kurs", this.isNavActive ? "nav--active" : ""];
    },
  },
  data: function() {
    return {
      logoUrl: "../imgs/logo.png",
      img: logo,
      isNavActive: false,
    };
  },
  methods: {
    scrollToTop: () => window.scroll(0, 0),
    toggleNav() {
      this.isNavActive = !this.isNavActive;
    },
  },
  props: ["routes"],
};
</script>

<style scoped></style>
