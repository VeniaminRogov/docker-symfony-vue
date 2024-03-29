import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword.value}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
}

export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setMealsByLetter", data.meals);
  });
}

export function searchMealsByIngredients({ commit }, ing) {
  axiosClient.get(`list.php?c=list${ing}`).then(({ data }) => {
    commit("setMealsByIngredient", data.meals);
  });
}
