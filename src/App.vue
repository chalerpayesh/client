<template>
  <router-view />
</template>

<script setup>
import { useQuasar } from "quasar";
import { onMounted } from "vue";

const $q = useQuasar();

onMounted(() => {
  $q.dark.set(true);
});
</script>
