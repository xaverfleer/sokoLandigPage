<template>
  <div class="document">
    <a :class="classes" :href="document.href" target="_blank">
      {{ document.text }}</a
    >
  </div>
</template>

<script>
export default {
  props: ["document"],
  computed: {
    classes() {
      return `document__link document__link--${this.document.type}`;
    },
  },
};
</script>
