<template>
  <Layout :routes="navRoutes" v-slot:default="state">
    <Block5Paid :state="state" v-if="state.isPaidAccount" />
    <Block5Free v-else />
  </Layout>
</template>

<script>
import Block5Free from "~/components/Block5Free.vue";
import Block5Paid from "~/components/Block5Paid.vue";
import { trackPageLoad } from "~/scripts/analyticsMethods";
import appData from "~/data/appData";
import { isEarlyBird, kursToEarlyBird } from "~/helpers";

export default {
  components: {
    Block5Free,
    Block5Paid,
  },
  computed: {
    navRoutes() {
      const crs = appData.courseRoutes;
      return isEarlyBird(this)
        ? Array.from(crs).map((cr) => kursToEarlyBird(cr))
        : crs;
    },
  },
  metaInfo: {
    meta: [
      {
        name: "canonical",
        href: "https://so-kommunizieren.ch/kurs/05-zurueckhaltung-ueben/",
      },
      {
        name: "description",
        content:
          "Wie und warum du dein Baby unterstützen kannst, ohne unnötig einzugreifen",
      },
    ],
    title: "Zurückhaltung üben",
  },
  mounted() {
    trackPageLoad(this.$route.path);
  },
};
</script>
