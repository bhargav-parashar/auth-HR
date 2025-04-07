import { Box, Typography } from "@mui/material";
import useGetReqHistory from "../../../../Hooks/useGetReqHistory";
import RequestsGrid from "../../../../components/Grid/RequestsGrid";

const RequestHistory = ({ isMobile }) => {
  const requests = useGetReqHistory();

  return (
    <Box
      p={2}
      flex={1}
      sx={{
        height: "50%",
        borderRadius: "0.6rem",
        bgcolor: "primary.inactive3",
        boxShadow:
          " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      }}
    >
      <Typography mb={2} pt={1} variant={isMobile?"h6":"h5"}>
        Request History
      </Typography>
      <Box
        sx={{
          height: "60%",
          overflowY: "auto",
          scrollbarWidth: "none", 
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <RequestsGrid requests={requests} />
      </Box>
    </Box>
  );
};

export default RequestHistory;
