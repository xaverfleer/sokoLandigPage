<template>
  <router-link @click.native="scrollToTop" :class="classes" :to="route.to">{{
    `${route.text}: ${route.teaser}`
  }}</router-link>
</template>

<script>
export default {
  computed: {
    classes() {
      return [
        "nav__entry",
        this.route.isPrimary ? "nav__entry--primary" : "nav__entry--2ndary",
      ];
    },
    text() {
      return this.route.teaser
        ? `${this.route.text}: ${this.route.teaser}`
        : this.route.text;
    },
  },
  methods: {
    scrollToTop: () => window.scroll(0, 0),
  },
  props: ["route"],
};
</script>
