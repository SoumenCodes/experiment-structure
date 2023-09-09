<template>
  <div class="q-pa-md">
    <q-btn-dropdown color="black" :label="!selected.length?'disable Action': 'Action'" icon="folder"
     :disable="!selected.length">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Price</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Title</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Rate</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  props: {
    selected: {
      type: Array,
    },
  },
  setup() {
    return {
      onItemClick() {
        console.log("Clicked on Drop Btn");
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
