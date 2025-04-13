import { Box, Stack, Paper, Typography } from "@mui/material";
import StepHeader from "../../../../components/StepHeader/StepHeader";
import { leaveSteps } from "../../../../constants/constants";
import relax from "../../../../assets/relax.svg";
import StatusMobile from "./StatusMobile";
import dayjs from "dayjs";
import Calendar from "../../../../components/Calendar/Calendar";
const Status = ({ leave }) => {
  return (
    <Box sx={{ height: "100%" }}>
      <Paper elevation={1} sx={{ height: "100%", bgcolor: "primary.bg2" }}>
        <Stack
          p={2}
          direction="column"
          sx={{
            borderRadius: "0.6rem",
            height: "100%",
            display: { xs: "none", md: "block" },
          }}
        >
          <StepHeader
            isSubmitted
            header={"Apply Leave"}
            activeStep={leaveSteps.length + 1}
            steps={leaveSteps}
          />

          <Box
            p={2}
            sx={{
              bgcolor: "primary.bg1",
              height: "80%",
              borderRadius: "0.6rem",
            }}
          >
            <Stack
           
              alignItems="center"
              justifyContent="space-between"
              direction="row"
              gap={1}
              sx={{ height: "100%" }}
            >
              <Stack
                flex={2}
                gap={1}
                sx={{
                  height: "100%",
                  width: "100%",
                  border: "2px",
                }}
              >
                <Stack
                  
                  flex={1}
                  direction="row"
                  alignItems="center"
                  justifyContent='center'
                  sx={{
                    position:'relative',
                    bgcolor: "primary.inactive2",
                    overflowY: "clip",
                    height: "100%",
                    borderRadius: "0.6rem",
                  }}
                >
                  <Calendar
                    startDate={dayjs(leave[0].startDate)}
                    endDate={dayjs(leave[0].endDate)}
                  />
                </Stack>
              </Stack>
              <Stack
                direction="column"
                flex={1}
                gap={1}
                sx={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <Stack
                  px={2}
                  py={2}
                  alignItems="center"
                  justifyContent="flex-end"
                  direction="row"
                  sx={{
                    height: "10%",
                    bgcolor: "primary.inactive2",
                    borderRadius: "0.6rem",
                  }}
                >
                  <Stack direction="row" sx={{ width: "100%" }}>
                    <Typography variant="body2" >
                      Status :
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      color="text.heading"
                      px={1}
                    >
                      {leave[0].status}
                    </Typography>
                  </Stack>
                </Stack>
                <Box
                  flex={1}
                  sx={{
                    height: "100%",
                    borderRadius: "0.6rem",
                    bgcolor: "primary.inactive2",
                  }}
                >
                  <Typography mt={2} mx={2}>{`Leave Requested`}</Typography>
                  <Typography
                    mb={2}
                    mx={2}
                    fontWeight="bold"
                    color="text.heading"
                  >
                    {leave[0]?.leaveType}
                  </Typography>
                </Box>
                <Box
                  flex={3}
                  sx={{
                    position: "relative",
                    height: "100%",
                    borderRadius: "0.6rem",
                    bgcolor: "primary.inactive2",
                  }}
                >
                  <Box
                    component="img"
                    m={1}
                    sx={{
                      height: "80%",
                      width: "80%",
                      bottom: 0,
                      right: 0,
                      position: "absolute",
                    }}
                    alt="relax"
                    src={relax}
                    display={{ xs: "none", md: "block" }}
                  />
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        <Box
          pt={3}
          sx={{
            height: "100%",
            display: { xs: "block", md: "none" },
          }}
        >
          <Stack
            sx={{ height: "90%" }}
            justifyContent="center"
            alignItems="center"
          >
            <StatusMobile leave={leave} />
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default Status;
