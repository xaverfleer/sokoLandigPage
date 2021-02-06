<template>
  <a :class="classes" :href="info.target">{{ info.text }}</a>
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
