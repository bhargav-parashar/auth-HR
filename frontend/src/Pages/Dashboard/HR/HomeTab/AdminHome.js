import React from "react";
import { Stack, Box } from "@mui/material";
import PendingRequestsSection from "./PendingRequestsSection";
import CalendarSection from "./CalendarSection";
import CreateAnnouncement from "./CreateAnnouncement";
import InfoCardSection from "./InfoCardSection";

const AdminHome = ({
  totalEmployees,
  avgLeaveBal,
  attrition,
  currMonthHires,
  isLoading,
}) => {
  return (
    <Box
      sx={{
        height: "100%",
        overflowY: "auto",
        paddingX: 2,
      }}
    >
      <Box sx={{ height: "70%", display: { xs: "none", md: "block" } }}>
        <PendingRequestsSection />
        <Stack
          mb={2}
          gap={1}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%", height: "100%" }}
        >
          <InfoCardSection
            totalEmployees={totalEmployees}
            avgLeaveBal={avgLeaveBal}
            attrition={attrition}
            currMonthHires={currMonthHires}
            isLoading={isLoading}
          />
          <CalendarSection  isLoading  = {isLoading} />
          <CreateAnnouncement isLoading  = {isLoading} />
        </Stack>
      </Box>
    </Box>
  );
};

export default AdminHome;
