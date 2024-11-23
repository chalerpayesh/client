import { ref } from "vue";

export function useFormState() {
  const model = ref({
    region: null,
    camera: null,
    service: null,
    fromDate: null,
    toDate: null,
  });

  const option = ref({
    region: ["شمال شرق", "جنوب غرب", "مرکز", "غرب"],
    camera: ["دوربین شماره 1", "دوربین شماره 2", "دوربین شماره 3"],
    service: ["تشخیص انسان", "آنومالی", "نظارت"],
  });

  const clearForm = () => {
    model.value = {
      region: null,
      camera: null,
      service: null,
      fromDate: null,
      toDate: null,
    };
  };

  const clearChip = (key) => {
    model.value[key] = null;
  };

  return { model, option, clearForm, clearChip };
}
