import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import SkillPill from "../Skills/SkillPill";
import Launch from "@mui/icons-material/Launch";
import AuthHRPic from "../../../../assets/authHrPic.png";
import QKartPic from "../../../../assets/qKartPic.png";
import MedifyPic from "../../../../assets/medifyPic.png";
import ExpensePic from "../../../../assets/expenseTrackerPic.png";
import SwiftPic from "../../../../assets/swiftPic.png";
import QtifyPic from "../../../../assets/qtifyPic.png";
import TaskManagerPic from "../../../../assets/taskManagerPic.png";
import WeatherPic from "../../../../assets/weatherPic.png";
import BotAiPic from "../../../../assets/botAiPic.png";
import ShimmerButton from "../../../../components/ButtonLayout/ShimmerButton2";

const Project = ({ item }) => {
  const getImage = (label) => {
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
        bgcolor: "primary.box",
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
              objectFit: "fill",
              borderRadius: "0.6rem",
            }}
            alt={item.label}
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
                <Typography
                  color="honeyDew"
                  textAlign="justify"
                  variant="body1"
                >
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
                  <Typography color="honeyDew" variant="caption">
                    {item.tag}
                  </Typography>
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
                  Code
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
                  Site
                </Button>
                {item.label == "AuthHR" && (
                  <ShimmerButton
                    handleClick={(e) => {
                      e.stopPropagation();
                      window.open(
                        item.walkthrough,
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }}
                    endIcon={<YouTubeIcon />}
                    label="Demo"
                  />
                )}
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
        <Stack gap={1} direction="row" alignItems="center">
          <Box
            component="img"
            sx={{
              width: "38%",
              maxHeight: "150px",
              objectFit: "contain",
              borderRadius: "0.6rem",
            }}
            alt="profile"
            src={getImage(item.label)}
          />
          <Box sx={{ height: "100%", width: "60%" }}>
            <Stack direction="row" gap={1} alignItems="center">
              <Typography color="honeyDew" textAlign="justify" variant="body2">
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
                <Typography color="honeyDew" variant="caption">
                  {item.tag}
                </Typography>
              </Box>
            </Stack>
            <Stack mt={1} direction="row" gap={1} alignItems="center">
              <Button
                endIcon={<Launch />}
                size="small"
                variant="outlined"
                sx={{ bgcolor: "transparent", fontSize: "0.6rem" }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(item.code, "_blank", "noopener,noreferrer");
                }}
              >
                Code
              </Button>
              <Button
                endIcon={<Launch />}
                size="small"
                variant="outlined"
                sx={{ bgcolor: "transparent", fontSize: "0.6rem" }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(item.website, "_blank", "noopener,noreferrer");
                }}
              >
                Site
              </Button>
              {item.label == "AuthHR" && (
                <ShimmerButton
                  handleClick={(e) => {
                    e.stopPropagation();
                    window.open(
                      item.walkthrough,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                  endIcon={<YouTubeIcon />}
                  label="Demo"
                />
              )}
            </Stack>
          </Box>
        </Stack>
        <Stack mt={1} direction="row" gap={1} alignItems="center">
          <Typography color="text.subHeader" textAlign="left" variant="caption">
            {item.about}
          </Typography>
        </Stack>
        <Stack
          mt={1}
          direction="row"
          alignItems="center"
          gap={0.5}
          flexWrap="wrap"
        >
          {item.skills.map((skill) => (
            <SkillPill key={skill.id} label={skill.label} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Project;
