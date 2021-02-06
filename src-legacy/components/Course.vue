<template>
  <div class="page">
    <Header :routes="{ ...course.routes }" />
    <main>
      <Block1 :course="course" v-if="$route.params.block === 'block-1'" />
      <Block2 :course="course" v-if="$route.params.block === 'block-2'" />
      <Block3 :course="course" v-if="$route.params.block === 'block-3'" />
      <Block4 :course="course" v-if="$route.params.block === 'block-4'" />
      <Block5 :course="course" v-if="$route.params.block === 'block-5'" />
      <Block6 :course="course" v-if="$route.params.block === 'block-6'" />
    </main>
    <Footer />
  </div>
</template>

<script>
import routes from "../data/routes";
import Block1 from "./Block-1.vue";
import Block2 from "./Block-2.vue";
import Block3 from "./Block-3.vue";
import Block4 from "./Block-4.vue";
import Block5 from "./Block-5.vue";
import Block6 from "./Block-6.vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";

export default {
  components: {
    Block1,
    Block2,
    Block3,
    Block4,
    Block5,
    Block6,
    Footer,
    Header,
  },
  computed: {
    accountRoute() {
      return this.$root.isLoggedIn
        ? { ...routes.account, isPrimary: true }
        : { ...routes.register, text: "Anmelden", isPrimary: true };
    },
    course() {
      return this.$root.appData.course;
    },
  },
};
</script>
