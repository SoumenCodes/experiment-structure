import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const registerStore = defineStore("postRegister", () => {
  const isAuth = ref(false);
  const router = useRouter();
  async function saveRegister(registerData) {
    try {
      await axios.post("http://localhost:3000/user", registerData);
      console.log(registerData);
    } catch (error) {
      console.log(error);
    }
  }
  async function loginCheck(loginData) {
    const registerData = await axios.get("http://localhost:3000/user");

    console.log("register", registerData.data);
    const regsiterInfo = registerData.data;
    const isMatch = regsiterInfo.some(
      (obj) =>
        obj.email === loginData.email && obj.password === loginData.password
    );
    if (isMatch) {
      isAuth.value = true;
    }
    return isMatch;
  }
  function logout() {
    isAuth.value = false;
    localStorage.removeItem("Auth");
    router.push("/login");
  }
  return {
    saveRegister,
    loginCheck,
    isAuth,
    logout,
  };
});
