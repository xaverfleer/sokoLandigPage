<template>
  <div>
    <Section-1-1 :block01="block" />
    <Section-1-2 :section="block.sections.section12" />
    <Section-1-3 :section="block.sections.section13" />
    <Section-1-4 :section="block.sections.section14" />
    <Section-1-5 :section="block.sections.section15" />
    <Section-1-6 :section="block.sections.section16" />
    <Section-1-7 :section="block.sections.section17" />
  </div>
</template>

<script>
import Section11 from "./Section-1-1.vue";
import Section12 from "./Section-1-2.vue";
import Section13 from "./Section-1-3.vue";
import Section14 from "./Section-1-4.vue";
import Section15 from "./Section-1-5.vue";
import Section16 from "./Section-1-6.vue";
import Section17 from "./Section-1-7.vue";

export default {
  components: {
    Section11,
    Section12,
    Section13,
    Section14,
    Section15,
    Section16,
    Section17,
  },
  computed: {
    block: function getBlock() {
      return this.$root.appData.course.block01;
    },
  },
};
</script>

<style scoped></style>
