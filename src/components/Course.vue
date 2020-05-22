<template>
  <div class="page">
    <Header :routes="course.routes" />
    <main>
      <Block1 v-if="$route.params.block === 'block-1'" />
      <Block2 v-if="$route.params.block === 'block-2'" />
      <Block3 v-if="$route.params.block === 'block-3'" />
      <Block4 v-if="$route.params.block === 'block-4'" />
      <Block5 v-if="$route.params.block === 'block-5'" />
    </main>
    <Footer />
  </div>
</template>

<script>
import Block1 from "./Block-1.vue";
import Block2 from "./Block-2.vue";
import Block3 from "./Block-3.vue";
import Block4 from "./Block-4.vue";
import Block5 from "./Block-5.vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";

export default {
  components: {
    Block1,
    Block2,
    Block3,
    Block4,
    Block5,
    Footer,
    Header,
  },
  computed: {
    course() {
      return this.$root.appData.course;
    },
  },
};
</script>

<style scoped></style>
