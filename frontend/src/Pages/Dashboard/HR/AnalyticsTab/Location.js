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

const Location = () => {
  return (
    <Stack
      alignItems="center"
      flex={1}
      sx={{
        height: "100%",
        borderRadius: "0.6rem",
        bgcolor: "primary.inactive3",
      }}
      p={1}
    >
      <Typography
        textAlign="center"
        sx={{ width: "100%", height: "20%", fontSize: "1.1rem" }}
      >
        EMPLOYEES BY LOCATION
      </Typography>

      <PieChartComponent
        data={[
          { location: "New York", employees: 40 },
          { location: "London", employees: 25 },
          { location: "Berlin", employees: 20 },
          { location: "Tokyo", employees: 15 },
        ]}
      />
    </Stack>
  );
};

export default Location;
