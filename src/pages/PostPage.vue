<template>
  <div class="text-h3 text-center">Post</div>
  <div>
    <div class="q-pa-md">
      <q-table
        title="Post By Json"
        :rows="jdata"
        :columns="columns"
        row-key="name"
      />
    </div>
  </div>

  <div class="q-pa-md">
    <q-btn
      icon-right="add"
      outline
      style="color: rgb(5, 22, 54)"
      label="Add"
      size="1rem"
      @click="addData"
    />
    <q-table
      title="Post By Api"
      :rows="postStore.post"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body-cell-action="props">
        <!-- <td :props="props"> -->
        <q-btn color="black" label="Edit" @click="editData(props.row.id)" />

        <q-btn
          color="red"
          icon-right="send"
          label="Delete"
          @click="deleteData(props.row.id)"
        />

        <!-- </td> -->
      </template>
    </q-table>
    <div v-if="edit">
      <EditPost v-model="edit" :editData="editRow" @showPost="reloadPost" />
    </div>
    <div v-if="deleteShow">
      <DeletePost
        v-model="deleteShow"
        :deleteProps="deleteID"
        @showdeletePost="getpost()"
      />
    </div>
    <div v-if="addShow">
      <AddPost
        v-model="addShow"
        @showAdd="
          addShow = false;
          getpost();
        "
      />
    </div>
  </div>
  {{ postStore.age }}

  <!-- <div class="q-pa-md">
    <q-btn color="pink" @click="showNotif" label="Show with caption" />
  </div> -->
</template>

<script>
import { usePostStore } from "../stores/post/index.js";
import axios from "axios";
import jsonData from "../../db.json";
import { ref } from "vue";
import EditPost from "src/components/EditPost.vue";
import DeletePost from "src/components/DeletePost.vue";
import AddPost from "src/components/AddPost.vue";

// import { useQuasar } from "quasar";

const columns = [
  {
    name: "id",
    required: true,
    label: "ID Number",
    align: "left",
    field: "id",
    // format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "title",
    align: "center",
    label: "Title",
    field: "title",
    sortable: true,
  },
  { name: "auther", label: "Auther", field: "auther", sortable: true },
  {
    name: "action",
    align: "center",
    label: "Action",
    field: "action",
  },
];
export default {
  name: "PostPage",

  components: {
    EditPost,
    DeletePost,
    AddPost,
  },
  setup() {
    // const $q = useQuasar();
    const jdata = jsonData.posts;
    const postRow = ref([]);
    const row = ref([]);
    const editRow = ref([]);

    const deleteID = ref(null);

    const edit = ref(false);
    const deleteShow = ref(false);
    const addShow = ref(false);
    const postStore = usePostStore();
    function reloadPost() {
      edit.value = false;
      getpost();
    }
    async function getpost() {
      try {
        const postData = await postStore.viewPost();

        // row.value = postStore.post;
        console.log("postData");
        console.log(postData);
      } catch (error) {
        console.log(error);
      }
    }
    getpost();
    async function editData(id) {
      const editInfo = await axios.get("http://localhost:3000/posts/" + id);
      editRow.value = editInfo.data;
      edit.value = true;
      // emit("showPost", getpost());
      // console.log(id);
      // console.log(editRow.value);
      // console.log("editRow");
    }

    console.log("jsonData");
    console.log(jsonData);
    // _____________________________Delete SHow

    function deleteData(id) {
      deleteID.value = id;
      console.log(id, "delete id");
      deleteShow.value = true;
      console.log(deleteShow);
    }
    function addData() {
      addShow.value = true;
      console.log("add btn clicked");
    }
    // function showNotif() {
    //   $q.notify({
    //     message: "Jim pinged you.",
    //     caption: "5 minutes ago",
    //     color: "secondary",
    //   });
    // }
    return {
      getpost,
      postRow,
      row,
      columns,
      jdata,
      editData,
      edit,
      deleteShow,
      editRow,
      deleteData,
      DeletePost,
      deleteID,
      reloadPost,
      addData,
      AddPost,
      addShow,
      // showNotif,
      postStore,
    };
  },
};
</script>

<style lang="scss" scoped></style>
