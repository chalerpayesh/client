<template>
  <q-layout class="q-pa-xl" view="hHr LpR ffr">
    <main-header />
    <menu-drawer />


    <q-page-container>
      <router-view />
    </q-page-container>

    
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import MainHeader from "src/components/shared/MainHeader.vue";
import MenuDrawer from "src/components/shared/MenuDrawer.vue";

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
