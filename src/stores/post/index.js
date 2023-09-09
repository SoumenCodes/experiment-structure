import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const usePostStore = defineStore("postStore", () => {
  const post = ref([]);
  const age = ref(16);

  async function viewPost() {
    try {
      const postData = await axios.get("http://localhost:3000/posts");
      post.value = postData.data;
    } catch (error) {
      console.log(error);
    }
  }
  function viewDeletePost(id) {
    console.log(id);
    axios.delete(`http://localhost:3000/posts/${id}`);
  }
  function viewEditPost(id, storepost) {
    axios.put(`http://localhost:3000/posts/${id}`, storepost);
    console.log(storepost);
    console.log(id);
  }
  function viewAddPost(addPostDataValue) {
    axios.post("http://localhost:3000/posts", addPostDataValue);
    console.log(addPostDataValue);
  }
  return {
    viewPost,
    viewDeletePost,
    viewEditPost,
    viewAddPost,
    post,
    age,
  };
});
