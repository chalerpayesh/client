<template>
  <div class="q-mt-lg">
    <div class="grid-container">
      <q-card v-for="item in items" :key="item.id" class="grid-item">
        <img :src="item.url" alt="Car image" class="car-image" />

        <q-card-section>
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
        </q-card-section>
      </q-card>
    </div>

    <page-bar
      v-if="pageBar"
      class="q-my-xl"
      :currentPage="currentPage"
      :totalItems="totalItems"
      :itemsPerPage="itemsPerPage"
      @update:model-value="loadPage"
    />
  </div>
</template>

<script setup>
  import { ref, computed, onMounted } from "vue";
  import { fetch } from "src/helpers/fetchWrapper";
  import PageBar from "src/components/shared/PageBar.vue";

  const items = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const currentPage = ref(1);
  const itemsPerPage = ref(20);
  const totalItems = ref(0);
  const pageBar = ref(false);

  const totalPages = computed(() =>
    Math.ceil(totalItems.value / itemsPerPage.value)
  );

  const fetchItems = async () => {
    const url = `https://jsonplaceholder.typicode.com/photos?_page=${currentPage.value}&_limit=${itemsPerPage.value}`;

    isLoading.value = true;
    error.value = null;

    try {
      const data = await fetch(url);
      items.value = data;
      totalItems.value = 100;
    } catch (err) {
      error.value = "Failed to load items.";
      console.error(err);
    } finally {
      isLoading.value = false;
      pageBar.value = true;
    }

    console.log(items.value);
  };

  const loadPage = (page) => {
    currentPage.value = page;
    fetchItems(page);
  };

  onMounted(() => {
    fetchItems(currentPage.value);
  });
</script>

<style lang="scss">
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 16px;
  }

  .grid-item {
    display: flex;
    flex-direction: column;
  }

  .car-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
</style>
