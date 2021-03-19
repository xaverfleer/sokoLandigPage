<template>
  <div class="currency-selector">
    Preise in
    <span class="currency-selector__buttons-wrapper"
      ><button @click="setCurrency" :class="chfClasses" data-currency="CHF">
        CHF</button
      ><button @click="setCurrency" :class="eurClasses" data-currency="EUR">
        €
      </button></span
    >
  </div>
</template>

<script>
import stateM8t from "~/stateManagement";

export default {
  computed: {
    chfClasses() {
      return `currency-selector__button ${this.currency === "CHF" &&
        "currency-selector__button--active"}`;
    },
    eurClasses() {
      return `currency-selector__button ${this.currency === "EUR" &&
        "currency-selector__button--active"}`;
    },
  },
  methods: {
    setCurrency(event) {
      stateM8t.setCurrency(event.target.getAttribute("data-currency"));
    },
  },
  props: ["currency"],
};
</script>
