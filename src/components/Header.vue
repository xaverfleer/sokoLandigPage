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
        <NavEntry :route="$root.appData.routes.block01" />
        <NavEntry :route="$root.appData.routes.block02" />
        <NavEntry :route="$root.appData.routes.block03" />
        <NavEntry :route="$root.appData.routes.block04" />
        <NavEntry :route="$root.appData.routes.block05" />
      </nav>
    </div>
  </header>
</template>

<script>
import NavEntry from "./NavEntry.vue";
import logo from "../imgs/logo.png";

export default {
  components: { NavEntry },
  data: function() {
    return {
      logoUrl: "../imgs/logo.png",
      img: logo,
    };
  },
  methods: {
    scrollToTop: () => window.scroll(0, 0),
  },
};
</script>

<style scoped></style>
