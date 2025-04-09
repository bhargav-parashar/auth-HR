import React from "react";
import { Typography, Stack } from "@mui/material";
import ReqPerDept from "../../../../components/Barchart/ReqPerDept";

const Requests = () => {
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
        sx={{ width: "100%", height: "20%", fontSize: "1.1rem" }}
      >
        REQUESTS PER DEPARTMENT
      </Typography>
      <ReqPerDept
        data={[
          { department: "Finance", leave: 5, relocation: 1, resignation: 2 },
          { department: "IT", leave: 10, relocation: 2, resignation: 1 },
          { department: "Marketing", leave: 6, relocation: 1, resignation: 2 },
          { department: "Operations", leave: 8, relocation: 2, resignation: 3 }
        ]}
      />
    </Stack>
  );
};

export default Requests;
