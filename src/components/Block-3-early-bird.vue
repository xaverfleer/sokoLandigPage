<template>
  <div>
    <Section
      v-for="section in $root.appData.course.block03.sections"
      :section="section"
      :key="section.id"
    />
    <div class="buttons">
      <RouteVue :info="$root.appData.routes.block02" />
      <RouteVue :info="$root.appData.routes.block04" />
    </div>
  </div>
</template>

<script>
import RouteVue from "./RouteVue.vue";
import Section from "./Section.vue";

export default {
  components: { RouteVue, Section },
};
</script>

<style scoped></style>
