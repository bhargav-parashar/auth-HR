import { Stack, Box, Typography } from "@mui/material";
import DashCard from "../../../../components/Cards/DashCards";

const PendingRequestsSection = ({ isMobile, isLoading, penRequests, setSelectedReqTab, selectedReqTab}) => {
  
  return (
    <Stack
      mb={2}
      gap={1}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ width: "100%" }}
    >
      
      <DashCard
        isMobile = {isMobile}
        label="Leaves"
        count={penRequests.leaves.length}
        isLoading={isLoading}
        setSelectedReqTab={setSelectedReqTab}
        selectedReqTab={selectedReqTab}
      />
      <DashCard
        isMobile = {isMobile}
        label="Relocations"
        count={penRequests.relocations.length}
        isLoading={isLoading}
        setSelectedReqTab={setSelectedReqTab}
        selectedReqTab={selectedReqTab}
      />
      <DashCard
        isMobile = {isMobile}
        label="Resignations"
        count={penRequests.resignations.length}
        isLoading={isLoading}
        setSelectedReqTab={setSelectedReqTab}
        selectedReqTab={selectedReqTab}
      />
    </Stack>
  );
};

export default PendingRequestsSection;
