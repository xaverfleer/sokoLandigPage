<template>
  <div :class="formEntryClasses">
    <label class="form-entry__label" :for="options.inputId">
      <abbr
        class="form-entry__required"
        title="Pflichtfeld"
        v-if="!options.optional"
        >* </abbr
      >{{ options.label }}</label
    >
    <textarea
      class="form-entry__input"
      name="comment"
      id="form__comment"
      rows="10"
      v-if="options.isTextArea"
      v-model="options.value"
    ></textarea>
    <input
      class="form-entry__input"
      :type="options.type"
      :name="options.name"
      :id="options.inputId"
      v-model="options.value"
      v-else
      :required="!options.optional"
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
