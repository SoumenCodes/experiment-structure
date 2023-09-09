<template>
  <h2 class="text-center text-bold">Register</h2>
  <div class="q-pa-md center" style="max-width: 400px">
    <q-form class="q-gutter-md">
      <q-input
        filled
        v-model="registerData.name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        type="email"
        v-model="registerData.email"
        label="Email Id *"
        hint="Mail ID"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        type="password"
        v-model="registerData.password"
        label="Password *"
        hint="Choose a Password"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->

      <div>
        <q-btn label="Register" color="primary" @click="submit" />
        <q-btn label="LogIN" color="black" class="q-ml-sm" to="login" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";
import { registerStore } from "../stores/auth/index.js";
export default {
  name: "RegisterPage",
  setup() {
    const registerData = ref({});
    // const name = ref("");
    // const password = ref("");
    // const email = ref("");
    const register = registerStore();

    async function submit() {
      if (
        registerData.value.name.value === "" ||
        registerData.value.email.value === "" ||
        registerData.value.password.value === ""
      ) {
      } else {
        await register.saveRegister(registerData.value);
        console.log(registerData.value);
        // name.value = "";
        // email.value = "";
        // password.value = "";
        console.log(registerData.value);
      }
    }

    return {
      submit,

      registerData,
    };
  },
};
</script>

<style lang="scss" scoped>
.center {
  margin: auto;
  width: 50%;
}
</style>
