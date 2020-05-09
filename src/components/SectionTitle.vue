<template>
  <h2>
    {{ sectionTitle.main }}
    <span class="video-name">{{ sectionTitle.videoName }}</span>
  </h2>
</template>

<script>
export default {
  props: ["sectionTitle"],
};
</script>

<style scoped></style>
