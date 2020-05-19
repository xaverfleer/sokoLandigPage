<template>
  <router-link :class="classes" :to="info.to" href="#header">{{
    info.text
  }}</router-link>
</template>

<script>
export default {
  props: ["info", "options"],
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
};
</script>

<style scoped></style>
