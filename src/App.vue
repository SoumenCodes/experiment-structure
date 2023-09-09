<template>
  <!-- <div class="center"> 
  <h1>vue</h1>

  <StepA v-if="btnValue === 'StepA'" />
      <StepB v-if="btnValue === 'StepB'" />
  <keep-alive>
      <component :is="btnValue"></component>
    </keep-alive>

  <button @click="stepA">Step One</button>
    <button @click="stepB">Step two</button> -->
  <router-view />
  <!-- </div> -->
</template>

<script>
// import { ref } from "vue";
// import { defineComponent } from "vue";
// import StepA from "./components/StepA.vue";
// import StepB from "./components/StepB.vue";

export default {
  // components: {
  //   StepA,
  //   StepB,
  // },
  // setup() {
  //   const btnValue = ref("StepA");

  //   function stepB() {
  //     btnValue.value = "StepB";
  //     console.log(btnValue.value);
  //   }
  //   function stepA() {
  //     btnValue.value = "StepA";
  //     console.log(btnValue.value);
  //   }
  //   return {
  //     btnValue,
  //     stepB,
  //     stepA,
  //   };
  // },
  name: "App",
};
</script>
<style lang="scss" scoped>
.center {
  margin: auto;
  width: 50%;
}
</style>
