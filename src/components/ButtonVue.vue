<template>
  <g-link :class="classes" :to="info.target">{{ info.text }}</g-link>
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
};
</script>
