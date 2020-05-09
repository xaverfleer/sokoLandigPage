<template>
  <div class="vimeo-video__container">
    <iframe
      class="vimeo-video__iframe"
      :src="video.ref"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ["video"],
};
</script>

<style scoped></style>
