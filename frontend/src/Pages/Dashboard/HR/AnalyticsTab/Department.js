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
         EMPLOYEES BY DEPARTMENT
       </Typography>
       <Barchart
        data={data}
      />
       
     </Stack>
  );
};

export default Department;
