import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { skills } from "../../../../constants/constants";

const Intro = () => {
  return (
    <Box>
      <Box sx={{ width: "100%", display: { xs: "none", md: "block" } }}>
        <Typography
          sx={{ transform: "scaleX(1.3)", transformOrigin: "left" }}
          fontWeight="bold"
          variant="h3"
        >
          FULLSTACK
        </Typography>
        <Typography
          color="text.subHeader"
          sx={{ transform: "scaleX(1.3)", transformOrigin: "left" }}
          fontWeight="bold"
          variant="h3"
        >
          DEVELOPER
        </Typography>
      </Box>
      <Box sx={{ width: "100%", display: { xs: "block", md: "none" } }}>
        <Typography
          sx={{ transform: "scaleX(1.3)", transformOrigin: "left" }}
          fontWeight="bold"
          variant="h4"
        >
          FULLSTACK
        </Typography>
        <Typography
          color="text.subHeader"
          sx={{ transform: "scaleX(1.3)", transformOrigin: "left" }}
          fontWeight="bold"
          variant="h4"
        >
          DEVELOPER
        </Typography>
      </Box>
      <Box mt={2} sx={{ width: "100" }}>
        <Typography color="text.subHeader" textAlign="justify" variant="body1">
          {skills.about}
        </Typography>
      </Box>
    </Box>
  );
};

export default Intro;
