<template>
  <div class="value-proposition">
    <div
      class="value-proposition__entry"
      v-for="card of cards"
      :key="card.title"
    >
      <div class="value-proposition__titie">{{ card.title }}</div>
      <div class="value-proposition__description">{{ card.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cards"],
};
</script>
