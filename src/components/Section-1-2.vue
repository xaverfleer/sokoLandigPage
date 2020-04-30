<template>
  <div id="app" class="section__subsection">
    <SectionTitle />
    <Video />
    <Document :document="documents['so1-UebungsdossierPdf']" />
    <Document :document="documents['so1-UebungsdossierDocx']" />
  </div>
</template>

<script>
import Document from "./Document.vue";
import SectionTitle from "./SectionTitle.vue";
import Video from "./Video.vue";

export default {
  props: ["documents"],
  components: { Document, SectionTitle, Video },
};
</script>

<style scoped></style>
