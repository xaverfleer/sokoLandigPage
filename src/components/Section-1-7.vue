<template>
  <section class="section">
    <h2>Dokumente</h2>
    <div class="document">
      <a
        class="document__link"
        href="/documents/so1-Vertiefung.pdf"
        target="_blank"
        >Vertiefung: Sichere Bindung – Kursblocks 1</a
      >
    </div>
    <div class="document">
      <a
        class="document__link"
        href="/documents/so1-Erinnerungskarte.pdf"
        target="_blank"
        >Erinnerungskarte: Innere Stärke – Kursblocks 1</a
      >
    </div>
    <div class="document">
      <a
        class="document__link"
        href="/documents/so1-Literaturliste.pdf"
        target="_blank"
        >Literaturliste: Bücher die weiterhelfen</a
      >
    </div>
    <div class="buttons">
      <a
        class="button button--primary cta06"
        href="#header"
        title="Kursblock 2"
        v-if="appData.state.path === 'kurs'"
        >Kursblock 2</a
      >
      <a
        class="button button--2ndary cta05"
        href="index.html#prizing"
        title="Jetzt buchen"
        v-if="appData.state.path === 'kurs'"
        >Jetzt buchen</a
      >
      <a
        class="call-to-action button button--2ndary cta06"
        href="#header"
        title="Kursblock 2"
        v-if="appData.state.path === 'early-bird'"
        >Kursblock 2</a
      >
    </div>
  </section>
</template>

<script>
export default {
  props: ["appData"],
};
</script>

<style scoped></style>
