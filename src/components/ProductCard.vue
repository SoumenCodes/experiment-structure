<template>
  <q-btn flat round icon="event" label="button" @click="$emit('soumen')" />
  <div v-for="item in cardData" :key="item.id">
    <q-card class="my-card" flat bordered style="width: 300px">
      <q-img style="width: 150px" :src="item.image" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%)"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">{{ item.title }}</div>
          <div
            class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
          >
            <q-icon name="place" />
            250 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">{{ item.category }}</div>
        <div class="text-caption text-grey">
          {{ item.description }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary"> Reserve </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
// import { toRef } from "vue";
export default {
  name: "ProductCard",
  props: {
    cardData: {
      type: Array,
      required: true,
    },
  },
  setup() {
    // function increment() {
    //   emit("soumen");
    // }
    return {};
  },
  // emits: ["soumen"],
};
</script>

<style lang="scss" scoped></style>
