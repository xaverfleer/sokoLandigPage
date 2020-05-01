import Vue from "vue/dist/vue.esm";
import appData from "./appData";
import Block1 from "./components/Block-1.vue";

// eslint-disable-next-line no-new
new Vue({
  template: `
  <main>
    <Block1 :appData="appData"/>
    <div class="hidden-by-default section--kurs02">
    <section class="section">
      <div class="section__subsection">
        <div class="block__supertitle">Kursblock&nbsp;2</div>
        <h1 class="block__title">Mit dem Baby interagieren...</h1>
        <p>In diesem Kursblock…</p>
        <div class="checklist">
          <div class="checklist__item">
            <div class="checklist__text">…verbindest du dich mit deinem Baby, in dem du in drei Einstiegsübungen
              seine Perspektive einnimmst&nbsp;(Video&nbsp;2.1)</div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">…lernst du die Objekt- die Geräusch- und die Gebärdensprache als
              Ergänzung zur gesprochenen Sprache kennen&nbsp;(Video&nbsp;2.2)</div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">…erfährst du, wie du subjektorientiert mit dem Baby interagieren
              kannst, wenn du etwas an deinem Baby tust, z.B. wickeln&nbsp;(Video&nbsp;2.3)</div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">…zeigen wir dir, wie du subjektorientiert mit dem Baby interagieren
              kannst, wenn du etwas neben deinem Baby tust&nbsp;(Video&nbsp;2.4)</div>
          </div>
          <div class="checklist__item">
            <div class="checklist__text">…zeigen wir auf, wie du subjektorientiert mit dem Baby interagieren
              kannst, wenn du das Baby verlässt&nbsp;(Video&nbsp;2.5)</div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section__subsection">
        <p>Bitte melde dich an, um alle Inhalte dieses Kurses zu sehen.</p>
      </div>
      <div class="buttons">
        <a class="button button--primary cta05" href="index.html#prizing" title="Jetzt buchen">Jetzt buchen</a>
      </div>
    </section>
  </div>
  <div class="hidden-by-default section--kurs03">
    <section class="section">
      <div class="section__subsection">
        <div class="block__supertitle">Kursblock&nbsp;3</div>
        <h1 class="block__title">Das Baby verstehen...</h1>
        <p>Bitte melde dich an, um alle Inhalte dieses Kurses zu sehen.</p>
        <div class="buttons">
          <a class="button button--primary cta05" href="index.html#prizing" title="Jetzt buchen">Jetzt buchen</a>
        </div>
      </div>
    </section>
  </div>
  <div class="hidden-by-default section--kurs04">
    <section class="section">
      <div class="section__subsection">
        <div class="block__supertitle">Kursblock&nbsp;4</div>
        <h1 class="block__title">Auf mich selbst achten...</h1>
        <p>Bitte melde dich an, um alle Inhalte dieses Kurses zu sehen.</p>
        <div class="buttons">
          <a class="button button--primary cta05" href="index.html#prizing" title="Jetzt buchen">Jetzt buchen</a>
        </div>
      </div>
    </section>
  </div>
  <div class="hidden-by-default section--kurs05">
    <section class="section">
      <div class="section__subsection">
        <div class="block__supertitle">Kursblock&nbsp;5</div>
        <h1 class="block__title">Zurückhaltung üben...</h1>
        <p>Bitte melde dich an, um alle Inhalte dieses Kurses zu sehen.</p>
        <div class="buttons">
          <a class="button button--primary cta05" href="index.html#prizing" title="Jetzt buchen">Jetzt buchen</a>
        </div>
      </div>
    </section>
  </div>
  </main>`,
  el: "#app",
  data: { appData },
  components: {
    Block1,
  },
});
