<template>
  <div id="app" class="section__subsection">
    <SectionTitle />
    <Video />
    <Document :document="document" />
    <div class="document">
      <a
        class="document__link"
        href="/documents/so1-Uebungsdossier.docx"
        target="_blank"
        >Übungsdossier (Word) – Kursblock 1</a
      >
    </div>
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
        text: "Übungsdossier (PDF) – Kursblock 1",
      },
    };
  },
  components: { Document, SectionTitle, Video },
};
</script>

<style scoped></style>
