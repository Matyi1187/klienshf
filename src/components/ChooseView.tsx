import { ToggleButton, ToggleButtonGroup, Box } from "@mui/material";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import type { ViewMode } from "./types";

type ChooseViewProps = {
  viewMode: ViewMode;
  onChange: (mode: ViewMode) => void;
};

function ChooseView({ viewMode, onChange }: ChooseViewProps) {
  return (
    <Box
      sx={{
        position: "fixed",
        left: 16,
        top: "50%",
        
        zIndex: 1000,
        backgroundColor: "rgba(43, 61, 87, 0.5)",
        borderRadius: 2,
        padding: 1,
      }}
    >
      <ToggleButtonGroup
        orientation="vertical"
        value={viewMode}
        exclusive
        onChange={(_, value) => {
          if (value) onChange(value);
        }}
      >
        <ToggleButton value="scroll">
          <ViewStreamIcon />
        </ToggleButton>

        <ToggleButton value="arrow">
          <ViewCarouselIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default ChooseView;
