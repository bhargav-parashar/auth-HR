import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import TotalEmployee from "./TotalEmployee";
import Location from "./Location";
import Department from "./Department";
import Requests from "./Requests";
import Shimmer from "../../../../components/ShimmerUI/Shimmer";
import AnalyticsMobile from "./AnalyticsMobile";

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

const Analytics = ({
  totalEmployees,
  isLoading,
  locationMap,
  groupedByDepartment,
  deptMap,
}) => {
  return (
    <Box sx={{ height: "100%", overflowY: "auto" }}>
      <Box sx={{ height: "100%", display: { xs: "none", md: "block" } }}>
        <Stack gap={1} px={2} sx={{ height: "100%" }}>
          <Typography px={2} mb={1} variant="h5">
            Analytics
          </Typography>
          <Stack gap={1} direction="row" sx={{ height: "100%" }}>
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
              <Location
                locationMap={locationMap}
                totalEmployees={totalEmployees}
              />
            )}
          </Stack>
          <Stack gap={1} direction="row" sx={{ height: "100%" }}>
            {/* EMPLOYEES BY DEPARTMENT CARD */}
            {isLoading ? <ShimmerUI /> : <Department deptMap={deptMap} />}

            {/* REQUESTS BY DEPARTMENT CARD */}
            {isLoading ? (
              <ShimmerUI />
            ) : (
              <Requests groupedByDepartment={groupedByDepartment} />
            )}
          </Stack>
        </Stack>
      </Box>
      <AnalyticsMobile
        deptMap={deptMap}
        groupedByDepartment={groupedByDepartment}
        totalEmployees={totalEmployees}
        locationMap={locationMap}
        isLoading={isLoading}
      />
    </Box>
  );
};

export default Analytics;
