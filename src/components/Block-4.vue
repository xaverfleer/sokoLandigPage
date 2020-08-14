<template>
  <div>
    <Block4EarlyBird
      v-if="$root.isPaidAccount || $root.isEarlyBird"
      :course="course"
    />
    <Block4Free v-else />
  </div>
</template>

<script>
import Block4Free from "./Block-4-free.vue";
import Block4EarlyBird from "./Block-4-early-bird.vue";
export default {
  components: { Block4Free, Block4EarlyBird },
  props: ["course"],
};
</script>
