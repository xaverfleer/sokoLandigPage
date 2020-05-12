<template>
  <main>
    <Block1 v-if="activeBlock === '01'" :appData="appData" />
    <template v-if="appData.state.path === 'kurs'">
      <Block2 v-if="activeBlock === '02'" :appData="appData" />
      <Block3 v-if="activeBlock === '03'" />
      <Block4 v-if="activeBlock === '04'" />
      <Block5 v-if="activeBlock === '05'" />
    </template>
    <template v-if="appData.state.path === 'early-bird'">
      <Block2EarlyBird v-if="activeBlock === '02'" :appData="appData" />
      <Block3EarlyBird v-if="activeBlock === '03'" :appData="appData" />
      <Block4EarlyBird v-if="activeBlock === '04'" :appData="appData" />
      <Block5EarlyBird v-if="activeBlock === '05'" :appData="appData" />
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
    activeBlock() {
      return this.$root.state.activeBlock;
    },
  },
};
</script>

<style scoped></style>
