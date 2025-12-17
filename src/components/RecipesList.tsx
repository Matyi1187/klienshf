import RecipeCard from "./RecipeCard";
import EditRecipe from "./EditRecipe";
import type { Recipe } from "./types";
import { useState, useEffect } from "react";
import { deleteRecipe } from "./DeleteRecipe";
import { Typography } from "@mui/material";
import ChooseView from "./ChooseView";
import type { ViewMode } from "./types";
import ArrowView from "./ArrowView";
import SearchTab from "./SearchRecipes";
import { playFavouriteSound } from "./Sounds";
import {
  loadRecipes,
  saveRecipes,
  toggleFavouriteByIndex,
} from "./recipesStorage";

/**
 * A component to list recipes using recipe cards or 
 * arrow view or
 * search tab depending on the view mode.
 * 
 * @param showFavourites - Whether to show only favourite recipes. Defaults to false.
 * @param tab - The current selected tab index. Defaults to 0, if tab is 2, the search tab will be shown.
 * @returns either a list of recipe cards, an arrow view or a search tab.
 */

export function RecipesList({ showFavourites = false, tab = 0}) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editRecipe, setEditRecipe] = useState<Recipe | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("scroll");

  useEffect(() => {
    setRecipes(loadRecipes());
  }, []);

  const handleToggleFavourite = (index: number) => {
    const newRecipes = toggleFavouriteByIndex(index, recipes);
    setRecipes(newRecipes);
    saveRecipes(newRecipes);
    playFavouriteSound();
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setEditRecipe({ ...recipes[index] });
  };

  const displayedRecipes = showFavourites
    ? recipes.filter(r => r.favourite)
    : recipes;

  if (tab === 2) {
    return (<SearchTab
      recipes={recipes}
    />);
  }

  return (
    <>
      {displayedRecipes.length === 0 && (
        <Typography variant="h6" sx={{ mt: 4 }}>
          {showFavourites
            ? "Nincs még kedvenc recept"
            : "Nincs még recept hozzáadva"}
        </Typography>)}
      {displayedRecipes.length > 0 && viewMode === "scroll" &&
        displayedRecipes.map(recipe => {
          const mainIndex = recipes.findIndex(r => r.name === recipe.name);
          return (
            <RecipeCard
              key={recipe.name}
              index={mainIndex}
              recipe={recipe}
              handleEdit={handleEdit}
              handleDelete={(i) => deleteRecipe(i, recipes, setRecipes)}
              toggleFavourite={handleToggleFavourite}
            />
          );
        })
      }

      {displayedRecipes.length > 0 && viewMode === "arrow" && (
        <ArrowView
          recipes={displayedRecipes}
          onEdit={handleEdit}
          onDelete={(i) => deleteRecipe(i, recipes, setRecipes)}
          onToggleFavourite={handleToggleFavourite}
        />
      )}

      <EditRecipe
        open={editIndex !== null}
        recipe={editRecipe}
        onClose={() => { setEditIndex(null); setEditRecipe(null); }}
        onSave={(r) => {
          if (editIndex === null) return;
          const newRecipes = [...recipes];
          newRecipes[editIndex] = r;
          setRecipes(newRecipes);
          saveRecipes(newRecipes);
          setEditIndex(null);
          setEditRecipe(null);
        }}
      />
      {displayedRecipes.length > 0 && (
        <ChooseView
          viewMode={viewMode}
          onChange={setViewMode}
        />
      )}
    </>
  );
}

export default RecipesList;