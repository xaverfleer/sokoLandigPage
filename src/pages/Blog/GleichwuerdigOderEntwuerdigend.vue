<template>
  <Layout>
    <Section class="section">
      <p class="blog__date-and-author">22. Februar 2021 – Eva Fleer</p>
      <h1 class="blog__title">Gleichwürdig oder entwürdigend?</h1>
      <p>
        Kinder brauchen innere Stärke, um mit den Herausforderungen des Lebens
        umzugehen und um ihr Leben aktiv zu gestalten. Mit der Art und Weise, wie wir mit Kindern kommunizieren, 
        können wir Kinder innerlich stärken oder auch schwächen.
      </p>
      <p>
        <strong>Eine gleichwürdige Sprache stärkt
        Kinder, eine entwürdigende Sprache schwächt sie.</strong>
      </p>
      <br />
      <h2>Gleichwürdige Sprache</h2>
      <p>Eine gleichwürdige
        Sprache bringt zum Ausdruck, dass wir ein Kind in seiner individuellen
        Persönlichkeit mit seiner ganz eigenen inneren Realität wahr- und
        ernstnehmen. Eine gleichwürdige Sprache vermittelte dem Baby, dass sein Gefühle, 
        Bedürfnisse und Wünsche gleichermassen wichtig sind, wie die Gefühle, Bedürfnisse 
        und Wünsche seiner Bezugsperson. Der Alters- und Erfahrungsunterschied zwischen 
        Erwachsenen und Babys darf nicht dazu führen, einem Baby weniger Würde beizumessen 
        als einer erwachsenen Person.
      </p>
      <p>
        Einem Kind die gleiche Würde wie einer erwachsenen Person zuzugestehen, heisst nicht, dass die 
        erwachsene Person die Führungsrolle in der Beziehung verliert. Sie trägt nach wie vor die 
        Hautpverantwortung für das Wohlergehen aller Familienmitglieder und sie trifft auch die nötigen 
        Entscheide dazu. Es ist klar, dass solche Entscheide manchmal gegen den Willen des Babys getroffen 
        werden müssen, dann zum Beispiel, wenn das Baby durch eine Handlung die persönliche Grenze seiner 
        Bezugsperson verletzt. Doch selbst dann ermöglicht eine gleichwürdige Sprache, die Wünsche und 
        Interessen des Babys als berechtigt (wenn auch nicht erfüllbar) anzuerkennen und dem Baby 
        zuzugestehen, Gefühle wie Frust, Trauer oder Wut zu empfinden.
      </p>
      <p>
        Eine gleichwürdige Sprache bringt im Kern folendes zum Ausdruck:
      </p>
      <p>
        <strong>Ich sehe und höre dich. Du bist wichtig. Und ich bin auch wichtig. Deswegen kann ich dir 
          nicht alles ermöglichen und nicht jeden Wunsch erfüllen. Trotzdem sind all deine Gedanken, Gefühle, 
          Bedürfnisse und Wünsche in diesem Moment richtig und berechtigt.</strong>
      </p>
      <br />
      <h2>Entwürdigende Sprache</h2>
      <p>
        Leider sind in unserer Gesellschaft entwürdigende, herablassende
        Aussagen gegenüber Kindern keine Seltenheit. Viel zu oft werden zum Beispiel Gefühle von Babys 
        kleingeredet oder geleugnet, unerfüllbare Wünsche als unvernünftig abgetan oder unerwünschte 
        Verhaltensweisen verständnislos getadelt und bestraft. 
      </p>
      <p>
        In diesem Videsieben habe ich sieben Kategorien von entwürdigenden Aussagen zusammengestellt, denen 
        ich im Alltag immer wieder begegne. Ich erkläre, warum diese Aussagen entwürdigend sind und ich gehen 
        darauf ein, welche gleichwürdigen Alternativen wir haben.
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
