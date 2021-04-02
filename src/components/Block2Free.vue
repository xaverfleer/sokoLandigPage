<template>
  <div>
    <SectionVue :section="appData.course.block02.sections.section21" />
    <section class="section--no-background">
      <p>Bitte buche den Kurs, um alle Inhalte zu sehen.</p>
      <div class="buttons">
        <RouteVue :info="appData.course.routes.block01" />
        <ButtonVue :info="appData.buttons.cta05Primary" />
      </div>
    </section>
  </div>
</template>

<script>
import ButtonVue from "./ButtonVue.vue";
import RouteVue from "~/components/RouteVue";
import SectionVue from "~/components/SectionVue";
import appData from "~/data/appData";

export default {
  components: { ButtonVue, RouteVue, SectionVue },
  computed: {
    appData() {
      return appData;
    },
  },
};
</script>
