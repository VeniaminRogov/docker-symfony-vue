<template>
  <div class="bg-white shadow p-4 rounded-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="w-full h-48 object-cover rounded-t-xl"
      />
    </router-link>
    <h3 class="p-3 font-bold">{{ meal.strMeal }}</h3>
    <div class="p-3">
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        recusandae impedit corporis ullam repellendus neque commodi, eum nisi
        nam hic adipisci voluptas rerum aliquam, ipsum itaque quam labore minima
        animi!
      </p>
      <div>
        <YouTubeBtn :href="meal.strYoutube">YouTube</YouTubeBtn>
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeBtn from "../components/YouTubeBtn.vue";

const { meal } = defineProps({
  meal: Object,
});
</script>
