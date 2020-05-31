<template>
  <div class="checklist__item">
    <div class="checklist__text">
      {{ entry.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["entry"],
};
</script>
