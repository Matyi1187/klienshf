import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import type { Recipe } from "./types";
import type { EditRecipesProps } from "./types";

function EditRecipe({ open, recipe, onClose, onSave }: EditRecipesProps) {
  const [localRecipe, setLocalRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (recipe) {
      setLocalRecipe({ ...recipe });
    }
  }, [recipe]);

  if (!localRecipe) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            backgroundColor: "#2b3d57ff",
            color: "white",
            borderRadius: 2,
            marginTop: 20,
          },
        },
      }}
    >
      <DialogTitle>Recept szerkesztése</DialogTitle>

      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          minHeight: 300,
        }}
      >
        <TextField
          label="Recept neve"
          value={localRecipe.name}
          onChange={(e) =>
            setLocalRecipe({ ...localRecipe, name: e.currentTarget.value })
          }
          fullWidth
          sx={{
            mt: 3,
            input: { color: "white" },
            label: { color: "#dbdbdbff" },
          }}
        />

        <TextField
          label="Hozzávalók"
          value={localRecipe.ingredients}
          onChange={(e) =>
            setLocalRecipe({
              ...localRecipe,
              ingredients: e.currentTarget.value,
            })
          }
          multiline
          minRows={1}
          maxRows={10}
          fullWidth
          sx={{
            textarea: { color: "white" },
            label: { color: "#dbdbdbff" },
          }}
        />

        <TextField
          label="Elkészítés"
          value={localRecipe.instructions}
          onChange={(e) =>
            setLocalRecipe({
              ...localRecipe,
              instructions: e.currentTarget.value,
            })
          }
          multiline
          minRows={1}
          maxRows={10}
          fullWidth
          sx={{
            textarea: { color: "white" },
            label: { color: "#dbdbdbff" },
          }}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Mégse</Button>
        <Button
          variant="contained"
          onClick={() => onSave(localRecipe)}
        >
          Kész
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditRecipe;
