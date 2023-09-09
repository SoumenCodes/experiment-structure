<template>
  <div class="text-h3 text-center q-ma-lg">Product table</div>
  <div>
    <DropDown :selected="arr" /> 
    <q-table
      flat
      bordered
      title="Products"
      :rows="rows"
      :columns="columns"
      row-key="id"
      selection="multiple"
      v-model:selected="arr"
      :key="new Date()"
    />
 
  </div>

  <!-- <div class="q-mt-md">Selected: {{ JSON.stringify(arr) }}</div> -->
  <q-btn
    push
    color="black"
    text-color="white"
    label="Convert to Card"
    @click="showCard"
  >
    <q-badge color="red" floating>{{ arr.length }}</q-badge>
  </q-btn>
  <!-- <pre>{{ arr }}</pre> -->
  <h3>{{ value }}</h3>
  <div class="q-pa-md row items-start q-gutter-md">
    <ProductCard v-if="show" :cardData="arr" @soumen="add" />
  </div>
</template>

<script>
import DropDown from 'src/components/Dropdown/DropDown.vue';
import ProductCard from "src/components/ProductCard.vue";
import axios from "axios";
import { ref } from "vue";
export default {
  name: "ProductTable",
  components: {
    ProductCard,
    DropDown
    
    
  },
  setup() {
    const value = ref(0);
    const arr = ref([]);
    const rows = ref([]);
    const show = ref(false);

    async function getProduct() {
      try {
        const products = await axios.get("https://fakestoreapi.com/products");
        console.log("console product");
        console.log(products);
        rows.value = products.data;
      } catch (error) {
        console.log(error);
      }
    }
    function showCard() {
      show.value = true;
    }
    function add() {
      value.value++;
    }
    getProduct();
    const columns = [
      {
        name: "id",
        required: true,
        label: "ID",
        align: "left",
        field: "id",
        // format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "title",
        align: "center",
        label: "TiTle",
        field: "title",
        sortable: true,
      },
      {
        name: "price",
        align: "center",
        label: "Price",
        field: "price",
        sortable: true,
      },
      {
        name: "description",
        align: "center",
        label: "Dec",
        field: "description",
        sortable: true,
      },
      {
        name: "category",
        align: "center",
        label: "Cat",
        field: "category",
        sortable: true,
      },
      {
        name: "image",
        align: "center",
        label: "Img",
        field: "image",
        sortable: true,
      },
      {
        name: "rating",
        align: "center",
        label: "Rate",
        field: (row) => row.rating.rate,
        sortable: true,
      },
    ];
    return {
      arr,
      columns,
      rows,
      showCard,
      show,
      value,
      add,
    };
  },
};
</script>

<style lang="scss" scoped></style>
