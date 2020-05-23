<template>
  <div>
    <a
      v-if="route.href"
      @click.native="scrollToTop"
      :class="classes"
      :href="route.href"
      >{{ text }}</a
    >
    <router-link
      v-else
      @click.native="scrollToTop"
      :class="classes"
      :to="route.to"
      >{{ text }}</router-link
    >
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
