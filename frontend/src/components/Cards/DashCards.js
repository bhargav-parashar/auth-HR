import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const DashCards = () => {
  return (
    <Box p={2} sx={{ border: "2px solid black", width: "30%", height: "30%" }}>
      <Stack direction="column">
        <Typography>7</Typography>
        <Typography>Leave Requests</Typography>
        <Typography>7</Typography>
      </Stack>
    </Box>
  );
};

export default DashCards;
