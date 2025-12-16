import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import RecipeCard from "./RecipeCard";
import type { Recipe } from "./types";
import type { SearchTabProps } from "./types";

/**
 * Component for searching recipes by name and ingredients.
 * If no search criteria is provided, no results are shown.
 * If we both type in the name and ingredients, only recipes matching both criteria are shown.
 * Else if only one criteria is provided, recipes matching that criteria are shown.
 * 
 * @param recipes - The list of recipes to search from.
 * @returns A box containing search fields and the search results which are recipe cards.
 */
export default function SearchTab({ recipes }: SearchTabProps) {
    const [nameQuery, setNameQuery] = useState("");
    const [ingredientsQuery, setIngredientsQuery] = useState("");
    const [results, setResults] = useState<Recipe[]>([]);

    const handleSearch = () => {
        if (!nameQuery.trim() && !ingredientsQuery.trim()) {
            setResults([]);
            return;
        }
        const filtered = recipes.filter(r => {
            const nameMatch = nameQuery ? r.name.toLowerCase().includes(nameQuery.toLowerCase()) : true;
            const ingredientsMatch = ingredientsQuery ? r.ingredients.toLowerCase().includes(ingredientsQuery.toLowerCase()) : true;
            return nameMatch && ingredientsMatch;
        });
        setResults(filtered);
    };

    return (
        <Box sx={
            {
                mb: 3,
                p: 3,
                borderRadius: 2,
                backgroundColor: "#d8c6c6ff",
                boxShadow: 2,
            }
        }>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 3 }}>
                <TextField
                    label="Recept neve"
                    value={nameQuery}
                    onChange={(e) => setNameQuery(e.currentTarget.value)}
                    sx={{ flex: 1, minWidth: 200 }}
                />
                <TextField
                    label="Hozzávalók"
                    value={ingredientsQuery}
                    onChange={(e) => setIngredientsQuery(e.currentTarget.value)}
                    sx={{ flex: 1, minWidth: 200 }}
                />
                <Button variant="contained" onClick={handleSearch}>Keresés</Button>
            </Box>

            {results.length === 0 ? (
                <Typography>Nincsenek találatok</Typography>
            ) : (
                results.map((recipe, index) => {
                    const mainIndex = recipes.findIndex(r => r.name === recipe.name);
                    return (
                        <RecipeCard
                            key={recipe.name}
                            index={mainIndex}
                            recipe={recipe}
                            handleEdit={() => {}}
                            handleDelete={() => {}}
                            toggleFavourite={() => {}}
                            showButtons={false}
                        />
                    );
                })
            )}
        </Box>
    );
}
