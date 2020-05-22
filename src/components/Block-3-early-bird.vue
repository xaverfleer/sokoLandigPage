<template>
  <div>
    <Section
      v-for="section in $root.appData.course.block03.sections"
      :section="section"
      :key="section.id"
    />
    <div class="buttons">
      <RouteVue :info="course.routes.block02" />
      <RouteVue :info="course.routes.block04" />
    </div>
  </div>
</template>

<script>
import RouteVue from "./RouteVue.vue";
import Section from "./Section.vue";

export default {
  components: { RouteVue, Section },
  props: ["course"],
};
</script>

<style scoped></style>
