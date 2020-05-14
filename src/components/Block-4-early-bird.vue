<template>
  <div>
    <section class="section">
      <div class="section__subsection">
        <div class="block__supertitle">Kursblock&nbsp;4</div>
        <h1 class="block__title">Auf mich selbst achten...</h1>
        <p>Noch keine Inhalte verfügbar.</p>
      </div>
      <div class="buttons">
        <ButtonVue :info="$root.buttons.cta08Secondary" />
        <ButtonVue :info="$root.buttons.cta10Secondary" />
      </div>
    </section>
  </div>
</template>

<script>
import ButtonVue from "./ButtonVue.vue";
export default { components: { ButtonVue } };
</script>

<style scoped></style>
