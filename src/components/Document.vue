<template>
  <div class="document">
    <a class="document__link" :href="document.href" target="_blank">
      {{ document.text }}</a
    >
  </div>
</template>

<script>
export default {
  props: ["document"],
};
</script>

<style scoped></style>
