<template>
  <section class="section">
    <div class="section__subsection">
      <SectionTitle :content="section.title" />
    </div>
  </section>
</template>

<script>
import SectionTitle from "./SectionTitle.vue";

export default {
  props: ["section"],
  components: { SectionTitle },
};
</script>

<style scoped></style>
