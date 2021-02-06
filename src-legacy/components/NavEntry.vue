<template>
  <div :class="classes">
    <a v-if="route.href" :href="route.href">{{ text }}</a>
    <router-link v-else :to="route.to" @click.native="scrollToTop">{{
      text
    }}</router-link>
  </div>
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
