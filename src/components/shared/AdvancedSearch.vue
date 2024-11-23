<template>
  <q-card class="border-radius-lg">
    <q-card-section>
      <div class="row items-center justify-between">
        <div class="flex items-center">
          <div class="text-h6 q-pr-md">جستجوی پیشرفته</div>
          <q-chip
            v-for="(value, key) in filteredSelectedOptions"
            :key="key"
            color="primary"
            text-color="dark"
            class="text-weight-500 q-mb-xs"
            removable
            @remove="formStore.clearChip(key)"
          >
            {{ $t(`shared.labels.${key}`) }}: {{ value }}
          </q-chip>
        </div>

        <q-btn @click="toggle" round unelevated>
          <q-icon name="o_expand_more" />
        </q-btn>
      </div>
    </q-card-section>

    <q-slide-transition>
      <div v-show="slide">
        <q-card-section>
          <div class="row q-col-gutter-lg">
            <div class="col-3">
              <div class="row">
                <div class="col">
                  <div class="text-body1 no-letter-spacing q-mb-sm">منطقه</div>
                  <q-select
                    outlined
                    dense
                    v-model="formStore.model.value.region"
                    use-input
                    clearable
                    clear-icon="o_close"
                    dropdown-icon="o_expand_more"
                    hide-selected
                    fill-input
                    input-debounce="0"
                    :options="regionOptions"
                    @filter="filterRegion"
                    class="col text-body1 no-letter-spacing"
                    popup-content-class="text-body1 no-letter-spacing"
                  >
                    <template #no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          نتیجه ای یافت نشد
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                </div>
              </div>

              <div class="row q-mt-md">
                <div class="col">
                  <div class="text-body1 no-letter-spacing q-mb-sm">دوربین</div>
                  <q-select
                    outlined
                    dense
                    v-model="formStore.model.value.camera"
                    use-input
                    hide-selected
                    dropdown-icon="o_expand_more"
                    fill-input
                    input-debounce="0"
                    :options="cameraOptions"
                    @filter="filterCamera"
                    class="col text-body1 no-letter-spacing"
                    popup-content-class="text-body1 no-letter-spacing"
                  >
                    <template #no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          نتیجه ای یافت نشد
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                </div>
              </div>

              <div class="row q-mt-md">
                <div class="col">
                  <div class="text-body1 no-letter-spacing q-mb-sm">خدمت</div>
                  <q-select
                    outlined
                    dense
                    dropdown-icon="o_expand_more"
                    v-model="formStore.model.value.service"
                    use-input
                    hide-selected
                    fill-input
                    input-debounce="0"
                    :options="serviceOptions"
                    @filter="filterService"
                    class="col text-body1 no-letter-spacing"
                    popup-content-class="text-body1 no-letter-spacing"
                  >
                    <template #no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          نتیجه ای یافت نشد
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                </div>
              </div>
            </div>

            <div class="col-2">
              <div class="row">
                <div class="col">
                  <div class="text-body1 no-letter-spacing q-mb-sm">
                    از تاریخ
                  </div>
                  <q-input
                    input-class="text-body1"
                    outlined
                    dense
                    v-model="formStore.model.value.fromDate"
                    mask="date"
                  >
                    <template #append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date v-model="formStore.model.value.fromDate">
                            <div class="row items-center justify-end">
                              <q-btn
                                v-close-popup
                                label="بستن"
                                color="primary"
                                rounded
                              />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>
              </div>

              <div class="row q-mt-md">
                <div class="col">
                  <div class="text-body1 no-letter-spacing q-mb-sm">
                    تا تاریخ
                  </div>
                  <q-input
                    input-class="text-body1"
                    outlined
                    dense
                    v-model="formStore.model.value.toDate"
                    mask="date"
                  >
                    <template #append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date v-model="formStore.model.value.toDate">
                            <div class="row items-center justify-end">
                              <q-btn
                                rounded
                                v-close-popup
                                label="بستن"
                                color="primary"
                              />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>

        <q-card-actions class="row items-center justify-end q-pa-md">
          <q-btn text-color="dark" color="primary" rounded padding="8px 16px">
            <q-icon size="20px" class="q-mr-sm" name="o_search" />
            <div class="text-body1">جستجو</div>
          </q-btn>

          <q-btn rounded padding="6px 12px" @click="formStore.clearForm">
            <q-icon size="20px" class="q-mr-sm" name="o_close" />
            <div class="text-body1">پاک سازی</div>
          </q-btn>
        </q-card-actions>
      </div>
    </q-slide-transition>
  </q-card>
</template>

<script setup>
import { ref, computed } from "vue";
import { useFormState } from "src/composables/useFormState";

const formStore = useFormState();

const slide = ref(false);

const toggle = () => {
  slide.value = !slide.value;
};

const filteredSelectedOptions = computed(() => {
  const selectedOptions = {
    region: formStore.model.value.region,
    camera: formStore.model.value.camera,
    service: formStore.model.value.service,
    fromDate: formStore.model.value.fromDate,
    toDate: formStore.model.value.toDate,
  };

  return Object.fromEntries(
    Object.entries(selectedOptions).filter(([key, value]) => value)
  );
});

const regionOptions = ref(formStore.option.value.region);
const cameraOptions = ref(formStore.option.value.camera);
const serviceOptions = ref(formStore.option.value.service);

const filterRegion = (val, update, abort) => {
  update(() => {
    const needle = val.toLowerCase();
    regionOptions.value = formStore.option.value.region.filter(
      (v) => v.toLowerCase().indexOf(needle) > -1
    );
  });
};

const filterCamera = (val, update, abort) => {
  update(() => {
    const needle = val.toLowerCase();
    cameraOptions.value = formStore.option.value.camera.filter(
      (v) => v.toLowerCase().indexOf(needle) > -1
    );
  });
};

const filterService = (val, update, abort) => {
  update(() => {
    const needle = val.toLowerCase();
    serviceOptions.value = formStore.option.value.service.filter(
      (v) => v.toLowerCase().indexOf(needle) > -1
    );
  });
};
</script>
