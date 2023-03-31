<template>
  <div class="flex flex-col p-8 items-center">
    <input
      type="text"
      class="w-full rounded border-2 border-gray-200"
      placeholder="Search for meals"
    />

    <div class="flex gap-2 mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import axiosClient from "../axiosClient.js";

const letters = "ABCDEFGHIJLKMNOPQRSTUVWXYZ".split("");

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  console.log(response.data);
});
</script>
