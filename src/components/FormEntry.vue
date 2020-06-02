<template>
  <div :class="formEntryClasses">
    <label class="form-entry__label" :for="options.inputId">
      <abbr class="form-entry__required" title="Pflichtfeld">* </abbr
      >{{ options.label }}</label
    >
    <input
      class="form-entry__input"
      :type="options.type"
      :name="options.name"
      :id="options.inputId"
      v-model="options.value"
      required
    />
    <div class="form-entry__help">{{ options.help }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    formEntryClasses() {
      return [
        "form-entry",
        "form-entry--" + (this.options.fullWidth ? "fullwidth" : "halfwidth"),
      ];
    },
  },
  props: ["options"],
};
</script>
