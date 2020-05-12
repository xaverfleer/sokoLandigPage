<template>
  <div>
    <section class="section">
      <div class="section__subsection">
        <div class="block__supertitle">Kursblock&nbsp;4</div>
        <h1 class="block__title">Auf mich selbst achten...</h1>
        <p>Noch keine Inhalte verfügbar.</p>
      </div>
      <div class="buttons">
        <Button :info="appData.buttons.cta08Secondary" />
        <Button :info="appData.buttons.cta10Secondary" />
      </div>
    </section>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  props: ["appData"],
  components: { Button },
};
</script>

<style scoped></style>
