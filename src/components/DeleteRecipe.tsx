import type { Recipe } from "./types";

export const deleteRecipe = (index: number, recipes: Recipe[], setRecipes: (r: Recipe[]) => void) => {
  const confirmed = window.confirm("Biztosan törölni szeretnéd a receptet?");
  if (!confirmed) return;

  const updated = recipes.filter((_, i) => i !== index);
  setRecipes(updated);
  localStorage.setItem("recipes", JSON.stringify(updated));
};