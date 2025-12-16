import { Box, Typography, IconButton, Divider } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import type { Recipe } from "./types";

type RecipeCardProps = {
  recipe: Recipe;
  index: number;
  handleEdit: (index: number) => void;
  handleDelete: (index: number) => void;
  toggleFavourite: (index: number) => void;
  mode?: "arrow" | "scroll";
  showButtons?: boolean;
};

const calcMarginLeft = (mode) => {
  return mode === "arrow" ? 0 : 9;
}

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
