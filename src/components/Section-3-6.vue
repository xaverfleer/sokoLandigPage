<template>
  <section class="section">
    <div class="section__subsection">
      <SectionTitle :content="section.title" />
      <VideoVue :video="$root.videos.so3BabyWeint" />
      <h3>{{ section.subtitle }}</h3>
      <Checklist :checklist="section.checklist" />
      <Document :document="$root.docs['so3-Vertiefung02']" />
      <div class="buttons">
        <ButtonVue :info="$root.buttons.cta06Secondary" />
        <ButtonVue :info="$root.buttons.cta09Secondary" />
      </div>
    </div>
  </section>
</template>

<script>
import ButtonVue from "./ButtonVue.vue";
import Checklist from "./Checklist.vue";
import Document from "./Document.vue";
import SectionTitle from "./SectionTitle.vue";
import VideoVue from "./VideoVue.vue";

export default {
  props: ["section"],
  components: { ButtonVue, Checklist, Document, SectionTitle, VideoVue },
};
</script>

<style scoped></style>
