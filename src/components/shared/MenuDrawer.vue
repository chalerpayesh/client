<template>
  <q-drawer
    side="left"
    v-model="store.state.value.status"
    show-if-above
    bordered
    :width="240"
    :breakpoint="500"
    :class="$q.dark.isActive ? 'bg-dark' : 'bg-grey-3'"
  >
    <q-scroll-area class="fit">
      <q-list>
        <div class="flex items-center justify-center q-gutter-sm q-py-lg">
          <q-avatar size="28px">
            <img src="/icons/logo.png" />
          </q-avatar>
          <div class="text-h6 no-letter-spacing text-weight-700">
            بینا مانیتورینگ
          </div>
        </div>

        <q-separator class="q-mb-md" />

        <q-item
          v-for="item in menuItems"
          :key="item.name"
          :to="`/${item.address}`"
          class="row justify-between q-pr-none q-pl-sm q-py-sm"
          active-class="active-bg text-primary"
          clickable
        >
          <template #default>
            <div class="flex items-center q-pl-sm">
              <q-icon size="20px" class="q-mr-sm" :name="item.icon" />
              <div class="text-body1 no-letter-spacing text-white">
                {{ $t(`menu-items.labels.${item.name}`) }}
              </div>
            </div>

            <div
              v-if="$route.path === `/${item.address}`"
              class="border-right-sm"
            ></div>
          </template>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup>
import { ref } from "vue";
import { useMenuDrawer } from "src/composables/useMenuDrawer.js";
import { menuItems } from "src/database/menuItems";

const store = useMenuDrawer();
</script>
