<template>
  <Layout :routes="navRoutes" v-slot:default="state">
    <Block2Paid :state="state" v-if="state.isPaidAccount" />
    <Block2Free v-else />
  </Layout>
</template>

<script>
import Block2Free from "~/components/Block2Free.vue";
import Block2Paid from "~/components/Block2Paid.vue";
import { trackPageLoad } from "~/scripts/analyticsMethods";
import appData from "~/data/appData";
import { isEarlyBird, kursToEarlyBird } from "~/helpers";

export default {
  components: {
    Block2Free,
    Block2Paid,
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
        href: "https://so-kommunizieren.ch/kurs/02-mit-dem-baby-interagieren/",
      },
      {
        name: "description",
        content:
          "Von Objekt- und Gebärdesprache zu konkreten Strategien, wie du mit deinem Baby interagieren kannst.",
      },
    ],
    title: "Mit dem Baby interagieren",
  },
  mounted() {
    trackPageLoad(this.$route.path);
  },
};
</script>
