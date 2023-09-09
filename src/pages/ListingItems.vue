<template>
  <h3 class="text-center">Listing Items</h3>
  <div class="center">
    <draggable v-model="Listing" tag="ul" item-key="cid" ghost-class="ghost">
      <template #item="{ element }">
        <button class="column q-mt-md cursor-pointer text-h5">
          {{ element }}
        </button>
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { ref } from "vue";
export default {
  components: {
    draggable,
  },
  name: "ListingItems",
  setup() {
    const Listing = ref([
      "Item abc",
      "Item table",
      "Item xyz",
      "Item rst",
      "Item box",
    ]);
    return {
      Listing,
    };
  },
};
</script>

<style lang="scss" scoped>
.center {
  margin: auto;
  width: 50%;
}
.ghost {
  background: rgb(81, 222, 81);
}
</style>
