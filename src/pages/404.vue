<template>
  <Layout>
    <section class="section">
      <h1>Seite nicht gefunden</h1>
      <p>
        Die gesuchte Seite ist entweder temporär nicht verfügbar, wurde an einen
        anderen Ort verschoben oder existiert nicht mehr.
      </p>
      <p>
        <g-link to="/kurs/">Zum Kurs</g-link>
        oder
        <g-link to="/">zur Startseite.</g-link>
      </p>
    </section>
  </Layout>
</template>

<script>
import { trackPageLoad } from "~/scripts/analyticsMethods";
import appData from "~/data/appData";

export default {
  computed: {
    appData() {
      return appData;
    },
  },
  metaInfo: {
    meta: [
      { name: "canonical", href: "https://so-kommunizieren.ch/404/" },
      { name: "robots", content: "noindex" },
    ],
    title: "Seite nicht gefunden",
  },
  mounted() {
    trackPageLoad("/404/");
  },
};
</script>
