<template>
  <section class="section">
    <div class="section__subsection">
      <SectionTitle :content="section.title" />
      <VideoVue :video="$root.videos.so2DosAndDonts" />
    </div>
    <div class="section__subsection">
      <div class="buttons">
        <RouteVue :info="$root.appData.routes.block01" />
        <RouteVue :info="$root.appData.routes.block03" />
      </div>
    </div>
  </section>
</template>

<script>
import RouteVue from "./RouteVue.vue";
import SectionTitle from "./SectionTitle.vue";
import VideoVue from "./VideoVue.vue";

export default {
  props: ["section"],
  components: { RouteVue, SectionTitle, VideoVue },
};
</script>

<style scoped></style>
