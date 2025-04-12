import { Stack, Box, Typography } from "@mui/material";
import useGetPendingRequests from "../../../../Hooks/useGetPendingRequests";
import DashCard from "../../../../components/Cards/DashCards";
import Shimmer from "../../../../components/ShimmerUI/Shimmer";

const PendingRequestsSection = () => {
  const { isLoading, penRequests } = useGetPendingRequests();

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
      />
      <DashCard
        label="Relocations"
        count={penRequests.relocations.length}
        isLoading={isLoading}
      />
      <DashCard
        label="Resignations"
        count={penRequests.resignations.length}
        isLoading={isLoading}
      />
    </Stack>
  );
};

export default PendingRequestsSection;
