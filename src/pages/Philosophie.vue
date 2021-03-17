<template>
  <Layout>
    <Section class="section">
      <h1>Philosophie der <em>subjektorientierten</em> Kommunikation</h1>
    </Section>
  </Layout>
</template>

<script>
import { trackPageLoad } from "~/scripts/analyticsMethods";

export default {
  metaInfo: {
    meta: [
      { name: "canonical", href: "https://so-kommunizieren.ch/blog/" },
      {
        name: "description",
        content:
          "Philosophie – Grundgedanken der subjektorientierten Kommunikation",
      },
    ],
    title: "Philosophie",
  },
  mounted() {
    trackPageLoad(this.$route.path);
  },
};
</script>
