<template>
  <div>
    <SectionVue
      v-for="section in appData.course.block05.sections"
      :section="section"
      :key="section.id"
    />
    <div class="buttons">
      <RouteVue
        :info="
          state.isEarlyBird
            ? kursToEarlyBird(appData.course.routes.block04)
            : appData.course.routes.block04
        "
      />
      <RouteVue
        :info="
          state.isEarlyBird
            ? kursToEarlyBird(appData.course.routes.block06)
            : appData.course.routes.block06
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
import { kursToEarlyBird } from "~/helpers";

export default {
  components: { ButtonVue, RouteVue, SectionVue },
  computed: {
    appData() {
      return appData;
    },
  },
  methods: {
    kursToEarlyBird,
  },
  props: ["state"],
};
</script>
