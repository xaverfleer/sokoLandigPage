<template>
  <Layout :routes="navRoutes" v-slot:default="state">
    <SectionVue
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
        :info="
          state.isEarlyBird
            ? kursToEarlyBird(appData.course.routes.block02)
            : appData.course.routes.block02
        "
        v-if="state.isPaidAccount"
      />
    </div>
  </Layout>
</template>

<script>
import ButtonVue from "~/components/ButtonVue.vue";
import RouteVue from "~/components/RouteVue.vue";
import SectionVue from "~/components/SectionVue.vue";

import appData from "~/data/appData";
import { isEarlyBird, kursToEarlyBird } from "~/helpers";
import { trackPageLoad } from "~/scripts/analyticsMethods";

export default {
  components: { ButtonVue, RouteVue, SectionVue },
  computed: {
    appData() {
      return appData;
    },
    navRoutes() {
      const crs = this.appData.courseRoutes;
      return isEarlyBird(this)
        ? Array.from(crs).map((cr) => kursToEarlyBird(cr))
        : crs;
    },
  },
  metaInfo: {
    meta: [
      {
        name: "canonical",
        href: "https://so-kommunizieren.ch/kurs/01-innere-staerke/",
      },
      {
        name: "description",
        content:
          "Was wir unseren Babys wirklich wünschen und warum gehorsam nicht unser Ziel ist.",
      },
    ],
    title: "Innere Stärke und Gleichwürdigkeit",
  },
  methods: {
    kursToEarlyBird,
  },
  mounted() {
    trackPageLoad(this.$route.path);
  },
};
</script>
