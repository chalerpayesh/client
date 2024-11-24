<template>
  <div class="row items-center justify-center">
    <q-pagination
      v-bind="paginationProps"
      :max="totalPages"
      icon-first="keyboard_double_arrow_left"
      icon-last="keyboard_double_arrow_right"
      icon-prev="chevron_left"
      icon-next="chevron_right"
      gutter="sm"
      @update:model-value="handlePageChange"
      boundary-numbers
      active-design="elevated"
      active-color="primary"
      active-text-color="dark"
      size="16px"
    />
  </div>
</template>

<script setup>
  import { computed, defineProps, defineEmits } from "vue";

  const props = defineProps({
    currentPage: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
    totalItems: {
      type: Number,
      required: true,
    },
  });

  const emit = defineEmits(["update:model-value"]);

  const totalPages = computed(() =>
    Math.ceil(props.totalItems / props.itemsPerPage)
  );

  const paginationProps = computed(() => ({
    modelValue: props.currentPage,
    "onUpdate:modelValue": handlePageChange,
  }));

  const handlePageChange = (newPage) => {
    emit("update:model-value", newPage);
  };
</script>

<style scoped></style>
