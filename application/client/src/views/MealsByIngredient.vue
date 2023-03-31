<template>
  <div class="p-8 pb-0">
    <h1>Meals by ingredients</h1>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 p-8">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "../store";

const meals = computed(() => store.state.meal);
</script>
