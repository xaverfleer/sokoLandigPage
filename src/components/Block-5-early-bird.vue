<template>
  <div>
    <section class="section">
      <div class="section__subsection">
        <div class="block__supertitle">Kursblock&nbsp;5</div>
        <h1 class="block__title">Zurückhaltung üben...</h1>
        <p>Noch keine Inhalte verfügbar.</p>
      </div>
      <div class="buttons">
        <ButtonVue :info="$root.buttons.cta09Secondary" />
      </div>
    </section>
  </div>
</template>

<script>
import ButtonVue from "./ButtonVue.vue";
export default { components: { ButtonVue } };
</script>

<style scoped></style>
