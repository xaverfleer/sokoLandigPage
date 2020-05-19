<template>
  <router-link @click.native="scrollToTop" :class="classes" :to="route.to">{{
    `${route.text}: ${route.teaser}`
  }}</router-link>
</template>

<script>
export default {
  computed: {
    classes() {
      return {
        nav__entry: true,
        "nav__entry--2ndary": !this.isPrimary,
        "nav__entry--primary": this.isPrimary,
      };
    },
    isPrimary() {
      return this.options && this.options.isPrimary;
    },
  },
  methods: {
    scrollToTop: () => window.scroll(0, 0),
  },
  props: ["route", "options"],
};
</script>
