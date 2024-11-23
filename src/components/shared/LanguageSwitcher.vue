<template>
  <q-btn
    dense
    round
    unelevated
    v-if="lang == 'fa-IR'"
    @click="onLanguageChange"
  >
    <q-avatar size="24px" unelevated>
      <img src="flags/IR.svg" alt="Persian" />
    </q-avatar>
  </q-btn>

  <q-btn dense round unelevated v-else @click="onLanguageChange">
    <q-avatar size="24px" unelevated>
      <img src="flags/US.svg" alt="English" />
    </q-avatar>
  </q-btn>
</template>

<script setup>
import { useQuasar, Quasar } from "quasar";
import { ref, watch, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const $t = useI18n();

const qLangList = import.meta.glob(
  "/node_modules/quasar/lang/(en-US|fa-IR).js"
);

const $q = useQuasar();
const lang = ref(localStorage.getItem("selectedLanguage") || $q.lang.isoName);

const selectedLanguageClass =
  localStorage.getItem("selectedLanguageClass") ||
  (lang.value === "fa-IR" ? "persian" : "english");
const bodyClass = ref(selectedLanguageClass);

watch(lang, (val) => {
  setLang(val);
});

watch(bodyClass, (val) => {
  document.body.classList.remove("persian", "english");
  document.body.classList.add(val);
  localStorage.setItem("selectedLanguageClass", val);
});

async function setLang(iso) {
  try {
    const langModule = await qLangList[`/node_modules/quasar/lang/${iso}.js`]();
    Quasar.lang.set(langModule.default);
    $t.locale.value = lang.value;
    localStorage.setItem("selectedLanguage", iso);
    bodyClass.value = iso === "fa-IR" ? "persian" : "english";
  } catch (error) {
    console.log("error setLang", error);
  }
}

const onLanguageChange = () => {
  lang.value = lang.value === "fa-IR" ? "en-US" : "fa-IR";
};

onMounted(() => {
  document.body.classList.remove("persian", "english");
  document.body.classList.add(bodyClass.value);
});

setLang(lang.value);
</script>
