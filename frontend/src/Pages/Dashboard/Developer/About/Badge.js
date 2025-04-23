import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import profilePic from "../../../../assets/profilePicture.jpg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import github from "../../../../assets/github.svg";
import linkedIn from "../../../../assets/linkedin.svg";
import leetcode from "../../../../assets/leetcode.svg";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import Code from "@mui/icons-material/Code";

const Badge = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      px={1}
      pt={2}
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", md: "300px" },
        borderRadius: "0.6rem",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        bgcolor: "primary.badge",
      }}
    >
      {/* PROFILE PIC */}
      <Box
        component="img"
        sx={{
          maxWidth: "50%",
          maxHeight: { xs: "90px", xl: "120px" },
          objectFit: "contain",
          borderRadius: "0.6rem",
        }}
        alt="profile"
        src={profilePic}
      />

      {/* INFO */}
      <Stack
        direction="column"
        alignItems="flex-start"
        sx={{
          maxWidth: 300,
          px: 2,
          pb: 2,
        }}
      >
        {/* Name */}
        <Typography
          color="text.badge"
          variant="h6"
          sx={{ letterSpacing: "1.5px" }}
        >
          Bhargav Parashar
        </Typography>

        {/* WORK EXPERIENCE SECTION */}
        <Box mt={2}>
          <Typography
            color="text.badge"
            variant="body1"
            sx={{ textAlign: "justify", fontWeight: 500 }}
          >
            Work Experience
          </Typography>

          <Stack spacing={0.2}>
            <Stack direction="row" gap={1} alignItems="center">
              <Code
                sx={{ width: "0.8rem", color: "text.badgeSubtext" }}
                fontSize="small"
              />
              <Typography
                variant="caption"
                color="text.badgeSubtext"
                sx={{ fontSize: "0.7rem", textAlign: "justify" }}
              >
                App Development Analyst
              </Typography>
            </Stack>

            <Stack direction="row" gap={1} alignItems="center">
              <WorkHistoryOutlinedIcon
                sx={{ width: "0.8rem", color: "text.badgeSubtext" }}
                fontSize="small"
              />
              <Typography
                variant="caption"
                color="text.badgeSubtext"
                sx={{ fontSize: "0.7rem", textAlign: "justify" }}
              >
                2.3 YOE | Accenture
              </Typography>
            </Stack>
          </Stack>
        </Box>

        {/* CONTACT SECTION */}
        <Box mt={2}>
          <Typography
            color="text.badge"
            variant="body1"
            sx={{ textAlign: "justify", fontWeight: 500 }}
          >
            Contact
          </Typography>

          <Stack spacing={0.2}>
            <Stack direction="row" gap={1} alignItems="center">
              <LocationOnOutlinedIcon
                sx={{ width: "0.8rem", color: "text.badgeSubtext" }}
                fontSize="small"
              />
              <Typography
                color="text.badgeSubtext"
                variant="caption"
                sx={{ fontSize: "0.7rem", textAlign: "justify" }}
              >
                Bengaluru, Karnataka, India
              </Typography>
            </Stack>

            <Stack direction="row" gap={1} alignItems="center">
              <EmailOutlinedIcon
                sx={{ width: "0.8rem", color: "text.badgeSubtext" }}
                fontSize="small"
              />
              <Typography
                color="text.badgeSubtext"
                variant="caption"
                sx={{ fontSize: "0.7rem", textAlign: "justify" }}
              >
                bhargavparashar99@gmail.com
              </Typography>
            </Stack>

            <Stack direction="row" gap={1} alignItems="center">
              <PhoneOutlinedIcon
                sx={{ width: "0.8rem", color: "text.badgeSubtext" }}
                fontSize="small"
              />
              <Typography
                color="text.badgeSubtext"
                variant="caption"
                sx={{ fontSize: "0.7rem", textAlign: "justify" }}
              >
                +91 6001349898
              </Typography>
            </Stack>
          </Stack>
        </Box>

        {/* LINKS SECTION */}
        <Box mt={2}>
          <Typography
            color="text.badge"
            variant="body1"
            sx={{ textAlign: "justify", fontWeight: 500 }}
          >
            Links
          </Typography>

          <Stack direction="row" mt={0.5} gap={1}>
            {/* <Box
              component="a"
              href="https://github.com/bhargav-parashar"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "inline-block",
                width: 18,
                height: 18,
                border: "1px solid white",
                borderRadius: "50%",
                bgcolor: "#f0fff0",
                p: 0.1,
                border: "1px solid",
                borderColor: "text.badge",
              }}
            >
              <Box
                component="img"
                src={github}
                alt="GitHub"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                  borderRadius: "50%",
                }}
              />
            </Box> */}
            <Box
              component="a"
              href="https://github.com/bhargav-parashar"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "inline-block",
                width: 20,
                height: 20,
                border: "1px solid",
                borderColor: "rgb(243, 175, 67)",
                borderRadius: "50%",
                p: 0.1,
                position: "relative",
                overflow: "hidden",
                bgcolor: "rgb(243, 175, 67)",

                background: `linear-gradient(
      60deg,
      #ffd700 25%,
      #ffffff 50%,
      #ffd700 75%
    )`,
                backgroundSize: "200% 200%",
                animation: "shimmerWhite 2s infinite",

                "@keyframes shimmerWhite": {
                  "0%": {
                    backgroundPosition: "200% 0",
                  },
                  "100%": {
                    backgroundPosition: "-200% 0",
                  },
                },
              }}
            >
              <Box
                component="img"
                src={github}
                alt="GitHub"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                  borderRadius: "50%",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </Box>
            <Box
              component="a"
              href="https://www.linkedin.com/in/bhargavparashar/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "inline-block",
                width: 20,
                height: 20,
                border: "1px solid",
                borderColor: "rgb(243, 175, 67)",
                borderRadius: "50%",
                p: 0.1,
                position: "relative",
                overflow: "hidden",
                bgcolor: "rgb(243, 175, 67)",

                background: `linear-gradient(
      60deg,
      #ffd700 25%,
      #ffffff 50%,
      #ffd700 75%
    )`,
                backgroundSize: "200% 200%",
                animation: "shimmerWhite 2s infinite",

                "@keyframes shimmerWhite": {
                  "0%": {
                    backgroundPosition: "200% 0",
                  },
                  "100%": {
                    backgroundPosition: "-200% 0",
                  },
                },
              }}
            >
              <Box
                component="img"
                src={linkedIn}
                alt="GitHub"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                  borderRadius: "50%",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </Box>
            <Box
              component="a"
              href="https://leetcode.com/u/bhp100/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "inline-block",
                width: 20,
                height: 20,
                border: "1px solid",
                borderColor: "rgb(243, 175, 67)",
                borderRadius: "50%",
                p: 0.1,
                position: "relative",
                overflow: "hidden",
                bgcolor: "rgb(243, 175, 67)",

                background: `linear-gradient(
      60deg,
      #ffd700 25%,
      #ffffff 50%,
      #ffd700 75%
    )`,
                backgroundSize: "200% 200%",
                animation: "shimmerWhite 2s infinite",

                "@keyframes shimmerWhite": {
                  "0%": {
                    backgroundPosition: "200% 0",
                  },
                  "100%": {
                    backgroundPosition: "-200% 0",
                  },
                },
              }}
            >
              <Box
                component="img"
                src={leetcode}
                alt="GitHub"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                  borderRadius: "50%",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Badge;
