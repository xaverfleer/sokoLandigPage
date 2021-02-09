<template>
  <Layout v-slot:default="state">
    <Block3Paid :state="state" v-if="state.isPaidAccount" />
    <Block3Free v-else />
  </Layout>
</template>

<script>
import Block3Free from "~/components/Block3Free.vue";
import Block3Paid from "~/components/Block3Paid.vue";

export default {
  components: {
    Block3Free,
    Block3Paid,
  },
  metaInfo: {
    meta: [
      {
        name: "canonical",
        href: "https://so-kommunizieren.ch/kurs/03-das-baby-verstehen",
      },
      {
        name: "description",
        content:
          "Vom Perspektivenwechsel zu leisen Signalen, die zeiten, was dein Baby beschäftigt.",
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
    title: "Das Baby verstehen",
  },
};
</script>
