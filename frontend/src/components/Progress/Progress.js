import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

export default function Progress({ currValue }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setProgress(currValue);
    }, 200);
  }, [currValue]);
  
  return (
    <Box
      sx={{
        border: "1px solid",
        borderRadius: "0.8rem",
        width: "50%",
        height: "24%",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          border: "1px solid white",
          bgcolor: "#9696FF",
          borderRadius: "0.6rem",
          height: "100%",
          transform: `translateX(${progress * 10 - 100}%)`,
          transition: `0.5s ease-in`,
        }}
      >
        <Typography
          p={0.3}
          pr={0.5}
          sx={{ fontSize: "0.8rem" }}
          textAlign="right"
        >
          {progress}
        </Typography>
      </Box>
    </Box>
  );
}
