<template>
  <div class="forum-entry">
    <div class="forum-entry__content">{{ entry.text }}</div>
    <div class="forum-entry__author-and-date">
      {{ entry.author }}, {{ entry.timestamp }}
    </div>
    <button @click="respond" class="forum-entry__respond">Antworten</button>
  </div>
</template>

<script>
export default {
  methods: {
    respond() {
      alert("Diese Feature existiert leider noch nicht");
    },
  },
  props: ["entry"],
};
</script>
