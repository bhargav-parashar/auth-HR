import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import Shimmer from "../ShimmerUI/Shimmer";

const DashInfoCard = ({ label, value, isLoading}) => {
  getBg=(label)=>{
    if(isLoading) return "";
    else if(label === "Current Month Hires"){
      return "rgb(59, 165, 100)";
    }else if(label === "Attrition Rate"){
      return "rgb(253, 113, 113)";
    }else if(label === "Total Employees"){
      return "rgb(72, 139, 216)";
    }else if(label === "Avg Leave Balance"){
      return "rgb(212, 154, 19)";
    }
  }
  getBgHighlight=(label)=>{
    if(isLoading) return "";
    else if(label === "Current Month Hires"){
      return "rgb(4, 143, 57)";
    }else if(label === "Attrition Rate"){
      return  "rgb(246, 82, 82)";
    }else if(label === "Total Employees"){
      return "rgb(28, 107, 197)";
    }else if(label === "Avg Leave Balance"){
      return "rgb(212, 122, 19)";
    }
  }
  return (
    <Box
      p={1}
      
      sx={{
        height: "100%",
        width: "100%",
        borderRadius: "0.6rem",
        bgcolor: getBg(label),
        transition: 'transform 0.3s ease, background-color 0.3s ease',
        '&:hover': {
          transform: 'scale(1.015)',
          backgroundColor: getBgHighlight(label)
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
