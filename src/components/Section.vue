<template>
  <section class="section">
    <template v-if="section.blocktitle">
      <div class="block__supertitle">{{ section.blocktitle.supertitle }}</div>
      <h1 class="block__title">{{ section.blocktitle.main }}</h1>
    </template>
    <SectionTitle v-if="section.title" :content="section.title" />
    <VideoVue v-if="section.video" :video="section.video" />
    <template v-if="section.checklist">
      <h3>{{ section.subtitle }}</h3>
      <Checklist :checklist="section.checklist" />
    </template>
    <Document
      v-for="document in section.documents"
      :document="document"
      :key="document.href"
    />
  </section>
</template>

<script>
import Checklist from "./Checklist.vue";
import Document from "./Document.vue";
import SectionTitle from "./SectionTitle.vue";
import VideoVue from "./VideoVue.vue";

export default {
  props: ["section"],
  components: { Checklist, Document, SectionTitle, VideoVue },
};
</script>
