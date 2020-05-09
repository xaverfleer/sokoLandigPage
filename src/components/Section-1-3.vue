<template>
  <section class="section">
    <div class="section__subsection">
      <SectionTitle :content="section.title" />
      <Video :video="section.video" />
      <h3>{{ section.subtitle }}</h3>
      <Checklist :checklist="section.checklist" />
      <Document :document="documents['so1-Strategie01']" />
    </div>
  </section>
</template>

<script>
import Checklist from "./Checklist.vue";
import Document from "./Document.vue";
import SectionTitle from "./SectionTitle.vue";
import Video from "./Video.vue";

export default {
  props: ["documents", "section"],
  components: { Checklist, Document, SectionTitle, Video },
};
</script>

<style scoped></style>
