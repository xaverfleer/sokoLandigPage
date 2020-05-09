<template>
  <section class="section">
    <div class="section__subsection">
      <SectionTitle :content="section.title" />
      <Video :video="section.video" />
      <h3>{{ section.subtitle }}</h3>
      <Checklist :checklist="section.checklist" />
      <div class="document">
        <a
          class="document__link"
          href="/documents/so1-Strategiekarte-Essenz-Strategie.pdf"
          target="_blank"
          >Strategiekarte: Die Essenz-Strategie – Kursblock 1</a
        >
      </div>
    </div>
  </section>
</template>

<script>
import Checklist from "./Checklist.vue";
import Document from "./Document.vue";
import SectionTitle from "./SectionTitle.vue";
import Video from "./Video.vue";

export default {
  props: ["documents", "section"],
  components: { Checklist, Document, SectionTitle, Video },
};
</script>

<style scoped></style>
