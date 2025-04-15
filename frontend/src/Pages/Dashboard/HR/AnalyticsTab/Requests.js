import React from "react";
import { Typography, Stack } from "@mui/material";
import ReqPerDept from "../../../../components/Barchart/ReqPerDept";

const Requests = ({groupedByDepartment}) => {

  return (
  
    <Stack
      alignItems="center"
      flex={1}
      p={1}
      sx={{
        height: "100%",
        borderRadius: "0.6rem",
        bgcolor: "primary.inactive3",
        cursor:"pointer",
       
      }}
    >
      <Typography
        textAlign="center"
        sx={{ width: "100%", height: "20%", fontSize: "1.1rem" }}
      >
        REQUESTS PER DEPARTMENT
      </Typography>
      <ReqPerDept
        data={groupedByDepartment}
      />
    </Stack>
  );
};

export default Requests;
