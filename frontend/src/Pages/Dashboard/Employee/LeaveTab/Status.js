import { Box, Stack, Paper, Typography } from "@mui/material";
import StepHeader from "../../../../components/StepHeader/StepHeader";
import { leaveSteps } from "../../../../constants/constants";
import resign_submit from "../../../../assets/resign_submit.svg";
import StatusMobile from "./StatusMobile";
import Calendar from "../../../../components/Calendar/Calendar";
import dayjs from "dayjs";
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
            header={"Apply Leave"}
            activeStep={leaveSteps.length + 1}
            steps={leaveSteps}
          />
          <Stack
            p={1}
            mb={2}
            justifyContent="center"
            sx={{
              width: "100%",
              bgcolor: "primary.successLight",
              border: "1.5px solid ",
              borderColor: "primary.success",
              height: "6%",
              borderRadius: "0.6rem",
            }}
          >
            <Typography sx={{ color: "primary.success" }}>
              Leave request successfully submitted !
            </Typography>
          </Stack>
          <Box
            mt={1}
            p={0.1}
            sx={{
              bgcolor: "primary.bg1",
              height: "70%",
              borderRadius: "0.6rem",
            }}
          >
            <Stack
              m={2}
              px={2}
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
                <Typography variant="body2" pl={1}>
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
            <Stack
              m={2}
              alignItems="center"
              justifyContent="space-between"
              direction="row"
              gap={1}
              sx={{ height: "80%" }}
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
                  direction='row-reverse'
                  alignItems='center'
                  sx={{
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
                <Box
                  flex={1}
                  sx={{
                    height: "100%",
                    borderRadius: "0.6rem",
                    bgcolor: "primary.inactive2",
                  }}
                >
                  <Typography m={2}>{`Leave Requested`}</Typography>
                  <Typography fontWeight="bold" color="text.heading" m={2}>
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
                    alt="resign"
                    src={resign_submit}
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
            <StatusMobile  leave={leave} />
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default Status;
