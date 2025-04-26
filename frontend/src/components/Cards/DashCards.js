import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import Shimmer from "../ShimmerUI/Shimmer";
import CircleIcon from '@mui/icons-material/Circle';

const DashCard = ({ isMobile, label, count, isLoading, setSelectedReqTab,selectedReqTab }) => {
  const handleclick = () => {
    setSelectedReqTab(label);
  };
  
  return (
    <Box
      mt={ isMobile? 5: 0}
      onClick={handleclick}
      sx={{ height: "100%", width: "100%", cursor: "pointer" }}
    >
      {isLoading && (
        <Box
          sx={{
            width: "100%",
            cursor: "pointer",
            height: isMobile?"80px" :"103px",
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
            minHeight: isMobile?"80px":"93px",
            bgcolor:selectedReqTab === label ? "rgb(70, 62, 220)" : "#8884d8",
            transition: 'transform 0.3s ease, background-color 0.3s ease',
            '&:hover': {
              transform: 'scale(1.015)',
              backgroundColor: "rgb(70, 62, 220)"
            },
            boxShadow: " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
          }}
        >
          <Box sx={{ height: "100%" }}>
            <Stack gap={1} alignItems='center' justifyContent="flex-start" direction='row' sx={{width:'100%'}} >
            <Typography mb={1}>{label}</Typography>
            {
              count > 0 &&
              <CircleIcon  sx={{  color:'rgb(217, 85, 29)', marginBottom:1, height:'10px', width:'10px'}} /> 
            }
            </Stack>
            

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
