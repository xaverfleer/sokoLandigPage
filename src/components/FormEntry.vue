<template>
  <div :class="formEntryClasses">
    <label class="form-entry__label" :for="options.inputId">{{
      options.label
    }}</label>
    <input
      class="form-entry__input"
      :type="options.type"
      :name="options.name"
      :id="options.inputId"
      required
    />
  </div>
</template>

<script>
export default {
  computed: {
    formEntryClasses() {
      return [
        "form-entry",
        "form-entry--" + (this.options.fullWidth ? "fullwidth" : "halfwidth"),
        this.options.type === "password" ? "form-entry--password" : "",
      ];
    },
  },
  props: ["options"],
};
</script>
