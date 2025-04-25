import React from "react";
import { Box, Typography, Stack, Paper, ListItem } from "@mui/material";

const SkillPill = ({ label }) => {
  return (
    <Box
      sx={{
        display: "inline-block",
        px: 2,
        borderRadius: "999px",
        fontWeight: 500,
        bgcolor:'primary.badge'
      }}
    >
      <Typography variant="caption" sx={{ m: 0 }}>
        {label}
      </Typography>
    </Box>
  );
};

export default SkillPill;
