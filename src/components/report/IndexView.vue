<template>
  <toolbar :title="$t('menu-items.labels.reports')" />
  <advanced-search />
  <data-grid />
</template>

<script setup>
import Toolbar from "src/components/shared/ToolbarView.vue";
import AdvancedSearch from "src/components/shared/AdvancedSearch.vue";
import DataGrid from "src/components/report/DataGrid.vue";
</script>
