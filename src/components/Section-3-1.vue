<template>
  <section class="section">
    <div class="section__subsection">
      <div class="block__supertitle">{{ block.supertitle }}</div>
      <h1 class="block__title">{{ block.title }}</h1>
      <Checklist :checklist="block.sections.section31.checklist" />
      <!-- <Document :document="documents['so1-Zusammenfassung']" /> -->
    </div>
  </section>
</template>

<script>
import Checklist from "./Checklist.vue";
import Document from "./Document.vue";
import SectionTitle from "./SectionTitle.vue";
import Video from "./Video.vue";

export default {
  props: ["documents", "block"],
  components: { Checklist, Document },
};
</script>

<style scoped></style>
