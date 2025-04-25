import React from "react";
import { Box, Stack, Paper } from "@mui/material";
import Badge from "./Badge";
import Information from "./Information";

const AboutDeveloper = () => {
  return (
    <Box sx={{ height: "100%", overflowY: { xs: "auto", md: "clip" } }}>
      <Paper
        elevation={1}
        sx={{
          height: "100%",
          bgcolor: "primary.boxBg",
          overflowY: { xs: "auto", md: "clip" },
        }}
      >
        <Stack
          p={2}
          gap={3}
          mt={{ xs: 5, md: 0 }}
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "center", md: "flex-start" }}
          sx={{ width: "100%", height: "100%" }}
        >
          <Box
            sx={{
              borderRadius: "0.6rem",
              width: { xs: "100%", md: "25%" },
            }}
          >
            <Badge />
          </Box>

          <Box
            sx={{
              borderRadius: "0.6rem",
              width: { xs: "100%", md: "75%" },
              height: "100%",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
              },
              scrollbarWidth: "thin",
              scrollbarColor: "#888 transparent",
            }}
          >
            <Information />
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default AboutDeveloper;
