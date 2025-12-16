import type { Recipe } from "./types";

export const loadRecipes = (): Recipe[] => {
  return JSON.parse(localStorage.getItem("recipes") ?? "[]");
};

export const saveRecipes = (recipes: Recipe[]) => {
  localStorage.setItem("recipes", JSON.stringify(recipes));
};

export const toggleFavouriteByIndex = (
  index: number,
  recipes: Recipe[]
): Recipe[] => {
  const newRecipes = [...recipes];
  newRecipes[index] = {
    ...newRecipes[index],
    favourite: !newRecipes[index].favourite,
  };
  return newRecipes;
};