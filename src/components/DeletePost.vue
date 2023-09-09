<template>
  <q-dialog v-model="model" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="signal_wifi_off" color="black" text-color="white" />
        <span class="q-ml-sm"
          >Confirm You want to delete it from the Network</span
        >
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="black" v-close-popup />
        <q-btn
          color="black"
          label="Yes, Delete"
          v-close-popup
          @click="deletePost"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useQuasar } from "quasar";
import axios from "axios";
import { usePostStore } from "../stores/post/index.js";
export default {
  name: "DeletePost",
  props: {
    deleteProps: {
      type: Number,
    },
  },
  setup(props, { emit }) {
    const $q = useQuasar();
    const postStore = usePostStore();
    // function deletePost() {
    //   console.log(props.deleteProps);
    //   axios.delete(`http://localhost:3000/posts/${props.deleteProps}`);
    //   emit("showdeletePost");
    //   showNotif("right");
    // }
    async function deletePost() {
      console.log(props.deleteProps);
      await postStore.viewDeletePost(props.deleteProps);
      emit("showdeletePost");
      showNotif("right");
    }
    function showNotif(position) {
      $q.notify({
        message: "Deleted Successfully",
        caption: "1 minutes ago",
        color: "secondary",
        position,
      });
    }
    return {
      deletePost,
      showNotif,
    };
  },
  emits: ["showdeletePost"],
};
</script>

<style lang="scss" scoped></style>
