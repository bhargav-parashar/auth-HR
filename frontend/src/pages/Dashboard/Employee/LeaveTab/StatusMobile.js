import { Box, Stack, Paper, Typography } from "@mui/material";
import resign_submit from "../../../../assets/resign_submit.svg";
import Calendar from "../../../../components/Calendar/Calendar";
import dayjs from "dayjs";


const StatusMobile = ({ leave }) => {
  return (
    <Box sx={{ height: "90%", width: "100%", flexGrow: 1 }}>
      <Stack
        sx={{ height: "90vh", width: "100%" }}
        justifyContent="space-around"
        pb={5}
      >
        <Paper elevation={0} sx={{ height: "100%", width: "100%", p: 2 }}>
          <Box sx={{ height: "15%" }} pb="5%">
            <Typography sx={{ fontWeight: "bold" }} variant="h5" pb={2} pt={5}>
              Apply Leave
            </Typography>
          </Box>
          <Box sx={{ width: "100%", height: "65%" }}>
            <Stack
              justifyContent="center"
              sx={{
                height: "10%",
                width: "100%",
                bgcolor: "primary.successLight",
                border: "1.5px solid ",
                borderColor: "primary.success",
                borderRadius: "0.6rem",
              }}
            >
              <Typography px={1} sx={{ color: "primary.success" }}>
                Leave request successfully submitted !
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              my={1}
              py={4}
              sx={{
                bgcolor: "primary.inactive2",
                borderRadius: "0.6rem",
                height: "10%",
                width: "100%",
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

            <Stack sx={{ height: "75%" }} gap={1}>
              <Stack
                direction='row'
                alignItems='center'
                flex={1}
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
          </Box>

          <Stack
            justifyContent="flex-end"
            alignItems="center"
            sx={{
              position: "relative",
              height: "20%",
            }}
            pt={5}
          >
            <Box
              component="img"
              m={1}
              sx={{
                height: "120px",
                width: "120px",
                bottom: 0,
                right: 0,
                position: "absolute",
              }}
              alt="resign"
              src={resign_submit}
            />
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
};

export default StatusMobile;
