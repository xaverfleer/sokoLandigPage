<template>
  <section class="section">
    <div class="section__subsection">
      <SectionTitle :sectionTitle="section12.title" />
      <Video :video="section12.video" />
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
  props: ["documents", "section12"],
  components: { Document, SectionTitle, Video },
};
</script>

<style scoped></style>
