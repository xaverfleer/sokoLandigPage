<template>
  <div>
    <Section
      v-for="section in $root.appData.course.block02.sections"
      :section="section"
      :key="section.id"
      v-if="section.id < 6"
    />
    <section class="section">
      <div class="section__subsection">
        <h2>
          ...wenn wir etwas neben dem Baby tun
          <span class="video-name">(Video&nbsp;2.4)</span>
        </h2>
        <VideoVue :video="$root.videos.so2NebenBabyTun" />
        <h3>Das wichtigste in Kürze:</h3>
        <div class="checklist">
          <div class="checklist__item">
            <div class="checklist__text">
              Wenn sich das Baby für unsere alltäglichen Handlungen (kochen,
              putzen, aufräumen) interessiert, können wir es in die Handlung
              miteinbeziehen, indem wir: unser Handeln kommentieren, ihm die
              Objekte, mit denen wir handeln, zu erforschen geben oder ihm die
              Möglichkeit geben, die Tätigkeit selbst zu erforschen.
              (&rarr;&nbsp;Strategiekarte)
            </div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">
              Wenn wir das Baby mithelfen lassen, sollten wir uns
              <em>mit Belehrungen zurückhalten.</em> Durch Belehrungen kann das
              Baby das Interesse verlieren und sich als inkompetent wahrnehmen.
            </div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">
              Wenn wir das Baby mithelfen lassen, sollten wir uns auch
              <em>mit Belohnungen (etwa Lob) zurückhalten.</em> Durch eine
              Belohnung riskieren wir, dass das Baby nur noch hilft, wenn es
              eine Belohnung erwarten kann und dass es sich nur dann wertvoll
              fühlt, wenn es hilfsbereit ist.
            </div>
          </div>
        </div>
        <div class="document">
          <a
            class="document__link"
            href="/documents/so2-Strategiekarte-Wenn-wir-etwas-neben-dem-Baby-tun.pdf"
            target="_blank"
            >Strategiekarte: ...wenn wir etwas neben dem Baby tun – Kursblock
            2</a
          >
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section__subsection">
        <h2>
          ...wenn wir das Baby verlassen
          <span class="video-name">(Video&nbsp;2.5)</span>
        </h2>
        <VideoVue :video="$root.videos.so2Verlassen" />
        <h3>Das wichtigste in Kürze:</h3>
        <div class="checklist">
          <div class="checklist__item">
            <div class="checklist__text">
              Trennungen sind für Babys oft sehr schlimm und lösen enormen
              Stress aus.
            </div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">
              Die <em>Trennungsangst</em> ist tief in seinen Genen verankert:
              Für ein Baby in einem Jäger- und Sammlerclan war jedes Alleinsein
              lebensbedrohlich.
            </div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">
              <em>Trennungsangst kann man nicht abtrainieren,</em> indem man das
              Baby allein weinen lässt: Babys, die oft allein gelassen werden,
              weinen zwar irgendwann nicht mehr, empfinden den Stress aber
              genauso weiter. Sie haben nur gelernt, dass niemand reagiert, wenn
              sie weinen.
            </div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">
              Die Trennungsangst nimmt ab dem
              <em>6. Monat</em> entwicklungsbedingt oft zu.
            </div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">
              Nur durch ein grosses Vertrauen in die Verfügbarkeit seiner
              Bezugsperson <em>(sichere Bindung),</em> kann das Baby mit der
              Zeit mit einem guten Gefühl mutiger und selbständiger werden und
              die Trennungsangst überwinden.
            </div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">
              Ein immer gleich ablaufendes Muster bei einer Trennung kann dem
              Baby Verlässlichkeit und Sicherheit geben. Dazu können wir zum
              Beispiel <em>Kontakt aufnehmen</em>, die
              <em>Trennung ankünden</em> und uns
              <em>nach der Trennung wieder zurückmelden.</em>
              (&rarr;&nbsp;Strategiekarte)
            </div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">
              Wenn wir das Baby einer anderen Bezugsperson zur Betreuung
              abgeben, sollten wir eine gewisse Zeit zur
              <em>Eingewöhnung</em> einplanen, damit das Baby Vertrauen aufbauen
              kann.
            </div>
          </div>
        </div>
        <div class="document">
          <a
            class="document__link"
            href="/documents/so2-Strategiekarte-Wenn-wir-das-Baby-verlassen.pdf"
            target="_blank"
            >Strategiekarte: ...wenn wir das Baby verlassen – Kursblock 2</a
          >
        </div>
      </div>
    </section>
    <section27 :section="block.sections.section27" />
  </div>
</template>

<script>
import Document from "./Document.vue";
import Section from "./Section.vue";
import Section27 from "./Section-2-7.vue";
import VideoVue from "./VideoVue.vue";
export default {
  components: { Document, Section, Section27, VideoVue },
  computed: {
    block: function getBlock() {
      return this.$root.appData.course.block02;
    },
  },
};
</script>

<style scoped></style>
