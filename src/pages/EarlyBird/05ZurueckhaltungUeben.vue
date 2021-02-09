<template>
  <Layout v-slot:default="state">
    <Block5Paid :state="state" v-if="state.isPaidAccount" />
    <Block5Free v-else />
  </Layout>
</template>

<script>
import Block5Free from "~/components/Block5Free.vue";
import Block5Paid from "~/components/Block5Paid.vue";

export default {
  components: {
    Block5Free,
    Block5Paid,
  },
  metaInfo: {
    meta: [
      {
        name: "canonical",
        href: "https://so-kommunizieren.ch/kurs/05-zurueckhaltung-ueben",
      },
      {
        name: "description",
        content:
          "Wie und warum du dein Baby unterstützen kannst, ohne unnötig einzugreifen",
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
    title: "Zurückhaltung üben",
  },
};
</script>
