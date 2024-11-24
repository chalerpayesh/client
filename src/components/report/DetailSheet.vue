<template>
  <q-dialog
    transition-show="slide-up"
    transition-hide="slide-down"
    transition-duration="600"
    no-backdrop-dismiss
    backdrop-filter="contrast(20%)"
  >
    <q-card flat style="width: 700px">
      <q-card-section
        class="row items-center q-pr-md"
      >
        <slot name="title">
          <div class="text-h6">جزئیات</div>
        </slot>

        <q-space />
        <q-btn
          icon="close"
          class="icon-hover dark-3"
          flat
          round
          dense
          v-close-popup
        />
      </q-card-section>

      <q-card-section>
        <q-img
          height="300px"
          :src="item.url"
          alt="Car image"
          class="q-mb-lg"
        />

       <div class="q-gutter-sm">
         <div class="row">
          <div class="col-2">شماره:</div>
          <div class="col">{{ item.id }}</div>
        </div>

        <div class="row">
          <div class="col-2">خدمت:</div>
          <div class="col">تشخیص انسان</div>
        </div>

        <div class="row">
          <div class="col-2">اطلاعات:</div>
          <div class="col">3</div>
        </div>

        <div class="row">
          <div class="col-2">زمان:</div>
          <div class="col">12: 39</div>
        </div>

        <div class="row">
          <div class="col-2">تاریخ:</div>
          <div class="col">1403/08/27</div>
        </div>
       </div>
      </q-card-section>

      <slot name="actions"></slot>
    </q-card>
  </q-dialog>
</template>

<script setup>
  import { ref } from "vue";

  const props = defineProps({
    item: Object,
  });
</script>
