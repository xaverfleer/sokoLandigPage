<template>
  <div>
    <p v-html="checklist.pretext">checklist.pretext</p>
    <div class="checklist">
      <ChecklistEntry
        v-for="entry in checklist.entries"
        :key="entry.id"
        :entry="entry"
      />
    </div>
  </div>
</template>

<script>
import ChecklistEntry from "./ChecklistEntry.vue";

export default {
  props: ["checklist"],
  components: { ChecklistEntry },
};
</script>
