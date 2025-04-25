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
        height: "95%",
        borderRadius: "0.6rem",
        bgcolor: "primary.inactive3",
        cursor:"pointer",
        boxShadow: " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
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
