<template>
  <div>
    <Section
      v-for="section in $root.appData.course.block01.sections"
      :section="section"
      :key="section.id"
    />
    <div class="buttons">
      <RouteVue
        :info="{ ...course.routes.block02, isPrimary: true }"
        v-if="$root.isFree"
      />
      <ButtonVue :info="$root.buttons.cta05Secondary" v-if="$root.isFree" />
      <RouteVue :info="course.routes.block02" v-if="$root.isPaidAccount" />
    </div>
  </div>
</template>

<script>
import ButtonVue from "./ButtonVue.vue";
import RouteVue from "./RouteVue.vue";
import Section from "./Section.vue";

export default {
  components: { ButtonVue, RouteVue, Section },
  props: ["course"],
};
</script>
