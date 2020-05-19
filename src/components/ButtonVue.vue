<template>
  <a :class="classes" :href="info.target">{{ info.text }}</a>
</template>

<script>
export default {
  computed: {
    classes() {
      return {
        button: true,
        "button--primary": this.info.isPrimary,
        "button--2ndary": !this.info.isPrimary,
      };
    },
  },
  props: ["info"],
};
</script>

<style scoped></style>
