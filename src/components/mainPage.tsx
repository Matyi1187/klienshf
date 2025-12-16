import { Box, Typography } from "@mui/material";

export default function MainPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
        mt: 10,
        maxWidth: 800,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#2b3d57ff",
        color: "white",
        borderRadius: 2,
        boxShadow: "0 0 20px 4px red",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Üdvözöl a Recept App!
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Ez a weboldal lehetővé teszi, hogy saját recepteket adj hozzá, 
        szerkessz, törölj, vagy kedvencekké tedd őket.  
        Kereshetsz recepteket név vagy hozzávalók alapján, és kétféle 
        megjelenítési mód közül választhatsz: scroll és arrow view.
      </Typography>

      <Typography variant="body2">
        Kezdd el a recepteskönyv elkészítését az "Új recept" fülre kattintva!
      </Typography>
    </Box>
  );
}
