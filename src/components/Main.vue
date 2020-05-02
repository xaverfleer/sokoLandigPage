<template>
  <main>
    <Block1 :appData="appData" />
    <template v-if="appData.state.path === 'kurs'">
      <Block2 :appData="appData" />
      <Block3 />
      <Block4 />
      <Block5 />
    </template>
    <template v-if="appData.state.path === 'early-bird'">
      <Block2EarlyBird :appData="appData" />
      <Block3EarlyBird :appData="appData" />
      <Block4EarlyBird :appData="appData" />
      <Block5EarlyBird :appData="appData" />
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
};
</script>

<style scoped></style>
