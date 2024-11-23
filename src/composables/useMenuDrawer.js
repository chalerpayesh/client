import { ref } from "vue";

const state = ref({
  status: true,
});

export const useMenuDrawer = () => {
  const toggle = () => {
    state.value.status = !state.value.status;
  };

  return {
    state,
    toggle,
  };
};
