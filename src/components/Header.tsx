import { AppBar, Tabs, Tab, Toolbar, Typography, Box } from "@mui/material";
import React from "react";

export type HeaderProps = {
  value: number;
  onChange: (event: any, newValue: number) => void;
}

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