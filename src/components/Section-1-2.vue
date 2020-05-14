<template>
  <section class="section">
    <div class="section__subsection">
      <SectionTitle :content="section.title" />
      <VideoVue :video="$root.videos.so1Einstieg" />
      <Document :document="$root.docs.so1.UebungsdossierPdf" />
      <Document :document="$root.docs.so1.UebungsdossierDocx" />
    </div>
  </section>
</template>

<script>
import Document from "./Document.vue";
import SectionTitle from "./SectionTitle.vue";
import VideoVue from "./VideoVue.vue";

export default {
  props: ["section"],
  components: { Document, SectionTitle, VideoVue },
};
</script>

<style scoped></style>
