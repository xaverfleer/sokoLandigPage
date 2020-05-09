<template>
  <h2>
    {{ content.main }}
    <span class="video-name">{{ content.videoName }}</span>
  </h2>
</template>

<script>
export default {
  props: ["content"],
};
</script>

<style scoped></style>
