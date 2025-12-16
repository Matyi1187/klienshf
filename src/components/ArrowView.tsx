import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RecipeCard from "./RecipeCard";
import { useState } from "react";
import type { ArrowViewProps } from "./types";

const ArrowView = ({ recipes, onEdit, onDelete, onToggleFavourite }: ArrowViewProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (recipes.length === 0) {
        return <Typography>Nincs még recept hozzáadva</Typography>;
    }

    const prevIndex = (currentIndex - 1 + recipes.length) % recipes.length;
    const nextIndex = (currentIndex + 1) % recipes.length;

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                mt: 50,
            }}
        >
            <IconButton
                onClick={() => setCurrentIndex(prevIndex)}
                sx={{ fontSize: 40 }}
            >
                <ArrowBackIosNewIcon fontSize="inherit" />
            </IconButton>

            <Box sx={{ maxWidth: 800, flex: 1 }}>
                <RecipeCard
                    recipe={recipes[currentIndex]}
                    index={currentIndex}
                    handleEdit={onEdit}
                    handleDelete={onDelete}
                    toggleFavourite={onToggleFavourite}
                    mode="arrow"
                />
            </Box>

            <IconButton
                onClick={() => setCurrentIndex(nextIndex)}
                sx={{ fontSize: 40 }}
            >
                <ArrowForwardIosIcon fontSize="inherit" />
            </IconButton>
        </Box>
    );
};

export default ArrowView;
