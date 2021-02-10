<template>
  <Layout :routes="navRoutes" v-slot:default="state">
    <Block5Paid :state="state" v-if="state.isPaidAccount" />
    <Block5Free v-else />
  </Layout>
</template>

<script>
import Block5Free from "~/components/Block5Free.vue";
import Block5Paid from "~/components/Block5Paid.vue";
import appData from "~/data/appData";
import { isEarlyBird } from "~/helpers";

export default {
  components: {
    Block5Free,
    Block5Paid,
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
        href: "https://so-kommunizieren.ch/kurs/05-zurueckhaltung-ueben/",
      },
      {
        name: "description",
        content:
          "Wie und warum du dein Baby unterstützen kannst, ohne unnötig einzugreifen",
      },

      {
        name: "robots",
        content: "noindex",
      },
    ],
    title: "Zurückhaltung üben",
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
