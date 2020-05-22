<template>
  <div>
    <section class="section">
      <div class="section__subsection">
        <div class="block__supertitle">Kursblock&nbsp;5</div>
        <h1 class="block__title">Zurückhaltung üben...</h1>
        <p>Noch keine Inhalte verfügbar.</p>
      </div>
      <div class="buttons">
        <RouteVue :info="course.routes.block04" />
      </div>
    </section>
  </div>
</template>

<script>
import RouteVue from "./RouteVue.vue";
export default {
  components: { RouteVue },
  props: ["course"],
};
</script>

<style scoped></style>
