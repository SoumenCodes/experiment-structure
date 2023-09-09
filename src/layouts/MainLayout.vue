<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    <q-page class="flex flex-center">
      <q-btn label="Toggle Dark Mode" @click="toggleDarkMode" />
    </q-page>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>
        <q-list class="text-h5 text-bold">
          <q-item clickable v-ripple to="/product">
            <q-item-section avatar>
              <q-icon name="production_quantity_limits" />
            </q-item-section>

            <q-item-section class="">Product</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/counter">
            <q-item-section avatar>
              <q-icon name="token" />
            </q-item-section>

            <q-item-section>Counter</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/post">
            <q-item-section avatar>
              <q-icon name="compost" />
            </q-item-section>
            <q-item-section class="">Post</q-item-section>
          </q-item>

          <q-item v-if="store.isAuth" clickable v-ripple @click="logout">
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>
            <q-item-section class="">LogOut</q-item-section>
          </q-item>
        </q-list>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { registerStore } from "../stores/auth/index.js";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Register",
    caption: "quasar.dev",
    icon: "school",
    link: "/register",
  },
  {
    title: "Product",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "/product",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: { EssentialLink },

  setup() {
    const leftDrawerOpen = ref(false);
    const store = registerStore();

    function logout() {
      store.logout();
    }

    return {
      // essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      store,
      logout,
      linksList,
    };
  },
});
</script>
