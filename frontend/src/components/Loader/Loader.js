import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loader({small=false}) {
  return (
    <Box sx={{ display: "flex", justifyContent:"center", alignItems:"center" }}>
      <CircularProgress size={small?"1rem":'2rem'} style={{color:'white'}}  />
    </Box>
  );
}
