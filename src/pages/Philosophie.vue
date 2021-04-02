<template>
  <Layout>
    <Section class="section">
      <h1>Philosophie der <em>subjektorientierten</em> Kommunikation</h1>
      <p>
        Kinder sind kleine Persönlichkeiten mit einem angeborenen und
        unverhandelbaren Recht auf Menschenwürde. Das ist eine zentrale
        Überzeugung hinter der subjektorientierten Kommunikation. Diese
        Überzeugung basiert auf nichts Geringerem als auf der
        UNO-Kinderrechtskonvention.
      </p>
      <g-image
        alt="Das Recht auf Menschenwuerde"
        class="speech-bubble speech-bubble--right"
        src="~/assets/imgs/sprechblase-5.png"
      />
      <p class="speech-bubble__clear"></p>
      <p>
        Menschenwürde umfasst das Recht, als Individuum mit allen Gedanken,
        Gefühlen, Bedürfnissen, Wünschen, Träumen etc. wahr- und ernstgenommen
        zu werden und die eigene Persönlichkeit zu entfalten. Anders
        ausgedrückt: Kinder haben das Recht darauf, als einzigartiges Subjekt
        mit ihrer ganz eigenen inneren Realität gesehen und miteinbezogen,
        anstatt als Objekt fremdbestimmt und abgefertigt zu werden.
      </p>
      <p>
        <strong
          >Kindern als Subjekt zu begegnen ist eine andere Bezeichnung dafür,
          Kindern das Recht auf Würde zuzugestehen.</strong
        >
      </p>
      <p>
        Mit dieser Überzeugung distanziert sich die subjektorientierte
        Kommunikation von allen Erziehungsansätzen, die darauf abzielen, das
        Verhalten von Kindern durch äussere Anreize zu steuern und zu
        kontrollieren. Erziehungsmethoden wie Schimpfen, bewusstes Ignorieren,
        Drohen, Strafen oder Bestechen durch Belohnungen reduzieren Kinder auf
        ihr Verhalten, ohne nach den inneren, subjektiven Beweggründen zu
        fragen.
      </p>
      <g-image
        alt="Kinder duerfen nicht auf das Verhalten reduziert werden"
        class="speech-bubble speech-bubble--left"
        src="~/assets/imgs/sprechblase-6.png"
      />
      <p class="speech-bubble__clear"></p>
      <p>
        Die Bindungs- und Entwicklungsforschung zeigt eindeutig, dass solche
        Methoden der gesunden kognitiven, psychischen und sozialen Entwicklung
        schaden. Es tut Kinder nicht gut, wenn sie erleben, dass sie Liebe,
        Zuneigung und Wertschätzung vor allem oder in ganz besonderem Masse dann
        erhalten, wenn sie sich angepasst und gehorsam verhalten. Es tut Kindern
        nicht gut, wenn sie daran zweifeln müssen, grundsätzlich wertvoll und
        liebeswürdig zu sein. Diese Zweifel hemmen die kognitive Entwicklung und
        schaden der psychischen Gesundheit, denn sie sind der Nährboden für
        Minderwertigkeitskomplexe und Versagensängste. Das Recht auf
        Menschenwürde beinhaltet das Recht auf körperliche und geistige
        Unversehrtheit. Deswegen sind solche Erziehungsmethoden mit dem Recht
        auf Menschenwürde und damit auch mit der
        <em>subjektorientierten</em> Kommunikation nicht vereinbar.
      </p>
      <p>
        Trotz den eindeutigen Erkenntnissen der Wissenschaft, halten sich
        entwürdigende Erziehungsmethoden und Kommunikationsformen hartnäckig.
        Laut einer Studie der Stiftung «Kinderschutz Schweiz» erlebt ungefähr
        jedes vierte Kind in der Schweiz regelmässig psychische Gewalt, z.B. in
        Form von Beschimpfungen, Drohungen oder Liebes- und
        Aufmerksamkeitsentzug. Gleichzeitig sind viele Eltern offen für
        Hilfestellungen zum Thema gewaltlose Erziehung. Und genau solche
        Hilfestellungen geben die Strategien der subjektorientierten
        Kommunikation.
      </p>
      <p>
        In der subjektorientierten Kommunikation geht es nicht um die Frage, wie
        wir Kinder effektiv zu angepasstem, bravem und letztlich unterwürfigem
        Verhalten konditionieren können. Stattdessen geht es um die Frage, wie
        wir mit Kindern auf eine Art und Weise kommunizieren können, die Kinder
        innerlich stärkt und die nährend für ihre gesunde kognitive, psychische
        und soziale Entwicklung ist.
      </p>
      <g-image
        alt="Die ersten drei Jahre"
        class="speech-bubble speech-bubble--right"
        src="~/assets/imgs/sprechblase-7.png"
      />
      <p class="speech-bubble__clear"></p>
      <p>
        Dabei sind die ersten drei Lebensjahre von besonderer Bedeutung. Denn
        die Erfahrungen in der frühsten Kindheit beeinflussen alle Aspekte der
        künftigen Entwicklung besonders stark und nachhaltig. Die Art und Weise,
        wie wir mit Babys umgehen und kommunizieren prägt nachhaltig das Bild,
        das sie von sich selbst, von ihren Mitmenschen und von der Welt
        entwickeln. Lernprobleme, psychische Störungen oder soziale
        Schwierigkeiten wurzeln oft in frühesten Kindheitserfahrungen. Deswegen
        ist eine einfühlsame, wertschätzende und stärkende (also eine
        subjektorientierte) Kommunikation von Anfang an das Wertvollste, was wir
        einem Baby schenken können. Sie ist ein Geschenk für das Hier und Jetzt,
        weil sie dem Baby das wohlige Gefühl gibt, verstanden, geliebt und gut
        umsorgt zu sein. Sie ist auch ein Geschenk an die Zukunft, weil sie das
        Baby innerlich stärkt und dadurch das Fundament für eine gesunde
        kognitive, psychische und soziale Entwicklung schafft.
      </p>
    </Section>
  </Layout>
</template>

<script>
import { trackPageLoad } from "~/scripts/analyticsMethods";

export default {
  metaInfo: {
    meta: [
      { name: "canonical", href: "https://so-kommunizieren.ch/philosophie/" },
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
