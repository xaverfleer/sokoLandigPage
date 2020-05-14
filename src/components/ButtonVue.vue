<template>
  <a :class="classes" :href="info.target" @click="clickHandler">{{
    info.text
  }}</a>
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
  methods: {
    clickHandler() {
      this.info.activateBlock &&
        this.$root.updateActiveBlock(this.info.activateBlock);
      amplitude.getInstance().logEvent(this.info.logEvent);
    },
  },
  props: ["info"],
};
</script>

<style scoped></style>
