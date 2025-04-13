import { Stack, Box, Typography } from "@mui/material";
import DashCard from "../../../../components/Cards/DashCards";

const PendingRequestsSection = ({isLoading, penRequests, setSelectedReqTab}) => {
  
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
        label="Leaves"
        count={penRequests.leaves.length}
        isLoading={isLoading}
        setSelectedReqTab={setSelectedReqTab}
      />
      <DashCard
        label="Relocations"
        count={penRequests.relocations.length}
        isLoading={isLoading}
        setSelectedReqTab={setSelectedReqTab}
      />
      <DashCard
        label="Resignations"
        count={penRequests.resignations.length}
        isLoading={isLoading}
        setSelectedReqTab={setSelectedReqTab}
      />
    </Stack>
  );
};

export default PendingRequestsSection;
