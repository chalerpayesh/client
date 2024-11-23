<template>
  <q-header bordered class="bg-dark" unelevated>
    <q-toolbar class="q-py-sm">
      <q-btn
        @click="store.toggle"
        flat
        round
        dense
        icon="menu"
        class="q-mr-sm"
      />
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
      </q-avatar>

      <q-toolbar-title class="text-weight-500">بینا</q-toolbar-title>

      <lang-switcher />
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { useMenuDrawer } from "src/composables/useMenuDrawer.js";
import LangSwitcher from "src/components/shared/LanguageSwitcher.vue";

const store = useMenuDrawer();
</script>
