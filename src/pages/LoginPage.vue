<template>
  <h2 class="text-center text-bold">Login Account</h2>
  <div class="q-pa-md center" style="max-width: 400px">
    <q-form class="q-gutter-md">
      <q-input
        filled
        type="email"
        v-model="loginData.email"
        label="Email Id *"
        hint="Mail ID"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        type="password"
        v-model="loginData.password"
        label="Password *"
        hint="Choose a Password"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->

      <div>
        <q-btn label="SignIn" color="primary" class="q-ml-sm" @click="logIn" />
        <q-btn label="Register" color="black" class="q-ml-sm" to="register" />
      </div>
    </q-form>
    {{ error }}
  </div>
</template>

<script>
import { ref } from "vue";
import { registerStore } from "src/stores/auth";
import { useRouter } from "vue-router";
import { LocalStorage } from "quasar";

export default {
  name: "loginPage",
  setup() {
    const login = registerStore();
    const loginData = ref({});
    const error = ref(null);
    const router = useRouter();
    const localvalue = LocalStorage.getItem("Auth");
    // console.log(typeof localvalue);

    async function logIn() {
      const check = await login.loginCheck(loginData.value);

      if (check) {
        router.push("/post");
        LocalStorage.set("Auth", true);
        console.log(localvalue, "localStrage");
      } else {
        error.value = "Not Matched";
        console.log(localvalue, "localStrage");
      }
      console.log(check, "check");
      // console.log("source", loginData.value);
    }
    return {
      loginData,
      logIn,
      error,
      localvalue,
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
