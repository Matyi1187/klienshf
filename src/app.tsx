import { useState } from "react";
import Header from "./components/Header";
import AddRecipe from "./components/AddRecipe";
import RecipesList from "./components/RecipesList";
import { Container } from "@mui/material";
import MainPage from "./components/MainPage";

/**
 * App component that serves as the main layout for the application.
 * @returns the main application layout with header and content based on selected tab.
 */
function App() {
    const [tab, setTab] = useState<number>(0);

    const handleTabChange = (event: any, newValue: number): void => {
        setTab(newValue);
    };

    return (
        <>
            {tab === 0 && <MainPage />}
            <Header value={tab} onChange={handleTabChange} />
            <Container >
                {tab === 2 && <AddRecipe />}
            </Container>
            <Container sx={{
                marginTop: 10,
                marginLeft: 0,
            }}>
                {tab === 1 && <RecipesList showFavourites={false} />}
                {tab === 3 && <RecipesList tab={2} />}
                {tab === 4 && <RecipesList showFavourites={true} />}
            </Container>
        </>
    );
}

export default App;