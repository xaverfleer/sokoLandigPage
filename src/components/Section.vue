<template>
  <div id="app" class="section__subsection">
    <SectionTitle />
    <Video />
    <Document :document="document" />
  </div>
</template>

<script>
import Document from "./Document.vue";
import SectionTitle from "./SectionTitle.vue";
import Video from "./Video.vue";

export default {
  data: () => {
    return {
      document: {
        href: "/documents/so1-Uebungsdossier.pdf",
        text: "Übungsdossier – Kursblock 1",
      },
    };
  },
  components: { Document, SectionTitle, Video },
};
</script>

<style scoped></style>
