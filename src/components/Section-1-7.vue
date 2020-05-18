<template>
  <section class="section">
    <div class="section__subsection">
      <SectionTitle :content="section.title" />
      <Document :document="$root.docs.so1.Vertiefung" />
      <Document :document="$root.docs.so1.Literatur" />
      <div class="buttons">
        <ButtonVue :info="$root.buttons.cta06Primary" v-if="$root.isKurs" />
        <ButtonVue :info="$root.buttons.cta05Secondary" v-if="$root.isKurs" />
        <ButtonVue
          :info="$root.buttons.cta06Secondary"
          v-if="$root.isEarlyBird"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ButtonVue from "./ButtonVue.vue";
import Document from "./Document.vue";
import SectionTitle from "./SectionTitle.vue";

export default {
  props: ["section"],
  components: { ButtonVue, Document, SectionTitle },
};
</script>

<style scoped></style>
