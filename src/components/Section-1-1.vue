<template>
  <section class="section">
    <div class="section__subsection">
      <div class="block__supertitle">{{ block01.supertitle }}</div>
      <h1 class="block__title">{{ block01.title }}</h1>
      <p>In diesem Kursblock…</p>
      <Checklist />
      <Document :document="documents['so1-Zusammenfassung']" />
    </div>
  </section>
</template>

<script>
import Checklist from "./Checklist.vue";
import Document from "./Document.vue";
import SectionTitle from "./SectionTitle.vue";
import Video from "./Video.vue";

export default {
  props: ["documents", "block01"],
  components: { Checklist, Document },
};
</script>

<style scoped></style>
