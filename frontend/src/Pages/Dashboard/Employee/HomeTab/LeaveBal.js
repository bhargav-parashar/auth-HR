import { Box, Stack, Paper, Typography } from "@mui/material";
import Progress from "../../../../components/Progress/Progress";

const LeaveBal = ({user, isMobile}) => {
  

  return (
    <Box
      p={2}
      flex={1}
      sx={{
        height: "50%",
        borderRadius: "0.6rem",
        bgcolor: "primary.inactive3",
        boxShadow:" rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
      }}
    >
     <Typography pt={1}  variant={isMobile?"h6":"h5"}>Leave Balance</Typography>
      <Stack  mt={2} direction="row">
        <Stack gap={2} justifyContent="center" sx={{ minWidth: "100px" }}>
          <Typography
            fontWeight="bold"
            color="primary.light"
            variant="body2"
            mr={1}
          >{`Earned Leave`}</Typography>
          <Typography
            fontWeight="bold"
            color="primary.light"
            variant="body2"
            mr={1}
          >{`Sick Leave`}</Typography>
          <Typography
            fontWeight="bold"
            color="primary.light"
            variant="body2"
            mr={1}
          >{`Casual Leave`}</Typography>
        </Stack>
        <Stack gap={2} justifyContent="center" sx={{ width: "10%" }}>
          <Typography
            fontWeight="bold"
            color="primary.inactive"
            variant="body2"
            mr={1}
          >{`:`}</Typography>
          <Typography
            fontWeight="bold"
            color="primary.inactive"
            variant="body2"
            mr={1}
          >{`:`}</Typography>
          <Typography
            fontWeight="bold"
            color="primary.inactive"
            variant="body2"
            mr={1}
          >{`:`}</Typography>
        </Stack>
        <Stack gap={1} justifyContent="center" sx={{ width: "100%" }}>
         <Progress currValue={user?.leaveBal?.earned}/>
         <Progress currValue={user?.leaveBal?.sick}/>
         <Progress currValue={user?.leaveBal?.casual}/>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LeaveBal;
