import React from "react";
import { Box, Stack, Container, colors, Typography } from "@mui/material";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import RequestCards from "../../components/Sections/RequestCards";
import RequestGrid from "../../components/Sections/RequestGrid";

const Dashboard = () => {
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
        <Box flex={1} sx={{ border: "2px solid black", display:{xs:'none', md:'block'} }}>
          <Sidebar />
        </Box>
        <Box flex={5} sx={{ border: "2px solid black" }}>
          <Header />
          <Stack mt={4} px={4} direction="column" gap={4}>
            <RequestCards />
            <RequestGrid />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Dashboard;
