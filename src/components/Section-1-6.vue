<template>
  <section class="section">
    <div class="section__subsection">
      <SectionTitle :content="section.title" />
      <Video :video="videos.so1Herablassend" />
      <h3>{{ section.subtitle }}</h3>
      <Checklist :checklist="section.checklist" />
    </div>
  </section>
</template>

<script>
import Checklist from "./Checklist.vue";
import SectionTitle from "./SectionTitle.vue";
import Video from "./Video.vue";

export default {
  props: ["section", "videos"],
  components: { Checklist, SectionTitle, Video },
};
</script>

<style scoped></style>
