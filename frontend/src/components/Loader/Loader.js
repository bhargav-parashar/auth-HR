import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loader({ small = false, isColored }) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {isColored ? (
        <CircularProgress
          size={small ? "1rem" : "2rem"}
          sx={{ color: "rgb(81, 81, 228)", animationDuration: '500ms' }}
        />
      ) : (
        <CircularProgress
          size={small ? "1rem" : "2rem"}
          sx={{ color: "white", animationDuration: '500ms' }}
        />
      )}
    </Box>
  );
}
