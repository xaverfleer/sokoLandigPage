<template>
  <div>
    <SectionVue
      v-for="section in appData.course.block03.sections"
      :section="section"
      :key="section.id"
    />
    <div class="buttons">
      <RouteVue
        :info="
          state.isEarlyBird
            ? kursToEarlyBird(appData.course.routes.block02)
            : appData.course.routes.block02
        "
      />
      <RouteVue
        :info="
          state.isEarlyBird
            ? kursToEarlyBird(appData.course.routes.block04)
            : appData.course.routes.block04
        "
      />
    </div>
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
