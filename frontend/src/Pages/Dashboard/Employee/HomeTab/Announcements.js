import { Box, Stack, Paper, Typography } from "@mui/material";
import avatar from "../../../../assets/avatar.svg";
import { format } from "date-fns";
import { keyframes } from "@emotion/react";
import CampaignIcon from "@mui/icons-material/Campaign";

const scrollUp = keyframes`
  0% { transform: translateY(100%); }
  100% { transform: translateY(-100%); }
`;

const Announcements = ({ user }) => {
  const announcements = [
    "Server maintenance tonight at 11 PM.",
    "New HR policy rolled out today.",
    "Employee of the month: John Doe!",
    "Remember to submit your timesheets by Friday.",
  ];
  return (
    <Box
      p={1}
      flex={1}
      sx={{
        height: "50%",
        borderRadius: "0.6rem",
        bgcolor: "primary.inactive3",
        boxShadow:
          " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      }}
    >
      <Typography mb={2} pt={1} pl={1} variant="h5">
        Announcements
      </Typography>
      <Paper
        sx={{
          overflow: "hidden",
          height: "100px",
          position: "relative",
          backgroundColor: "background.paper",
          padding: 1,
        }}
      >
        <Box
          sx={{
            display: "inline-block",
            animation: `${scrollUp} 10s linear infinite`,
            "&:hover": {
              animationPlayState: "paused",
              cursor: "pointer",
            },
          }}
        >
          {announcements.map((text, index) => (
            <Stack direction='row' alignItems='center' gap={1}>
                <CampaignIcon sx={{color:'primary.light'}}/>
              <Typography key={index} variant="body2" sx={{ paddingY: 1 }}>
                {text}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default Announcements;
