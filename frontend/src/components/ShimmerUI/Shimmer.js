import React from 'react';
import { Box, Stack, Typography } from "@mui/material";

const Shimmer = () => {
  return (
    <Box
      py={{ xs: 0, xl: 5 }}
      px={{ xs: 0, xl: 10 }}
      sx={{
        height: "100vh",
        background:
          "linear-gradient(0deg, rgba(246,228,204,1) 0%, rgba(108,140,181,1) 100%)",
      }}
      direction="row"
      alignItems="center"
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          height: "100%",
        }}
      >
        <Box
          flex={{ xs: 1, md: 3 }}
          sx={{
            background: "lightgray",
            objectFit: "cover",
            borderTopLeftRadius: { xs: "0rem", xl: "0.5rem" },
            borderTopRightRadius: "0rem",
            borderBottomLeftRadius: { xs: "0rem", xl: "0.5rem" },
            overflow: "hidden",
            position: "relative",
          }}
        >
          
        </Box>
        <Box
          sx={{
            overflow: "hidden",
            backgroundColor: "gray",
            backdropFilter: "blur(8px)",
            borderTopRightRadius: { xs: "0rem", xl: "0.5rem" },
            borderBottomLeftRadius: { xs: "0rem", xl: "0rem" },
            borderBottomRightRadius: { xs: "0rem", xl: "0.5rem" },
            padding: { xs: "5%", md: "2%" },
          }}
          flex={{ xs: 3, md: 1 }}
        >
          
          <Box
            direction="row"
            justifyContent="center"
            sx={{
              position: "absolute",
              bottom: "3%",
              left: "1%",
              right: "1%",
              display: "flex",
              justifyContent: "center",
            }}
          >
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default Shimmer
