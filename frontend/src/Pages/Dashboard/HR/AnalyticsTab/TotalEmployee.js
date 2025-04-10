import React from 'react';
import {
    Box,
    Typography,
    Stack,
    TextField,
    FormControl,
    Select,
  } from "@mui/material";

const TotalEmployee = ({totalEmployees}) => {
  return (
    <Stack
    alignItems="center"
    flex={1}
    p={1}
    sx={{
      height: "100%",
      borderRadius: "0.6rem",
      bgcolor: "primary.inactive3",
    }}
  >
    <Typography
      textAlign="center"
      sx={{ width: "100%", height: "10%", fontSize: '1.1rem' }}
    
    >
      TOTAL EMPLOYEES
    </Typography>
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", height: "90%" }}
    >
      <Typography
        sx={{ fontSize: "6rem", color: "primary.light" }}
        textAlign="center"
        variant="h6"
      >
        {totalEmployees}
      </Typography>
    </Stack>
  </Stack>
  )
}

export default TotalEmployee
