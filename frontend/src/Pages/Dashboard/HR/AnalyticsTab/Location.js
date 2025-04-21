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

const Location = ({ locationMap, totalEmployees }) => {
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
        height: "95%",
        borderRadius: "0.6rem",
        bgcolor: "primary.inactive3",
        cursor:"pointer", 
        boxShadow: " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
      }}
      p={1}
    >
      <Typography
        textAlign="center"
        sx={{ width: "100%", height: "20%", fontSize: "1.1rem" }}
      >
        EMPLOYEES BY LOCATION
      </Typography>

      <PieChartComponent  data={data} />
    </Stack>
  );
};

export default Location;
