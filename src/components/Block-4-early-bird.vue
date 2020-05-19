<template>
  <div>
    <section class="section">
      <div class="section__subsection">
        <div class="block__supertitle">Kursblock&nbsp;4</div>
        <h1 class="block__title">Auf mich selbst achten...</h1>
        <p>Noch keine Inhalte verfügbar.</p>
      </div>
      <div class="buttons">
        <RouteVue :info="$root.appData.routes.block03" />
        <RouteVue :info="$root.appData.routes.block05" />
      </div>
    </section>
  </div>
</template>

<script>
import RouteVue from "./RouteVue.vue";
export default { components: { RouteVue } };
</script>

<style scoped></style>
