import { Box, Skeleton } from "@mui/material";

const Shimmer = () => {
  return (
    <Box pt={2} sx={{ height: "100%" }}>
          <Box pb={1} sx={{ width: "100%", height: "20%" }}>
            <Skeleton
              variant="rectangular"
              height="100%"
              sx={{ borderRadius: "8px", bgcolor: "primary.shimmer" }}
            />
          </Box>
          <Box pb={1} sx={{ width: "100%", height: "70%" }}>
            <Skeleton
              variant="rectangular"
              height="100%"
              sx={{ borderRadius: "8px", bgcolor: "primary.shimmer" }}
            />
          </Box>
          <Box pb={1} sx={{ width: "100%", height: "10%" }}>
            <Skeleton
              variant="rectangular"
              height="100%"
              sx={{ borderRadius: "8px", bgcolor: "primary.shimmer" }}
            />
          </Box>
        </Box>
  )
}

export default Shimmer
