<template>
  <section class="section">
    <div class="section__subsection">
      <SectionTitle :content="section.title" />
      <VideoVue :video="$root.videos.so3Einstieg" />
      <Document :document="$root.docs['so3-Vertiefung01']" />
    </div>
  </section>
</template>

<script>
import Document from "./Document.vue";
import SectionTitle from "./SectionTitle.vue";
import VideoVue from "./VideoVue.vue";

export default {
  props: ["section"],
  components: { SectionTitle, VideoVue, Document },
};
</script>

<style scoped></style>
