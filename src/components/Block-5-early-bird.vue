<template>
  <div>
    <section class="section">
      <div class="section__subsection">
        <div class="block__supertitle">Kursblock&nbsp;5</div>
        <h1 class="block__title">Zurückhaltung üben...</h1>
        <p>Noch keine Inhalte verfügbar.</p>
      </div>
      <div class="buttons">
        <Button
          :info="appData.buttons.cta09Secondary"
          :updateActiveBlock="updateActiveBlock"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  props: ["appData", "updateActiveBlock"],
  components: { Button },
};
</script>

<style scoped></style>
