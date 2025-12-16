import { useState } from "react";
import Header from "./components/Header";
import AddRecipe from "./components/AddRecipe";
import RecipesList from "./components/RecipesList";
import { Container } from "@mui/material";
import SearchTab from "./components/SearchRecipes";

function App() {
    const [tab, setTab] = useState<number>(0);

    const handleTabChange = (event: any, newValue: number): void => {
        setTab(newValue);
    };

    return (
        <>
            <Header value={tab} onChange={handleTabChange} />
            <Container >
                {tab === 1 && <AddRecipe />}
            </Container>
            <Container sx={{
                marginTop: 10,
                marginLeft: 0,
            }}>
                {tab === 0 && <RecipesList showFavourites={false} />}
                {tab === 2 && <RecipesList tab={2} />}
                {tab === 3 && <RecipesList showFavourites={true} />}
            </Container>
        </>
    );
}

export default App;