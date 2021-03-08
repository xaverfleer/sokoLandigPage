<template>
  <nav :class="navClasses" @click="toggleNav">
    <NavEntry v-for="route in appliedRoutes" :key="route.to" :route="route" />
  </nav>
</template>

<script>
import NavEntry from "~/components/NavEntry";
import appData from "~/data/appData";

export default {
  components: { NavEntry },
  computed: {
    appData() {
      return appData;
    },
    appliedRoutes() {
      return this.routes || this.defaultRoutes;
    },
    defaultRoutes() {
      return appData.standardNavRoutes;
    },
    navClasses() {
      const path = this.$route.path;
      return [
        "nav",
        (-1 < path.indexOf("/kurs/") || -1 < path.indexOf("/early-bird/")) &&
          "nav--kurs",
        this.isNavActive && "nav--active",
      ];
    },
  },
  data() {
    return { isNavActive: false };
  },
  methods: {
    toggleNav() {
      this.isNavActive = !this.isNavActive;
    },
  },
  props: ["routes"],
};
</script>
