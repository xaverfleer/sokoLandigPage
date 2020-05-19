<template>
  <div>
    <Block5EarlyBird v-if="$root.isEarlyBird" />
    <Block5Free v-else />
  </div>
</template>

<script>
import Block5Free from "./Block-5-free.vue";
import Block5EarlyBird from "./Block-5-early-bird.vue";
export default { components: { Block5Free, Block5EarlyBird } };
</script>

<style scoped></style>
