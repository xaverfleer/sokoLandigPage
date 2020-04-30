<template>
  <div class="section__subsection">
    <div class="block__supertitle">Kursblock&nbsp;1</div>
    <h1 class="block__title">Innere Stärke und Gleichwürdigkeit</h1>
    <p>In diesem Kursblock…</p>
    <div class="checklist">
      <div class="checklist__item">
        <div class="checklist__text">
          …verbindest du dich mit deinem Baby, in dem du dir überlegst, was du
          ihm von Herzen für sein Leben wünschst&nbsp;(Video&nbsp;1.1)
        </div>
      </div>
      <div class="checklist__item">
        <div class="checklist__text">
          …erfährst du, was dein Baby braucht, um innerlich stark zu
          werden&nbsp;(Video&nbsp;2.2)
        </div>
      </div>
      <div class="checklist__item">
        <div class="checklist__text">
          …erklären wir, was es bedeutet, das Baby als gleichwürdiges Subjekt zu
          sehen&nbsp;(Video&nbsp;2.3)
        </div>
      </div>
      <div class="checklist__item">
        <div class="checklist__text">
          …zeigen wir anhand eines Praxisbeispiels auf, was subjektorientierte
          Kommunikation in der Praxis heissen kann&nbsp;(Video&nbsp;2.4)
        </div>
      </div>
      <div class="checklist__item">
        <div class="checklist__text">
          …lernst du anhand von konkreten Sätzen den Unterschied zwischen einer
          gleichwürdigen und einer herablassenden Sprache
          kennen&nbsp;(Video&nbsp;2.5)
        </div>
      </div>
    </div>
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
        href: "/documents/so1-Zusammenfassung.pdf",
        text: "Zusammenfassung – Kursblock 1",
      },
    };
  },
  components: { Document, SectionTitle, Video },
};
</script>

<style scoped></style>
