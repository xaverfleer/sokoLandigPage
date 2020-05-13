<template>
  <div>
    <Section-3-1 :block="block" />
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
export default {
  props: ["block"],
  components: { Button, Section31 },
};
</script>

<style scoped></style>
