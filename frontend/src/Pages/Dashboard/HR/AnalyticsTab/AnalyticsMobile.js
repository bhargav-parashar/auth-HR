import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import TotalEmployee from "./TotalEmployee";
import Location from "./Location";
import Department from "./Department";
import Requests from "./Requests";
import Shimmer from "../../../../components/ShimmerUI/Shimmer";

const ShimmerUI = () => {
  return (
    <Box
      alignItems="center"
      flex={1}
      p={1}
      sx={{
        height: "100%",
        borderRadius: "0.6rem",
        bgcolor: "primary.inactive3",
      }}
    >
      <Shimmer />
    </Box>
  );
};

const AnalyticsMobile = ({
  deptMap,
  groupedByDepartment,
  totalEmployees,
  locationMap,
  isLoading,
}) => {
  return (
    <Box mt={5} sx={{ height: "100%", display: { xs: "block", md: "none" } }}>
      <Stack gap={1} px={2} sx={{ height: "120%" }}>
        {/* TOTAL EMPLOYEES CARD */}
        {isLoading ? (
          <ShimmerUI />
        ) : (
          <TotalEmployee totalEmployees={totalEmployees} />
        )}

        {/* EMPLOYEES BY LOCATION CARD */}
        {isLoading ? (
          <ShimmerUI />
        ) : (
          <Location isMobile locationMap={locationMap} totalEmployees={totalEmployees} />
        )}
        {/* EMPLOYEES BY DEPARTMENT CARD */}
        {isLoading ? <ShimmerUI /> : <Department deptMap={deptMap} />}

        {/* REQUESTS BY DEPARTMENT CARD */}
        {isLoading ? (
          <ShimmerUI />
        ) : (
          <Requests groupedByDepartment={groupedByDepartment} />
        )}
      </Stack>
    </Box>
  );
};

export default AnalyticsMobile;
