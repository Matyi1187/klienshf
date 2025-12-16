import { AppBar, Tabs, Tab, Toolbar, Typography, Box } from "@mui/material";
import type { HeaderProps } from "./types";

/**
 * A header component for the application.
 * We can switch between different tabs using this header.
 * 
 * @param value - The current selected tab index.
 * @param onChange - The function to call when the tab is changed.
 * @returns A header with tabs for navigation.
 */

function Header({ value, onChange }: HeaderProps) {
  return (
    <AppBar sx={{ backgroundColor: "#2b3d57ff" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ marginRight: 5 }}
        >
          Kliensoldali rendszerek házi feladat
        </Typography>

        <Box>
          <Tabs
            value={value}
            onChange={onChange}
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab label="Főoldal" />
            <Tab label="Receptek" />
            <Tab label="Új recept" />
            <Tab label="Receptkereső" />
            <Tab label="Kedvencek" />

          </Tabs>
        </Box>

        <Typography
          variant="h6"
          fontSize={14}
          component="div"
          sx={{ ml: "auto" }}
        >
          Ondok Mátyás (PGPYD1)
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;