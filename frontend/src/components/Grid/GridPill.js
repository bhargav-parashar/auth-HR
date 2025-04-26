import React from "react";
import { Typography, Button } from "@mui/material";

const GridPill = ({ id, label, type, handleTabChange }) => {
  return (
    <Button
      px={0.5}
      size="small"
      onClick={() => handleTabChange(id)}
      sx={{
        color:'text.primary',
        height: "25px",
        cursor: "pointer",
        border: "2px solid",
        borderColor: "primary.light",
        borderRadius: "0.9rem",
        bgcolor: id === type ? "primary.light" : "transparent",
      }}
    >
      <Typography variant="caption"> {label} </Typography>
    </Button>
  );
};

export default GridPill;
