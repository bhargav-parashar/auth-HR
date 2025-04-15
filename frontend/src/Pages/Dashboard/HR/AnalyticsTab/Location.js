import React from "react";
import {
  Box,
  Typography,
  Stack,
  TextField,
  FormControl,
  Select,
} from "@mui/material";
import PieChartComponent from "../../../../components/Piechart/Piechart";

const Location = ({ locationMap, totalEmployees, isMobile }) => {
  const data = [];
  for (let [key, val] of locationMap) {
    let percent = Number(((val / totalEmployees) * 100).toFixed(2));
    data.push({ location: key, employees: percent });
  }
  
  return (
    <Stack
      alignItems="center"
      flex={1}
      sx={{
        height: "100%",
        borderRadius: "0.6rem",
        bgcolor: "primary.inactive3",
        cursor:"pointer",
        
      }}
      p={1}
    >
      <Typography
        textAlign="center"
        sx={{ width: "100%", height: "20%", fontSize: "1.1rem" }}
      >
        EMPLOYEES BY LOCATION
      </Typography>

      <PieChartComponent isMobile={isMobile} data={data} />
    </Stack>
  );
};

export default Location;
