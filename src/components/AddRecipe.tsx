import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import type { Recipe } from "./types";

function AddRecipe() {
  const [name, setName] = useState<string>("");
  const [ingredients, setIngredients] = useState<string>("");
  const [instructions, setInstructions] = useState<string>("");

  const handleSubmit = (): void => {
    if (!name) {
      alert("Adj nevet a receptnek!");
      return;
    }

    const recipes: Recipe[] = JSON.parse(
      localStorage.getItem("recipes") ?? "[]"
    );

    recipes.push({ name, ingredients, instructions });
    localStorage.setItem("recipes", JSON.stringify(recipes));

    setName("");
    setIngredients("");
    setInstructions("");
    alert("Recept hozzáadva!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 1200,
        p: 3,
        backgroundColor: "#2b3d57ff",
        color: "white",
        borderRadius: 2,
        marginTop: 20,
        boxShadow: "0 0 20px 4px red",
      }}
    >
      <Typography variant="h5">Új recept hozzáadása</Typography>

      <TextField
        label="Recept neve"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        fullWidth
        slotProps={{
          input: {
            sx: { color: "white" },
          },
          inputLabel: {
            sx: { color: "#dbdbdbff" },
          },
        }}
      />

      <TextField
        label="Hozzávalók"
        value={ingredients}
        onChange={(e) => setIngredients(e.currentTarget.value)}
        multiline
        rows={4}
        fullWidth
        slotProps={{
          input: {
            sx: { color: "white" },
          },
          inputLabel: {
            sx: { color: "#dbdbdbff" },
          },
        }}
      />

      <TextField
        label="Elkészítés"
        value={instructions}
        onChange={(e) => setInstructions(e.currentTarget.value)}
        multiline
        rows={4}
        fullWidth
        slotProps={{
          input: {
            sx: { color: "white" },
          },
          inputLabel: {
            sx: { color: "#dbdbdbff" },
          },
        }}
      />

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Hozzáadás
      </Button>
    </Box>
  );
}

export default AddRecipe;