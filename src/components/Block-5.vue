<template>
  <div>
    <Block5EarlyBird v-if="$root.isEarlyBird" :course="course" />
    <Block5Free v-else />
  </div>
</template>

<script>
import Block5Free from "./Block-5-free.vue";
import Block5EarlyBird from "./Block-5-early-bird.vue";
export default {
  components: { Block5Free, Block5EarlyBird },
  props: ["course"],
};
</script>

<style scoped></style>
