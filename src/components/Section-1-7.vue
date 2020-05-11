<template>
  <section class="section">
    <div class="section__subsection">
      <SectionTitle :content="section.title" />
      <Document :document="documents['so1-Vertiefung']" />
      <Document :document="documents['so1-Erinnerung']" />
      <Document :document="documents['so1-Literatur']" />
      <div class="buttons">
        <Button
          :info="appData.buttons.cta06Primary"
          :updateActiveBlock="updateActiveBlock"
          v-if="appData.state.path === 'kurs'"
        />
        <Button
          :info="appData.buttons.cta05Secondary"
          v-if="appData.state.path === 'kurs'"
        />
        <Button
          :info="appData.buttons.cta06Secondary"
          :updateActiveBlock="updateActiveBlock"
          v-if="appData.state.path === 'early-bird'"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Button from "./Button.vue";
import Document from "./Document.vue";
import SectionTitle from "./SectionTitle.vue";

export default {
  props: ["appData", "documents", "section", "updateActiveBlock"],
  components: { Button, Document, SectionTitle },
};
</script>

<style scoped></style>
