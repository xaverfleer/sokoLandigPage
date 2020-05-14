<template>
  <div>
    <Section-3-1 :block="block" />
    <Section-3-2 :section="block.sections.section32" />
    <Section-3-3 :section="block.sections.section33" />
    <section class="section ">
      <div class="buttons">
        <Button :info="$root.buttons.cta06Secondary" />
        <Button :info="$root.buttons.cta09Secondary" />
      </div>
    </section>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Section31 from "./Section-3-1.vue";
import Section32 from "./Section-3-2.vue";
import Section33 from "./Section-3-3.vue";

export default {
  props: ["block"],
  components: { Button, Section31, Section32, Section33 },
};
</script>

<style scoped></style>
