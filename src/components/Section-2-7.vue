<template>
  <section class="section">
    <div class="section__subsection">
      <SectionTitle :content="section.title" />
      <VideoVue :video="$root.videos.so2DosAndDonts" />
    </div>
    <div class="section__subsection">
      <div class="buttons">
        <ButtonVue :info="$root.buttons.cta07Secondary" />
        <ButtonVue :info="$root.buttons.cta08Secondary" />
      </div>
    </div>
  </section>
</template>

<script>
import ButtonVue from "./ButtonVue.vue";
import SectionTitle from "./SectionTitle.vue";
import VideoVue from "./VideoVue.vue";

export default {
  props: ["section"],
  components: { ButtonVue, SectionTitle, VideoVue },
};
</script>

<style scoped></style>
