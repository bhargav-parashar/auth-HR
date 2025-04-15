import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import Shimmer from "../ShimmerUI/Shimmer";

const DashInfoCard = ({ label, value, isLoading }) => {
  return (
    <Box
      p={1}
      sx={{
        height: "100%",
        width: "100%",
        borderRadius: "0.6rem",
        bgcolor:'primary.bg1',
        transition: 'transform 0.3s ease, background-color 0.3s ease',
        '&:hover': {
          transform: 'scale(1.015)',
          //color: selectedReqTab !== label ? "primary.light" : "",
          backgroundColor: 'primary.contrast'
        }
      }}
    >
      {!isLoading && (
        <Stack sx={{ height: "100%" }} alignItems="center">
          <Typography mt={1} sx={{ height: "10%" }} variant="body2">
            {label}
          </Typography>
          <Stack justifyContent="center" sx={{ height: "90%" }}>
            <Typography variant="h4">{value}</Typography>
          </Stack>
        </Stack>
      )}
      {isLoading && <Shimmer cover />}
    </Box>
  );
};

export default DashInfoCard;
