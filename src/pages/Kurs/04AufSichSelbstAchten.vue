<template>
  <Layout :routes="navRoutes" v-slot:default="state">
    <Block4Paid :state="state" v-if="state.isPaidAccount" />
    <Block4Free v-else />
  </Layout>
</template>

<script>
import Block4Free from "~/components/Block4Free.vue";
import Block4Paid from "~/components/Block4Paid.vue";
import appData from "~/data/appData";
import { isEarlyBird } from "~/helpers.js";

export default {
  components: {
    Block4Free,
    Block4Paid,
  },
  computed: {
    navRoutes() {
      const crs = appData.courseRoutes;
      return isEarlyBird(this)
        ? Array.from(crs).map((cr) => this.kursToEarlyBird(cr))
        : crs;
    },
  },
  metaInfo: {
    meta: [
      {
        name: "canonical",
        href: "https://so-kommunizieren.ch/kurs/04-auf-sich-selbst-achten",
      },
      {
        name: "description",
        content:
          "Wie du dich selber beobachten kannst und deine Grenzen schützen kannst.",
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
    title: "Auf sich selbst achten",
  },
  methods: {
    kursToEarlyBird(courseRoute) {
      return {
        ...courseRoute,
        to: courseRoute.to.split("/kurs/").join("/early-bird/"),
      };
    },
  },
};
</script>
