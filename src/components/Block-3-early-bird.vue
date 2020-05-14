<template>
  <div>
    <Section-3-1 :block="block" />
    <Section-3-2 :section="block.sections.section32" />
    <Section-3-3 :section="block.sections.section33" />
    <Section-3-4 :section="block.sections.section34" />
    <Section-3-5 :section="block.sections.section35" />
    <Section-3-6 :section="block.sections.section36" />
    <section class="section">
      <div class="buttons">
        <ButtonVue :info="$root.buttons.cta06Secondary" />
        <ButtonVue :info="$root.buttons.cta09Secondary" />
      </div>
    </section>
  </div>
</template>

<script>
import ButtonVue from "./ButtonVue.vue";
import Section31 from "./Section-3-1.vue";
import Section32 from "./Section-3-2.vue";
import Section33 from "./Section-3-3.vue";
import Section34 from "./Section-3-4.vue";
import Section35 from "./Section-3-5.vue";
import Section36 from "./Section-3-6.vue";

export default {
  props: ["block"],
  components: {
    ButtonVue,
    Section31,
    Section32,
    Section33,
    Section34,
    Section35,
    Section36,
  },
};
</script>

<style scoped></style>
