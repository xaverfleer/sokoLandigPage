<template>
  <div>
    <Section
      v-for="section in $root.appData.course.block02.sections"
      :section="section"
      :key="section.id"
      v-if="section.id < 6"
    />
    <section27 :section="block.sections.section27" />
  </div>
</template>

<script>
import Document from "./Document.vue";
import Section from "./Section.vue";
import Section27 from "./Section-2-7.vue";
import VideoVue from "./VideoVue.vue";
export default {
  components: { Document, Section, Section27, VideoVue },
  computed: {
    block: function getBlock() {
      return this.$root.appData.course.block02;
    },
  },
};
</script>

<style scoped></style>
