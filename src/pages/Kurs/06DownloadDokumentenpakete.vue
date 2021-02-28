<template>
  <Layout :routes="navRoutes" v-slot:default="state">
    <Block6Paid :state="state" v-if="state.isPaidAccount" />
    <Block6Free v-else />
  </Layout>
</template>

<script>
import Block6Free from "~/components/Block6Free.vue";
import Block6Paid from "~/components/Block6Paid.vue";
import analytics from "~/scripts/analytics";
import appData from "~/data/appData";
import { isEarlyBird } from "~/helpers";

export default {
  components: {
    Block6Free,
    Block6Paid,
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
        href: "https://so-kommunizieren.ch/kurs/06-download-dokumentenpakete/",
      },
      {
        name: "description",
        content: "Alle Dokumente gebündelt, um sie bequem auszudrucken.",
      },

      {
        name: "robots",
        content: "noindex",
      },
    ],
    title: "Download Dokumentenpakete",
  },
  methods: {
    kursToEarlyBird(courseRoute) {
      return {
        ...courseRoute,
        to: courseRoute.to.split("/kurs/").join("/early-bird/"),
      };
    },
  },
  mounted() {
    analytics(this.$route.path);
  },
};
</script>
