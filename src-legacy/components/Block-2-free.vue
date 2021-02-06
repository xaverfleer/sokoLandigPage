<template>
  <div>
    <section class="section">
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
            …zeigen wir dir, wie du subjektorientiert mit dem Baby interagieren
            kannst, wenn du etwas neben deinem Baby tust&nbsp;(Video&nbsp;2.4)
          </div>
        </div>
        <div class="checklist__item">
          <div class="checklist__text">
            …zeigen wir auf, wie du subjektorientiert mit dem Baby interagieren
            kannst, wenn du das Baby verlässt&nbsp;(Video&nbsp;2.5)
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <p>Bitte buche den Kurs, um alle Inhalte zu sehen.</p>
      <div class="buttons">
        <ButtonVue :info="$root.buttons.cta05Primary" />
      </div>
    </section>
  </div>
</template>

<script>
import ButtonVue from "./ButtonVue.vue";
export default { components: { ButtonVue } };
</script>
