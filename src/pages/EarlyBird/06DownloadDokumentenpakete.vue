<template>
  <Layout v-slot:default="state">
    <Block6Paid :state="state" v-if="state.isPaidAccount" />
    <Block6Free v-else />
  </Layout>
</template>

<script>
import Block6Free from "~/components/Block6Free.vue";
import Block6Paid from "~/components/Block6Paid.vue";

export default {
  components: {
    Block6Free,
    Block6Paid,
  },
  metaInfo: {
    meta: [
      {
        name: "canonical",
        href: "https://so-kommunizieren.ch/kurs/06-download-dokumentenpakete",
      },
      {
        name: "description",
        content: "Alle Dokumente gebündelt, um sie bequem auszudrucken.",
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
    title: "Download Dokumentenpakete",
  },
};
</script>
