<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      class="w-full rounded border-2 border-gray-200"
      placeholder="Search for meals"
      v-model="keyword"
      @change="searchMeals"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

import store from "../store";
import MealItem from "../components/MealItem.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch("searchMeals", keyword);
}

onMounted(() => {
  keyword.value = route.params.name;

  if (keyword.value) {
    searchMeals();
  }
});
</script>
