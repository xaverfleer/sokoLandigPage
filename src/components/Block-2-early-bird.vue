<template>
  <div>
    <Section
      v-for="section in $root.appData.course.block02.sections"
      :section="section"
      :key="section.id"
    />
    <div class="buttons">
      <RouteVue :info="$root.appData.routes.block01" />
      <RouteVue :info="$root.appData.routes.block03" />
    </div>
  </div>
</template>

<script>
import RouteVue from "./RouteVue.vue";
import Section from "./Section.vue";

export default {
  components: { RouteVue, Section },
  computed: {
    block: function getBlock() {
      return this.$root.appData.course.block02;
    },
  },
};
</script>

<style scoped></style>
