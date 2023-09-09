<template>
  <q-dialog v-model="model" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Add Post</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="q-pa-md" style="max-width: 400px">
          <q-form class="q-gutter-md">
            <q-input
              filled
              v-model="addTitle"
              label="Title"
              hint="Name and surname"
            />

            <q-input filled type="text" v-model="addAuther" label="Auther" />
            <p v-if="error">invalid Input</p>
            <div>
              <q-btn label="Add Post" color="black" @click="addPost" />
              <q-btn
                label="Reset"
                type="reset"
                color="black"
                flat
                class="q-ml-sm"
                v-close-popup
              />
            </div>
          </q-form>
        </div>
      </q-card-section>

      <!-- <q-card-actions align="right" class="text-black">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn flat label="Add address" v-close-popup />
      </q-card-actions> -->
    </q-card>
  </q-dialog>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import axios from "axios";
import { usePostStore } from "../stores/post/index.js";
export default {
  name: "AddPost",
  setup(props, { emit }) {
    const $q = useQuasar();
    const addPostData = ref({});
    const addTitle = ref("");
    const addAuther = ref("");
    const error = ref(false);
    const postStore = usePostStore();
    // function addPost() {
    //   if (addTitle.value === "" || addAuther.value === "") {
    //     error.value = true;
    //   } else {
    //     addPostData.value = {
    //       title: addTitle.value,
    //       auther: addAuther.value,
    //     };
    //     axios.post("http://localhost:3000/posts", addPostData.value);
    //     console.log(addPostData.value);
    //     emit("showAdd");
    //     showNotif("right");
    //   }
    // }
    async function addPost() {
      if (addTitle.value === "" || addAuther.value === "") {
        error.value = true;
      } else {
        addPostData.value = {
          title: addTitle.value,
          auther: addAuther.value,
        };
        await postStore.viewAddPost(addPostData.value);
        console.log(addPostData.value);
        emit("showAdd");
        showNotif("right");
      }
    }
    // function resetAdd() {
    //   emit("showAdd");
    // }
    function showNotif(position) {
      $q.notify({
        message: "Added Successfully",
        caption: "1 minutes ago",
        color: "secondary",
        position,
      });
    }
    return {
      showNotif,
      addPost,
      addTitle,
      addAuther,
      addPostData,
      error,
      // resetAdd,
    };
  },
  emits: ["showAdd"],
};
</script>

<style lang="scss" scoped></style>
