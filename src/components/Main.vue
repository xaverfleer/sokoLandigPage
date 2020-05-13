<template>
  <main>
    <Block1 v-if="$root.activeBlock === '01'" :block="appData.block01" />
    <template v-if="$root.isKurs">
      <Block2 v-if="$root.activeBlock === '02'" />
      <Block3 v-if="$root.activeBlock === '03'" />
      <Block4 v-if="$root.activeBlock === '04'" />
      <Block5 v-if="$root.activeBlock === '05'" />
    </template>
    <template v-if="$root.isEarlyBird">
      <Block2EarlyBird v-if="$root.activeBlock === '02'" />
      <Block3EarlyBird v-if="$root.activeBlock === '03'" :block="block03" />
      <Block4EarlyBird v-if="$root.activeBlock === '04'" />
      <Block5EarlyBird v-if="$root.activeBlock === '05'" />
    </template>
  </main>
</template>

<script>
import Block1 from "./Block-1.vue";
import Block2 from "./Block-2.vue";
import Block3 from "./Block-3.vue";
import Block4 from "./Block-4.vue";
import Block5 from "./Block-5.vue";
import Block2EarlyBird from "./Block-2-early-bird.vue";
import Block3EarlyBird from "./Block-3-early-bird.vue";
import Block4EarlyBird from "./Block-4-early-bird.vue";
import Block5EarlyBird from "./Block-5-early-bird.vue";

export default {
  props: ["appData"],
  components: {
    Block1,
    Block2,
    Block3,
    Block4,
    Block5,
    Block2EarlyBird,
    Block3EarlyBird,
    Block4EarlyBird,
    Block5EarlyBird,
  },
  computed: {
    block03() {
      return this.appData.block03;
    },
  },
};
</script>

<style scoped></style>
