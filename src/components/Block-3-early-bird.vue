<template>
  <div>
    <section class="section ">
      <div class="section__subsection">
        <div class="block__supertitle">Kursblock&nbsp;3</div>
        <h1 class="block__title">Das Baby verstehen...</h1>
        <p>Noch keine Inhalte verfügbar.</p>
      </div>
      <div class="buttons">
        <Button :info="appData.buttons.cta06Secondary" />
        <Button :info="appData.buttons.cta09Secondary" />
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
