<template>
  <section class="section">
    <div class="section__subsection">
      <SectionTitle :content="section.title" />
      <Document :document="$root.docs.so1.Vertiefung" />
      <Document :document="$root.docs.so1.Literatur" />
      <div class="buttons">
        <RouteVue
          :info="$root.appData.routes.block02"
          :options="{ isPrimary: true }"
          v-if="$root.isKurs"
        />
        <ButtonVue :info="$root.buttons.cta05Secondary" v-if="$root.isKurs" />
        <RouteVue
          :info="$root.appData.routes.block02"
          v-if="$root.isEarlyBird"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ButtonVue from "./ButtonVue.vue";
import Document from "./Document.vue";
import RouteVue from "./RouteVue.vue";
import SectionTitle from "./SectionTitle.vue";

export default {
  props: ["section"],
  components: { ButtonVue, Document, RouteVue, SectionTitle },
};
</script>

<style scoped></style>
