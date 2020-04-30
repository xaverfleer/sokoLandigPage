<template>
  <div class="section__subsection">
    <div class="block__supertitle">Kursblock&nbsp;1</div>
    <h1 class="block__title">Innere Stärke und Gleichwürdigkeit</h1>
    <p>In diesem Kursblock…</p>
    <Checklist />
    <Document :document="documents['so1-Zusammenfassung']" />
  </div>
</template>

<script>
import Checklist from "./Checklist.vue";
import Document from "./Document.vue";
import SectionTitle from "./SectionTitle.vue";
import Video from "./Video.vue";

export default {
  props: ["documents"],
  components: { Document },
};
</script>

<style scoped></style>
