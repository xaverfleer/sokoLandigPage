<template>
  <Layout v-slot:default="state">
    <Section
      v-for="section in appData.course.block01.sections"
      :section="section"
      :key="section.id"
    />
    <div class="buttons">
      <RouteVue
        :info="{ ...appData.course.routes.block02, isPrimary: true }"
        v-if="state.isFree"
      />
      <ButtonVue :info="appData.buttons.cta05Secondary" v-if="state.isFree" />
      <RouteVue
        :info="appData.course.routes.block02"
        v-if="state.isPaidAccount"
      />
    </div>
  </Layout>
</template>

<script>
import ButtonVue from "~/components/ButtonVue.vue";
import FormVue from "~/components/FormVue.vue";
import RouteVue from "~/components/RouteVue.vue";
import Section from "~/components/Section.vue";
import appData from "~/data/appData";

export default {
  components: { ButtonVue, FormVue, RouteVue, Section },
  computed: {
    appData() {
      return appData;
    },
  },
  metaInfo: {
    meta: [
      {
        name: "canonical",
        href: "https://so-kommunizieren.ch/early-bird/01-innere-staerke",
      },
      {
        name: "description",
        content:
          "Innere Stärke und Gleichwürdigkeit. Exklusiver Zugang für Early Birds",
      },
      {
        name: "google-site-verification",
        content: "21ovtDZF6FXeZlkMfWnPWAjtK_km4OwN5yRwcJRA0O4",
      },
      {
        name: "robots",
        content: "noindex",
      },
    ],
    script: [
      {
        src: "/amplitudeSnippet.js",
      },
    ],
    title: "Innere Stärke und Gleichwürdigkeit, Early-Birds",
  },
};
</script>
