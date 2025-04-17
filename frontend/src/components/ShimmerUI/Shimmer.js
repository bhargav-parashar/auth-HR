import { Box, Skeleton, Stack } from "@mui/material";

const Shimmer = ({ cover, fullScreen }) => {
  return (
    <Box p={fullScreen?"10px":'0px'} sx={{ height:fullScreen? "95vh" : "100%",  width: "100%" }}>
      {!cover && (
        <Box pt={2} sx={{ height: "100%" }}>
          <Box sx={{ height: "100%" }}>
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
        </Box>
      )}
      {cover && <Skeleton sx={{ height:'100%',  bgcolor: "primary.shimmer" }} />}
      {
        fullScreen && (
        <Stack>
          <Skeleton sx={{ height:'100%',  bgcolor: "primary.shimmer" }}/>  
        </Stack>)
      }
    </Box>
  );
};

export default Shimmer;
