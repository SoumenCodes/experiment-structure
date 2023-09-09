<template>
  Hi {{ model }}
  <q-dialog v-model="model" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Edit Box</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="q-pa-md" style="max-width: 400px">
          <q-form class="q-gutter-md">
            <q-input
              filled
              v-model="name"
              label="Title"
              hint="Name and surname"
            />

            <q-input filled type="text" v-model="auther" label="Auther" />

            <div>
              <q-btn label="Submit" color="black" @click="submit" />
              <q-btn flat label="Cancel" color="black" v-close-popup />
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
import axios from "axios";
import { computed, ref } from "vue";
import { useQuasar } from "quasar";
import { usePostStore } from "../stores/post/index.js";
export default {
  name: "EditPost",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    editData: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    const $q = useQuasar();
    const model = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        emit("update:modelValue", val);
      },
    });
    console.log(props.editData);
    // const rowName = computed({
    //   get() {
    //     return props.editData;
    //   },
    //   set(val) {
    //     emit("update:editData", val);
    //   },
    // });
    const name = ref(props.editData.title);
    const auther = ref(props.editData.auther);
    const storepost = ref({});
    const postStore = usePostStore();
    function showNotif(position) {
      $q.notify({
        message: "Edited Successfully",
        icon: "announcement",
        caption: "1 minutes ago",
        color: "black",
        position,
      });
    }
    // function submit() {
    //   // model.value = false;
    //   // console.log(model.value);
    //   storepost = {
    //     // id: props.editData.id,
    //     title: name.value,
    //     auther: auther.value,
    //   };
    //   axios.put(`http://localhost:3000/posts/${props.editData.id}`, storepost);
    //   console.log(name.value);
    //   console.log(auther.value);
    //   console.log(props.editData.id);
    //   emit("showPost");
    //   // window.location.reload();
    //   showNotif("right");
    // }
    async function submit() {
      // model.value = false;
      // console.log(model.value);
      storepost.value = {
        // id: props.editData.id,
        title: name.value,
        auther: auther.value,
      };
      // axios.put(`http://localhost:3000/posts/${props.editData.id}`, storepost);
      await postStore.viewEditPost(props.editData.id, storepost);
      console.log(name.value);
      console.log(auther.value);
      console.log(props.editData.id);
      emit("showPost");
      // window.location.reload();
      showNotif("right");
    }
    return {
      model,
      auther,
      name,
      submit,
      //   UpdateValue,
      storepost,
      showNotif,
    };
  },
  emits: ["showPost"],
};
</script>

<style lang="scss" scoped></style>
