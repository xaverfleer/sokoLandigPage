<template>
  <div>
    <Section
      v-for="section in $root.appData.course.block03.sections"
      :section="section"
      :key="section.id"
      v-if="section.id < 2"
    />
    <Section-3-3 :section="block.sections.section33" />
    <Section-3-4 :section="block.sections.section34" />
    <Section-3-5 :section="block.sections.section35" />
    <Section-3-6 :section="block.sections.section36" />
    <section class="section">
      <div class="buttons">
        <RouteVue :info="$root.appData.routes.block02" />
        <RouteVue :info="$root.appData.routes.block04" />
      </div>
    </section>
  </div>
</template>

<script>
import RouteVue from "./RouteVue.vue";
import Section from "./Section.vue";
import Section33 from "./Section-3-3.vue";
import Section34 from "./Section-3-4.vue";
import Section35 from "./Section-3-5.vue";
import Section36 from "./Section-3-6.vue";

export default {
  components: {
    RouteVue,
    Section,
    Section33,
    Section34,
    Section35,
    Section36,
  },
  computed: {
    block: function getBlock03() {
      return this.$root.appData.course.block03;
    },
  },
};
</script>

<style scoped></style>
