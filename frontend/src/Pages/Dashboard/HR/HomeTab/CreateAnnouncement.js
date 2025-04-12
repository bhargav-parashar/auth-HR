import { Box, Typography } from "@mui/material";
import Shimmer from "../../../../components/ShimmerUI/Shimmer";

const CreateAnnouncement = ({ isLoading }) => {
  return (
    <Box
      sx={{
        borderRadius: "0.6rem",
        border: "2px solid white",
        width: "100%",
        cursor: "pointer",
        height: "100%",
      }}
    >
      {isLoading && <Shimmer cover />}
      {!isLoading && <Typography  p={1}>Announcements</Typography>}
    </Box>
  );
};

export default CreateAnnouncement;
