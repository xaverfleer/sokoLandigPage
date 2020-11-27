<template>
  <div>
    <Section
      v-for="section in $root.appData.course.block06.sections"
      :section="section"
      :key="section.id"
    />
    <div class="buttons">
      <RouteVue :info="course.routes.block05" />
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
