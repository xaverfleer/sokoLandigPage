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
        <NavEntry
          v-for="route in appliedRoutes"
          :key="route.to"
          :route="route"
        />
      </nav>
      <router-link
        :to="
          $root.isLoggedIn
            ? $root.appData.routes.account.to
            : $root.appData.routes.login.to
        "
        class="profile"
      ></router-link>
    </div>
  </header>
</template>

<script>
import NavEntry from "./NavEntry.vue";
import logo from "../imgs/logo.png";

export default {
  components: { NavEntry },
  computed: {
    appliedRoutes() {
      return this.routes || this.defaultRoutes;
    },
    navClasses() {
      return [
        "nav",
        Object.values(this.appliedRoutes).length > 3 && "nav--kurs",
        this.isNavActive && "nav--active",
      ];
    },
    defaultRoutes() {
      return this.$root.appData.standardNavRoutes;
    },
  },
  data() {
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
