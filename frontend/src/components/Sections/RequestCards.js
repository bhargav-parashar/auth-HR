import React from "react";
import { Box, Stack, Typography, Divider } from "@mui/material";
import DashCards from "../Cards/DashCards";

const RequestCards = () => {
  return (
    <Stack
      direction="row"
      sx={{ width: "100%" }}
      justifyContent="space-between"
    >
      <DashCards />
      <DashCards />
      <DashCards />
    </Stack>
  );
};

export default RequestCards;
