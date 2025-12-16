import type { Recipe } from "./types";
import { playDeleteSound } from "./Sounds";

/**
 * A function to delete a recipe from the list.
 * 
 * @param index the index of the recipe to delete.
 * @param recipes list of recipes.
 * @param setRecipes  function to update the list of recipes.
 * @returns void.
 */

export const deleteRecipe = (index: number, recipes: Recipe[], setRecipes: (r: Recipe[]) => void) => {
  const confirmed = window.confirm("Biztosan törölni szeretnéd a receptet?");
  if (!confirmed) return;
  playDeleteSound();
  const updated = recipes.filter((_, i) => i !== index);
  setRecipes(updated);
  localStorage.setItem("recipes", JSON.stringify(updated));
};