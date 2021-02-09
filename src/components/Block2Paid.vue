<template>
  <div>
    <SectionVue
      v-for="section in appData.course.block02.sections"
      :section="section"
      :key="section.id"
    />
    <section class="section">
      <p>Bitte buche den Kurs, um alle Inhalte zu sehen.</p>
      <div class="buttons">
        <RouteVue
          :info="
            state.isEarlyBird
              ? kursToEarlyBird(appData.course.routes.block01)
              : appData.course.routes.block01
          "
        />
        <RouteVue
          :info="
            state.isEarlyBird
              ? kursToEarlyBird(appData.course.routes.block03)
              : appData.course.routes.block03
          "
        />
      </div>
    </section>
  </div>
</template>

<script>
import ButtonVue from "./ButtonVue.vue";
import RouteVue from "~/components/RouteVue.vue";
import SectionVue from "~/components/SectionVue.vue";

import appData from "~/data/appData";
export default {
  components: { ButtonVue, RouteVue, SectionVue },
  computed: {
    appData() {
      return appData;
    },
  },
  methods: {
    kursToEarlyBird(kursRoute) {
      return {
        ...kursRoute,
        to: kursRoute.to.split("/kurs/").join("/early-bird/"),
      };
    },
  },
  props: ["state"],
};
</script>
