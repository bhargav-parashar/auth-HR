import React from "react";
import { Box, Stack, Paper, Typography } from "@mui/material";

const GridPill = ({ label, currTab }) => {
  return (
    <Box
      px={1}
      sx={{
        cursor: "pointer",
        border: "2px solid",
        borderColor: "primary.light",
        borderRadius: "0.9rem",
        bgcolor:  'primary.light'
      }}
    >
      <Typography variant="caption">{label}</Typography>
    </Box>
  );
};

export default GridPill;
