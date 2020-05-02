<template>
  <a class="button button--primary cta06" href="#header" @click="clickHandler"
    >Kursblock 2</a
  >
</template>

<script>
import { updateActiveBlock } from "../stateManagement";
export default {
  methods: {
    clickHandler() {
      updateActiveBlock("02");
      amplitude.getInstance().logEvent("Kursblock 2");
    },
  },
};
</script>

<style scoped></style>
