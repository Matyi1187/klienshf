import type { Recipe } from "./types";

/**
 * Function to load recipes from local storage.
 * @returns array of recipes.
 */

export const loadRecipes = (): Recipe[] => {
  return JSON.parse(localStorage.getItem("recipes") ?? "[]");
};

/**
 * Saves the given recipes array to local storage.
 * @param recipes the array of recipes to save.
 */
export const saveRecipes = (recipes: Recipe[]) => {
  localStorage.setItem("recipes", JSON.stringify(recipes));
};

/**
 * A function to toggle the favourite status of a recipe by its index.
 * @param index  the index of the recipe to toggle.
 * @param recipes the array of recipes.
 * @returns array of recipes with the updated favourite status.
 */
export const toggleFavouriteByIndex = (index: number, recipes: Recipe[]): Recipe[] => {
  const newRecipes = [...recipes];
  newRecipes[index] = {
    ...newRecipes[index],
    favourite: !newRecipes[index].favourite,
  };
  return newRecipes;
};