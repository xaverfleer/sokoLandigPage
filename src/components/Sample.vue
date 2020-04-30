<template>
  <div>
    a
    <div class="example">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "Sample",
  data() {
    return {
      msg: "Hello world!",
    };
  },
};
</script>

<style scoped>
.example {
  color: red;
}
</style>
