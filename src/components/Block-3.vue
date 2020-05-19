<template>
  <div>
    <Block3EarlyBird v-if="$root.isEarlyBird" />
    <Block3Free v-else />
  </div>
</template>

<script>
import Block3Free from "./Block-3-free.vue";
import Block3EarlyBird from "./Block-3-early-bird.vue";
export default { components: { Block3Free, Block3EarlyBird } };
</script>

<style scoped></style>
