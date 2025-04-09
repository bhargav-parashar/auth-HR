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

const Department = () => {
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
        data={[
          { department: "Finance", employees: 42 },
          { department: "IT", employees: 15 },
          { department: "Marketing", employees: 20 },
          { department: "Operations", employees: 15 }
        ]}
      />
       
     </Stack>
  );
};

export default Department;
