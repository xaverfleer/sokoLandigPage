<template>
  <section class="section">
    <div class="section__subsection">
      <SectionTitle :content="section.title" />
      <VideoVue :video="$root.videos.so3Einstieg" />
    </div>
  </section>
</template>

<script>
import SectionTitle from "./SectionTitle.vue";
import VideoVue from "./VideoVue.vue";

export default {
  props: ["section"],
  components: { SectionTitle, VideoVue },
};
</script>

<style scoped></style>
