<template>
  <section class="section">
    <div class="section__subsection">
      <SectionTitle :content="section.title" />
      <VideoVue :video="$root.videos.so1Herablassend" />
      <h3>{{ section.subtitle }}</h3>
      <Checklist :checklist="section.checklist" />
    </div>
  </section>
</template>

<script>
import Checklist from "./Checklist.vue";
import SectionTitle from "./SectionTitle.vue";
import VideoVue from "./VideoVue.vue";

export default {
  props: ["section"],
  components: { Checklist, SectionTitle, VideoVue },
};
</script>

<style scoped></style>
