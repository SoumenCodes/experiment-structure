<template>
  <div>
    <div class="q-pa-md">
      <q-table
        flat
        bordered
        title="Treats"
        :rows="data"
        :columns="columns"
        row-key="name"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectedTable",
  props: {
    data: Array,
  },
  setup() {
    const rows = [];
    // rows = props.data;
    const columns = [
      {
        name: "name",
        required: true,
        label: "Dessert (100g serving)",
        align: "left",
        field: (row) => row.name,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "calories",
        align: "center",
        label: "Calories",
        field: "calories",
        sortable: true,
      },
      { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
      { name: "carbs", label: "Carbs (g)", field: "carbs" },
      { name: "protein", label: "Protein (g)", field: "protein" },
      { name: "sodium", label: "Sodium (mg)", field: "sodium" },
      {
        name: "calcium",
        label: "Calcium (%)",
        field: "calcium",
        sortable: true,
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      },
      {
        name: "iron",
        label: "Iron (%)",
        field: "iron",
        sortable: true,
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      },
    ];
    return {
      columns,
      rows,
    };
  },
};
</script>

<style lang="scss" scoped></style>
