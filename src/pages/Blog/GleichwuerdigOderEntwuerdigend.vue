<template>
  <Layout :routes="navRoutes">
    <Section class="section">
      <p class="blog__date-and-author">22. Februar 2021 – Eva Fleer</p>
      <h1 class="blog__title">Gleichwürdig oder entwürdigend?</h1>
      <h2>Warum Gleichwürdigkeit?</h2>
      <p>
        Kinder brauchen innere Stärke, um mit den Herausforderungen des Lebens
        umzugehen und um ihr Leben aktiv zu gestalten.
      </p>
      <p>
        Mit der Art und Weise, wie wir mit Kindern kommunizieren, können wir sie
        innerlich stärken oder auch schwächen. Eine gleichwürdige Sprache stärkt
        Kinder, eine entwürdigende Sprache schwächt sie. Eine gleichwürdige
        Sprache bringt zum Ausdruck, dass wir ein Kind in seiner individuellen
        Persönlichkeit mit seiner ganz eigenen inneren Realität wahr- und
        ernstnehmen.
      </p>
      <h2>Entwürdigende Sprache</h2>
      <p>
        Leider sind in unserer Gesellschaft entwürdigende, herablassende
        Aussagen gegenüber Kindern keine Seltenheit. In diesem Video haben wir
        sieben Kategorien von entwürdigenden Aussagen zusammengestellt. Wir
        gehen kurz auf gleichwürdige Alternativen ein.
      </p>
      <VideoVue :video="{ ref: 'https://player.vimeo.com/video/514884071' }" />
      <p>
        <g-link to="/blog/">Zurück zur Übersicht</g-link>
        oder
        <g-link to="/kurs-">zum Kurs.</g-link>
      </p>
    </Section>
  </Layout>
</template>

<script>
import VideoVue from "~/components/VideoVue.vue";
import { trackPageLoad } from "~/scripts/analyticsMethods";

export default {
  components: { VideoVue },
  metaInfo: {
    meta: [
      {
        name: "canonical",
        href:
          "https://so-kommunizieren.ch/blog/gleichwuerdig-oder-erniedrigend/",
      },
      {
        name: "description",
        content:
          "Eine gleichwürdige Sprache stärkt Kinder, eine entwürdigende Sprache schwächt sie. Ein Überblick worauf wir uns achent können.",
      },
    ],
    title: "Gleichwürdig oder Erniedrigend",
  },
  mounted() {
    trackPageLoad(this.$route.path);
  },
};
</script>
