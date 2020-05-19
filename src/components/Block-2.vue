<template>
  <div>
    <Block2EarlyBird v-if="$root.isEarlyBird" />
    <Block2Free v-else />
  </div>
</template>

<script>
import Block2Free from "./Block-2-free.vue";
import Block2EarlyBird from "./Block-2-early-bird.vue";
export default { components: { Block2Free, Block2EarlyBird } };
</script>

<style scoped></style>
