<template>
  <div>
    <Block6EarlyBird
      v-if="$root.isPaidAccount || $root.isEarlyBird"
      :course="course"
    />
    <Block6Free v-else />
  </div>
</template>

<script>
import Block6Free from "./Block-6-free.vue";
import Block6EarlyBird from "./Block-6-early-bird.vue";
export default {
  components: { Block6Free, Block6EarlyBird },
  props: ["course"],
};
</script>
