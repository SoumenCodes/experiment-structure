<template>
  <div>
    <h1>Step B</h1>
    <p>Name: {{ name }}</p>
    <input type="text" v-model="name" />
  </div>
</template>
<script>
export default {
  setup() {
    const name = "";
    return { name };
  },
};
</script>
