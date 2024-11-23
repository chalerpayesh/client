<template>
  <div style="margin-bottom: 24px">
    <q-page-sticky style="z-index: 1" position="top" expand>
      <q-toolbar
        class="q-px-xl q-py-md text-on-dark"
        :class="$q.dark.isActive ? 'bg-dark-page' : 'bg-accent'"
      >
        <div class="row items-center q-gutter-md">
          <q-btn
            v-if="routerBack"
            @click="$router.go(-1)"
            flat
            round
            dense
            icon="o_arrow_forward"
          />
          <div class="text-weight-700 text-h6 no-letter-spacing">
            {{ title }}
          </div>
        </div>

        <q-space />

        <div class="row items-center q-gutter-sm">
          <slot name="buttons"> </slot>
        </div>
      </q-toolbar>
    </q-page-sticky>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  routerBack: Boolean,
});
</script>
