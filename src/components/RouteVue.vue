<template>
  <router-link :class="classes" @click.native="scrollToTop" :to="info.to">{{
    info.text
  }}</router-link>
</template>

<script>
export default {
  computed: {
    classes() {
      return [
        "button",
        this.info.isPrimary ? "button--primary" : "button--2ndary",
      ];
    },
  },
  props: ["info"],
  methods: {
    scrollToTop: () => window.scroll(0, 0),
  },
};
</script>

<style scoped></style>
