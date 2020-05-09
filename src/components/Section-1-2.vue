<template>
  <section class="section">
    <div class="section__subsection">
      <SectionTitle :content="section.title" />
      <Video :video="videos.so1Einstieg" />
      <Document :document="documents['so1-UebungsdossierPdf']" />
      <Document :document="documents['so1-UebungsdossierDocx']" />
    </div>
  </section>
</template>

<script>
import Document from "./Document.vue";
import SectionTitle from "./SectionTitle.vue";
import Video from "./Video.vue";

export default {
  props: ["documents", "section", "videos"],
  components: { Document, SectionTitle, Video },
};
</script>

<style scoped></style>
