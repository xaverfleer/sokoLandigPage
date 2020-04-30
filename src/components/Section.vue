<template>
  <div id="app" class="section__subsection">
    <SectionTitle />
    <Video />
    <Document />
  </div>
</template>

<script>
import Document from "./Document.vue";
import SectionTitle from "./SectionTitle.vue";
import Video from "./Video.vue";

export default {
  components: { Document, SectionTitle, Video },
};
</script>

<style scoped></style>
