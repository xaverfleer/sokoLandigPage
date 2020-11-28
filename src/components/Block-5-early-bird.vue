<template>
  <div>
    <Section
      v-for="section in $root.appData.course.block05.sections"
      :section="section"
      :key="section.id"
    />
    <div class="buttons">
      <RouteVue :info="course.routes.block04" />
      <RouteVue :info="course.routes.block06" />
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
