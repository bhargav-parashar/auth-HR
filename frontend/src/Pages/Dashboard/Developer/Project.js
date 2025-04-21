import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import SkillPill from "./SkillPill";
import Launch from "@mui/icons-material/Launch";
import AuthHRPic from "../../../assets/authHRPic.png";
import QKartPic from "../../../assets/qKartPic.png";
import MedifyPic from "../../../assets/medifyPic.png";
import ExpensePic from "../../../assets/expenseTrackerPic.png";
import SwiftPic from "../../../assets/swiftPic.png";
import QtifyPic from "../../../assets/qtifyPic.png";
import TaskManagerPic from "../../../assets/taskManagerPic.png";
import WeatherPic from "../../../assets/weatherPic.png";
import BotAiPic from "../../../assets/botAiPic.png";

const Project = ({ item }) => {
  getImage = (label) => {
    if (label === "AuthHR") return AuthHRPic;
    else if (label === "QKart") return QKartPic;
    else if (label === "Medify") return MedifyPic;
    else if (label === "Expense Tracker") return ExpensePic;
    else if (label === "Swift Exit") return SwiftPic;
    else if (label === "QTify") return QtifyPic;
    else if (label === "Task Manager") return TaskManagerPic;
    else if (label === "Weather App") return WeatherPic;
    else if (label === "BotAI") return BotAiPic;
  };
  const handleClick = () => {
    window.open(item.website, "_blank", "noopener,noreferrer");
  };
  return (
    <Box
      p={1}
      mt={2}
      onClick={handleClick}
      sx={{
        bgcolor: "rgb(36, 47, 52)",
        width: "100%",
        borderRadius: "0.6rem",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.015)",
        },
      }}
    >
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Stack gap={3} direction="row" alignItems="center">
          <Box
            component="img"
            sx={{
              width: "20%",
              maxHeight: "150px",
              objectFit: "contain",
              borderRadius: "0.6rem",
            }}
            alt="profile"
            src={getImage(item.label)}
          />
          <Stack
            sx={{ width: "80%" }}
            direction="column"
            alignItems="flex-start"
            gap={1}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              gap={1}
              alignItems="center"
              sx={{ width: "100%" }}
            >
              <Stack direction="row" gap={1} alignItems="center">
                <Typography textAlign="justify" variant="body1">
                  {item.label}
                </Typography>
                <Box
                  sx={{
                    display: "inline-block",
                    px: 1,
                    borderRadius: "0.6rem",
                    border: "2px solid",
                    borderColor: "primary.badge",
                  }}
                >
                  <Typography variant="caption">{item.tag}</Typography>
                </Box>
              </Stack>
              <Stack direction="row" gap={1} alignItems="center">
                <Button
                  endIcon={<Launch />}
                  size="small"
                  variant="outlined"
                  sx={{ bgcolor: "transparent" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(item.code, "_blank", "noopener,noreferrer");
                  }}
                >
                  View Code
                </Button>
                <Button
                  endIcon={<Launch />}
                  size="small"
                  variant="outlined"
                  sx={{ bgcolor: "transparent" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(item.website, "_blank", "noopener,noreferrer");
                  }}
                >
                  Website
                </Button>
              </Stack>
            </Stack>

            <Typography
              color="text.subHeader"
              textAlign="justify"
              variant="caption"
            >
              {item.about}
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              gap={0.5}
              flexWrap="wrap"
            >
              {item.skills.map((skill) => (
                <SkillPill key={skill.id} label={skill.label} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Box>

      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Stack gap={3} direction="row" alignItems="center">
          <Box
            component="img"
            sx={{
              width: "40%",
              maxHeight: "150px",
              objectFit: "contain",
              borderRadius: "0.6rem",
            }}
            alt="profile"
            src={getImage(item.label)}
          />
         
        </Stack>
      </Box>
    
    </Box>
  );
};

export default Project;
