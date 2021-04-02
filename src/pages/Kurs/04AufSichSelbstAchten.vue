<template>
  <Layout :routes="navRoutes" v-slot:default="state">
    <Block4Paid :state="state" v-if="state.isPaidAccount" />
    <Block4Free v-else />
  </Layout>
</template>

<script>
import Block4Free from "~/components/Block4Free.vue";
import Block4Paid from "~/components/Block4Paid.vue";
import { trackPageLoad } from "~/scripts/analyticsMethods";
import appData from "~/data/appData";
import { isEarlyBird, kursToEarlyBird } from "~/helpers";

export default {
  components: {
    Block4Free,
    Block4Paid,
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
        href: "https://so-kommunizieren.ch/kurs/04-auf-sich-selbst-achten/",
      },
      {
        name: "description",
        content:
          "Wie du dich selber beobachten kannst und deine Grenzen schützen kannst.",
      },
    ],
    title: "Auf sich selbst achten",
  },
  mounted() {
    trackPageLoad(this.$route.path);
  },
};
</script>
