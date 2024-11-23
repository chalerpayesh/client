<template>
   <div class="row items-center justify-center">
     <q-form class="col-6 column" @submit="authenticate">
      <div class="text-h3 text-center text-weight-700 no-letter-spacing">
        {{ $t("login.labels.sign-in") }}
      </div>
      <div class="q-mb-md">
        <div class="q-mb-sm text-size-16 text-grey-8 no-letter-spacing">
          {{ $t("login.labels.username") }}
        </div>
        <q-input outlined rounded v-model="username">
          <template #prepend>
            <q-icon color="primary" name="o_badge" class="q-ml-sm" />
          </template>
        </q-input>
      </div>
      <div class="q-mb-lg">
        <div class="q-mb-sm text-size-16 text-grey-8 no-letter-spacing">
          {{ $t("login.labels.password") }}
        </div>
        <q-input
          :type="visibility ? 'password' : 'text'"
          outlined
          rounded
          v-model="password"
          color="primary"
        >
          <template #prepend>
            <q-icon color="primary" name="o_key" class="q-ml-sm" />
          </template>
          <template #append>
            <q-icon
              :name="visibility ? 'o_visibility' : 'o_visibility_off'"
              class="cursor-pointer q-mr-sm"
              @click="handleVisibility"
            />
          </template>
        </q-input>
      </div>
      <router-link
        class="no-decoration decoration-on-hover text-size-16 text-weight-500 text-primary"
      >
        {{ $t("login.labels.forgot-password") }}
      </router-link>

      <q-btn
        rounded
        unelevated
        color="primary"
        class="full-weight q-pa-md q-mt-xl"
        type="submit"
        to="/dashboard"
      >
        <span class="text-size-16 text-weight-700">{{
          $t("login.labels.sign-in")
        }}</span>
      </q-btn>

      <div class="q-mt-lg text-size-16 text-grey-8">
        {{ $t("login.labels.no-account") }}
        <router-link
          class="text-size-16 text-weight-700 text-primary no-decoration decoration-on-hover"
        >
          {{ $t("login.labels.sign-up") }}
        </router-link>
      </div>
    </q-form>
   </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref(null);
const password = ref(null);
const visibility = ref(false);

const handleVisibility = () => {
  visibility.value = !visibility.value;
};
</script>
