import React from "react";
import {
  Box,
  Typography,
  Stack,
  TextField,
  FormControl,
  Select,
} from "@mui/material";
import Barchart from "../../../../components/Barchart/Barchart";

const Department = ({deptMap}) => {
  const data = [];
  for (let [key, val] of deptMap) {
    data.push({ department: key, employees: val });
  };
  
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
         EMPLOYEES BY DEPARTMENT
       </Typography>
       <Barchart
        data={data}
      />
       
     </Stack>
  );
};

export default Department;
