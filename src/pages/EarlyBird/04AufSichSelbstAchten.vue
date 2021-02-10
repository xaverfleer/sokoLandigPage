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

export default {
  components: {
    Block4Free,
    Block4Paid,
  },
  computed: {
    isEarlyBird() {
      return document.location.pathname.indexOf("/early-bird/") > -1;
    },
    navRoutes() {
      const crs = appData.courseRoutes;
      return this.isEarlyBird
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
