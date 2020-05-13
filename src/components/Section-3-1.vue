<template>
  <section class="section">
    <div class="section__subsection">
      <div class="block__supertitle">{{ block.supertitle }}</div>
      <h1 class="block__title">{{ block.title }}</h1>
      <Checklist :checklist="block.sections.section31.checklist" />
      <Document :document="$root.appData.documents['so3-Zusammenfassung']" />
      <Document :document="$root.docs['so3-UebungsdossierPdf']" />
      <Document :document="$root.docs['so3-UebungsdossierDocx']" />
    </div>
  </section>
</template>

<script>
import Checklist from "./Checklist.vue";
import Document from "./Document.vue";

export default {
  props: ["block"],
  components: { Checklist, Document },
};
</script>

<style scoped></style>
