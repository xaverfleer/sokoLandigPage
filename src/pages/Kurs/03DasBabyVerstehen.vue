<template>
  <Layout :routes="navRoutes" v-slot:default="state">
    <Block3Paid :state="state" v-if="state.isPaidAccount" />
    <Block3Free v-else />
  </Layout>
</template>

<script>
import Block3Free from "~/components/Block3Free.vue";
import Block3Paid from "~/components/Block3Paid.vue";
import analytics from "~/scripts/analytics";
import appData from "~/data/appData";
import { isEarlyBird } from "~/helpers";

export default {
  components: {
    Block3Free,
    Block3Paid,
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
        href: "https://so-kommunizieren.ch/kurs/03-das-baby-verstehen/",
      },
      {
        name: "description",
        content:
          "Vom Perspektivenwechsel zu leisen Signalen, die zeiten, was dein Baby beschäftigt.",
      },

      {
        name: "robots",
        content: "noindex",
      },
    ],
    title: "Das Baby verstehen",
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
