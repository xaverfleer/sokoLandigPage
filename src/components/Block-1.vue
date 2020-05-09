<template>
  <div class="hidden-by-default section--kurs01">
    <Section-1-1 :documents="appData.documents" :block01="appData.block01" />
    <Section-1-2
      :documents="appData.documents"
      :section="appData.block01.sections.section12"
      :videos="appData.videos"
    />
    <Section-1-3
      :documents="appData.documents"
      :section="appData.block01.sections.section13"
      :videos="appData.videos"
    />
    <Section-1-4 />
    <Section-1-5 />
    <Section-1-6 />
    <Section-1-7 :appData="appData" />
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
  props: ["appData"],
  components: {
    Section11,
    Section12,
    Section13,
    Section14,
    Section15,
    Section16,
    Section17,
  },
};
</script>

<style scoped></style>
