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
      <Button
        :info="appData.buttons.cta06Primary"
        v-if="appData.state.path === 'kurs'"
      />
      <Button
        :info="appData.buttons.cta05Secondary"
        v-if="appData.state.path === 'kurs'"
      />
      <Button
        :info="appData.buttons.cta06Secondary"
        v-if="appData.state.path === 'early-bird'"
      />
    </div>
  </section>
</template>

<script>
import Button from "./Button.vue";
export default {
  props: ["appData"],
  components: { Button },
};
</script>

<style scoped></style>
