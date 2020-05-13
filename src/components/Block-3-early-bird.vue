<template>
  <div>
    <Section-3-1 :block="$root.appData.block03" />
    <section class="section ">
      <div class="buttons">
        <Button :info="appData.buttons.cta06Secondary" />
        <Button :info="appData.buttons.cta09Secondary" />
      </div>
    </section>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Section31 from "./Section-3-1.vue";
export default {
  props: ["appData"],
  components: { Button, Section31 },
};
</script>

<style scoped></style>
