<template>
  <div>
    <section class="section">
      <div class="section__subsection">
        <div class="block__supertitle">Kursblock&nbsp;2</div>
        <h1 class="block__title">Mit dem Baby interagieren...</h1>
        <p>In diesem Kursblock…</p>
        <div class="checklist">
          <div class="checklist__item">
            <div class="checklist__text">
              …verbindest du dich mit deinem Baby, in dem du in drei
              Einstiegsübungen seine Perspektive einnimmst&nbsp;(Video&nbsp;2.1)
            </div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">
              …lernst du die Objekt- die Geräusch- und die Gebärdensprache als
              Ergänzung zur gesprochenen Sprache kennen&nbsp;(Video&nbsp;2.2)
            </div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">
              …erfährst du, wie du subjektorientiert mit dem Baby interagieren
              kannst, wenn du etwas an deinem Baby tust, z.B.
              wickeln&nbsp;(Video&nbsp;2.3)
            </div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">
              …zeigen wir dir, wie du subjektorientiert mit dem Baby
              interagieren kannst, wenn du etwas neben deinem Baby
              tust&nbsp;(Video&nbsp;2.4)
            </div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">
              …zeigen wir auf, wie du subjektorientiert mit dem Baby
              interagieren kannst, wenn du das Baby
              verlässt&nbsp;(Video&nbsp;2.5)
            </div>
          </div>
        </div>
        <Document :document="$root.docs.so2.Zusammenfassung" />
        <Document :document="$root.docs.so2.UebungsdossierPdf" />
        <Document :document="$root.docs.so2.UebungsdossierDocx" />
      </div>
    </section>
    <section class="section">
      <div class="section__subsection">
        <h2>Einstiegsübung <span class="video-name">(Video&nbsp;2.1)</span></h2>
        <VideoVue :video="$root.videos.so2Einstieg" />
        <Document :document="$root.docs.so2.Einstiegsuebung01" />
        <Document :document="$root.docs.so2.Einstiegsuebung02" />
        <Document :document="$root.docs.so2.Vertiefung01" />
      </div>
    </section>
    <section class="section">
      <div class="section__subsection">
        <h2>
          Mit dem Baby sprechen <span class="video-name">(Video&nbsp;2.2)</span>
        </h2>
        <VideoVue :video="$root.videos.so2Sprechen" />
        <h3>Das wichtigste in Kürze:</h3>
        <div class="checklist">
          <div class="checklist__item">
            <div class="checklist__text">
              Babys erlernen Sprache wenn wir mit ihnen sprechen. Zuerst bauen
              sie ein passives Wissen und Verstehen auf. Sie versehen immer
              deutlich mehr als dass sie selbst mitteilen können.
            </div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">
              Die <em>babyangepasste Sprechweise</em> (hohe Stimme,
              Wiederholungen, starke Betonungen etc.) bindet die Aufmerksamkeit
              des Babys und kann beim frühen Spracherwerb hilfreich sein. Wir
              müssen sie also nicht unterdrücken, sie verschwindet von selbst,
              wenn das Baby älter wird.
            </div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">
              Eine <em>babyangepasste Sprache</em> (Verwendung von Wörtern und
              Grammatik, die es in der echten Sprache nicht gibt, z.B. «Mama
              muss Pipi», statt «Ich muss mal pinkeln gehen»), ist unnötig und
              nicht förderlich für den Spracherwerb.
            </div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">
              Ergänzend zur gesprochenen Sprache können wir die
              <em>Objektsprache,</em> die <em>Geräuschsprache</em> und die
              <em>Gebärdensprache</em> nutzen. Diese Ergänzungen helfen dem
              Baby, aus dem Fluss an Silben in einem Satz einzelne
              Schlüsselwörter zu isolieren.
            </div>
          </div>
        </div>
        <div class="document">
          <a
            class="document__link"
            href="/documents/so2-Vertiefung-Gebaerdensprache.pdf"
            target="_blank"
            >Vertiefung: Gebärdensprache – Kursblock 2:
          </a>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section__subsection">
        <h2>
          ...wenn wir etwas am Baby tun
          <span class="video-name">(Video&nbsp;2.3)</span>
        </h2>
        <VideoVue :video="$root.videos.so2AmBabyTun" />
        <h3>Das wichtigste in Kürze:</h3>
        <div class="checklist">
          <div class="checklist__item">
            <div class="checklist__text">
              Wenn wir Situationen wie wickeln oder anziehen als eine schöne
              Zeit der Zweisamkeit und Interaktion ansehen, können sie zu
              wertvollen Alltagsmomenten werden.
            </div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">
              Wenn wir etwas am Baby tun (z.B. wickeln, baden, in den Autositz
              einbinden), ist es wichtig, das Baby nicht wie ein Objekt (etwa
              eine Puppe) zu behandeln, sondern mit ihm als Subjekt in eine
              Interaktion zu treten.
            </div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">
              In dem wir vor unserer Handlung <em>Kontakt herstellen</em>,
              unsere <em>Vorhaben ankünden</em> und während dem Vorhaben die
              <em>Handlung kommentieren,</em> treten wir in eine Interaktion mit
              dem Baby. Wenn wir seine Reaktionen abwarten, können wir ihm die
              Möglichkeit geben, mitzuarbeiten. (&rarr;&nbsp;Strategiekarte)
            </div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">
              <em>Wenn das Baby sich wehrt und nicht kooperiert,</em> können wir
              uns fragen, wie die Sicht des Babys aussieht und ob das Baby
              möglicherweise schon zu viel kooperiert hat.
              (&rarr;&nbsp;Strategiekarte)
            </div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">
              Wenn sich das Baby wehrt, können wir versuchen, das Vorhaben
              spielerischer umzusetzen, nach Alternativen zu suchen oder wenn es
              nicht anders geht, das Baby abzulenken oder, wenn nichts anderes
              hilft, dich mit so wenig Kraft wie nötig durchzusetzen.
            </div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">
              Spielerische Aktivitäten (z.B. nichtdirektive kindzentrierte
              Spiele oder Machtumkehrspiele) in entspannten Situationen helfen,
              das <em>Autonomiebedürfnis</em> des Babys zu nähren, damit es in
              Situationen, in denen wir etwas an ihm tun, weniger danach streben
              muss.
            </div>
          </div>
        </div>
        <div class="document">
          <a
            class="document__link"
            href="/documents/so2-Strategiekarte-Wenn-wir-etwas-am-Baby-tun.pdf"
            target="_blank"
            >Strategiekarte: ...wenn wir etwas am Baby tun – Kursblock 2</a
          >
        </div>
        <div class="document">
          <a
            class="document__link"
            href="/documents/so2-Strategiekarte-Wenn-das-Baby-nicht-kooperiert.pdf"
            target="_blank"
            >Strategiekarte: ...wenn das Baby nicht kooperiert – Kursblock 2</a
          >
        </div>
      </div>
    </section>
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
import Section27 from "./Section-2-7.vue";
import VideoVue from "./VideoVue.vue";
export default {
  components: { Document, Section27, VideoVue },
  props: ["block"],
};
</script>

<style scoped></style>
