import { Box, Typography, IconButton, Divider } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import type { RecipeCardProps } from "./types";

// Helper function to calculate margin left based on mode
const calcMarginLeft = (mode) => {
  return mode === "arrow" ? 0 : 9;
}

/**
 * A template for displaying a recipe card.
 * 
 * @param recipe - The recipe to display.
 * @param index - The index of the recipe in the list.
 * @param handleEdit - Function to call when editing the recipe.
 * @param handleDelete - Function to call when deleting the recipe.
 * @param toggleFavourite - Function to call when toggling the favourite status of the recipe.
 * @param mode - The view mode, either "scroll" or "arrow". Defaults to "scroll".
 * @param showButtons - Whether to show the edit, delete and favourite buttons. Defaults to true.
 * @returns A card displaying the recipe information and three buttons for editing, deleting 
 * and favouriting the recipe.
 */
function RecipeCard({ recipe, index, handleEdit, handleDelete, toggleFavourite, mode = "scroll", showButtons = true }: RecipeCardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 1,
        maxWidth: 800,
        p: 3,
        mb: 3,
        ml: calcMarginLeft(mode),
        backgroundColor: "#2b3d57ff",
        color: "white",
        borderRadius: 2,
        boxShadow: "0 0 15px 2px red",
        position: "relative",
      }}
    >
      {showButtons && (
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            display: "flex",
            gap: 1,
          }}
        >

          <IconButton color="inherit" size="small" onClick={() => handleEdit(index)}>
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton color="inherit" size="small" onClick={() => handleDelete(index)}>
            <DeleteIcon fontSize="small" />
          </IconButton>
          <IconButton
            color={recipe.favourite ? "error" : "inherit"}
            size="small"
            onClick={() => toggleFavourite(index)}
          >
            <FavoriteIcon fontSize="small" />
          </IconButton>
        </Box>
      )}
      <Typography variant="h5" fontWeight="bold">{recipe.name}</Typography>
      <Divider sx={{ width: "100%", backgroundColor: "white", my: 1 }} />

      <Typography variant="subtitle2">Hozzávalók:</Typography>
      <Typography sx={{ whiteSpace: "pre-line" }}>{recipe.ingredients}</Typography>
      <Divider sx={{ width: "100%", backgroundColor: "white", my: 1 }} />

      <Typography variant="subtitle2">Elkészítés:</Typography>
      <Typography sx={{ whiteSpace: "pre-line" }}>{recipe.instructions}</Typography>
    </Box>
  );
}

export default RecipeCard;
