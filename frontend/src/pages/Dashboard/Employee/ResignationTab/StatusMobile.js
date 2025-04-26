import { Box, Stack, Paper, Typography } from "@mui/material";
import format from "date-fns/format";
import resign_submit from "../../../../assets/resign_submit.svg";

const StatusMobile = ({ resignation }) => {
  return (
    <Box  sx={{ height: "90%", width: "100%",  flexGrow: 1 }}>
      <Stack
        sx={{ height: "90vh", width: "100%" }}
        justifyContent="space-around"
        pb={5}
      >
        <Paper elevation={0} sx={{ height: "100%", width: "100%", p: 2 }}>
          <Box sx={{ height: "15%" }} pb="5%">
            <Typography sx={{ fontWeight: "bold" }} variant="h5" pb={2} pt={5}>
              Submit Resignation
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
                Resignation successfully submitted !
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
                <Typography variant="body2" pl={1}>Status :</Typography>
                <Typography variant="body2" fontWeight='bold' color="text.heading" px={1}>{resignation[0].status}</Typography>
              </Stack>
              <Stack  sx={{ width: "100%" }}>
                <Typography variant="body2" pl={1}>Last working day</Typography>
                <Typography variant="body2" pl={1}  color="text.heading">
                    {resignation[0]?.lwd ? format(resignation[0].lwd, "dd MMM, yyyy") : ""}
                  </Typography>
              </Stack>
            </Stack>
            
            <Stack sx={{ height: "75%" }} gap={1}>
              <Box
                flex={1}
                sx={{
                  bgcolor: "primary.inactive2",
                  overflowY: "clip",
                  height: "100%",
                  borderRadius: "0.6rem",
                }}
              >
                <Typography
                  variant="body2"
                  textAlign="left"
                  m={2}
                >{`1. ${resignation[0].userResponses[0].questionText}`}</Typography>
                <Typography
                  variant="body2"
                  textAlign="left"
                  m={2}
                >{`${resignation[0].userResponses[0].response}`}</Typography>
              </Box>
              <Box
                flex={1}
                sx={{
                  bgcolor: "primary.inactive2",
                  overflowY: "clip",
                  height: "100%",
                  borderRadius: "0.6rem",
                }}
              >
                <Typography
                  variant="body2"
                  textAlign="left"
                  m={2}
                  sx={{ textAlign: "left" }}
                >{`2. ${resignation[0].userResponses[1].questionText}`}</Typography>
                <Typography variant="body2" textAlign="left" m={2}>
                  {resignation[0].userResponses[1].response}
                </Typography>
              </Box>
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
                height: "80%",
                width: "80%",
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
