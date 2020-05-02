<template>
  <a :class="classes" :href="info.target" @click="clickHandler">{{
    info.text
  }}</a>
</template>

<script>
import { updateActiveBlock } from "../stateManagement";
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
      this.info.activateBlock && updateActiveBlock(this.info.activateBlock);
      amplitude.getInstance().logEvent(this.info.logEvent);
    },
  },
  props: ["info"],
};
</script>

<style scoped></style>
