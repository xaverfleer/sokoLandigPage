<template>
  <section class="section">
    <div class="section__subsection">
      <div class="block__supertitle">{{ block01.supertitle }}</div>
      <h1 class="block__title">{{ block01.title }}</h1>
      <Checklist :checklist="block01.sections.section11.checklist" />
      <Document :document="$root.docs.so1.Zusammenfassung" />
    </div>
  </section>
</template>

<script>
import Checklist from "./Checklist.vue";
import Document from "./Document.vue";

export default {
  props: ["block01"],
  components: { Checklist, Document },
};
</script>

<style scoped></style>
