<template>
  <router-link :class="classes" @click.native="scrollToTop" :to="info.to">{{
    info.text
  }}</router-link>
</template>

<script>
export default {
  computed: {
    classes() {
      return {
        button: true,
        "button--primary": this.isPrimary,
        "button--2ndary": !this.isPrimary,
      };
    },
    isPrimary() {
      return this.options && this.options.isPrimary;
    },
  },
  props: ["info", "options"],
  methods: {
    scrollToTop: () => window.scroll(0, 0),
  },
};
</script>

<style scoped></style>
