import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import Shimmer from "../ShimmerUI/Shimmer";

const DashCard = ({ label, count, isLoading, setSelectedReqTab,selectedReqTab }) => {
  handleclick = () => {
    setSelectedReqTab(label);
  };
  
  return (
    <Box
      onClick={handleclick}
      sx={{ height: "100%", width: "100%", cursor: "pointer" }}
    >
      {isLoading && (
        <Box
          sx={{
            width: "100%",
            cursor: "pointer",
            height: "103px",
          }}
        >
          <Shimmer cover />
        </Box>
      )}
      {!isLoading && (
        <Box
          p={1}
          sx={{
            borderRadius: "0.6rem",
            width: "100%",
            cursor: "pointer",
            minHeight: "93px",
            bgcolor:selectedReqTab === label ? "secondary.dark" : "primary.contrast",
            transition: 'transform 0.3s ease, background-color 0.3s ease',
            '&:hover': {
              transform: 'scale(1.015)',
              //color: selectedReqTab !== label ? "primary.light" : "",
              backgroundColor: 'secondary.dark'
            }
          }}
        >
          <Box sx={{ height: "100%" }}>
            <Typography mb={1}>{label}</Typography>

            <Stack
              direction="row"
              alignItems="flex-end"
              justifyContent="space-between"
            >
              <Typography  variant="h4">{count} </Typography>
              <Stack gap={1} direction="row" alignItems="center">
                <Typography variant="caption">Review</Typography>
                <LaunchIcon fontSize="small" />
              </Stack>
            </Stack>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DashCard;
