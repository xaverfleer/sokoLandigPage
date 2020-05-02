<template>
  <main>
    <Block1 :appData="appData" />
    <Block2 :appData="appData" v-if="appData.state.path === 'kurs'" />
    <Block2EarlyBird
      :appData="appData"
      v-if="appData.state.path === 'early-bird'"
    />
    <Block3 />
    <Block4 />
    <Block5 />
  </main>
</template>

<script>
import Block1 from "./Block-1.vue";
import Block2 from "./Block-2.vue";
import Block2EarlyBird from "./Block-2--Early-Bird.vue";
import Block3 from "./Block-3.vue";
import Block4 from "./Block-4.vue";
import Block5 from "./Block-5.vue";

export default {
  props: ["appData"],
  components: {
    Block1,
    Block2,
    Block2EarlyBird,
    Block3,
    Block4,
    Block5,
  },
};
</script>

<style scoped></style>
