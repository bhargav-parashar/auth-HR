import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { skills } from "../../../constants/constants";
import SkillPill from "./SkillPill";
import Project from "./Project";

const Information = () => {
  return (
    <Box px={1} sx={{ width: "100%", height: "100%", overflowX: "clip" }}>
      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{ transform: "scaleX(1.3)", transformOrigin: "left" }}
          fontWeight="bold"
          variant="h3"
        >
          FULLSTACK
        </Typography>
        <Typography
          color="text.subHeader"
          sx={{ transform: "scaleX(1.3)", transformOrigin: "left" }}
          fontWeight="bold"
          variant="h3"
        >
          DEVELOPER
        </Typography>
      </Box>
      <Box mt={2} sx={{ width: "100" }}>
        <Typography color="text.subHeader" textAlign="justify" variant="body1">
          {skills.about}
        </Typography>
      </Box>
      <Box
        mt={2}
        sx={{
          width: "100",
          transform: "scaleX(1.3)",
          transformOrigin: "left",
        }}
      >
        <Typography textAlign="justify" variant="h6">
          SKILLS
        </Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box mt={1} sx={{ width: "100" }}>
          <Stack direction="row" alignItems="flex-start" gap={2}>
            <Box sx={{ width: { xs: "130px", md: "80px" } }}>
              <Typography
                color="text.subHeader"
                textAlign="justify"
                variant="body1"
              >
                Frontend
              </Typography>
            </Box>
            <Stack
              direction="row"
              alignItems="center"
              gap={0.5}
              flexWrap="wrap"
            >
              {skills.frontEnd.map((skill) => (
                <SkillPill key={skill.id} label={skill.label} />
              ))}
            </Stack>
          </Stack>
        </Box>

        <Box mt={2} sx={{ width: "100" }}>
          <Stack direction="row" alignItems="flex-start" gap={2}>
            <Box sx={{ width: { xs: "130px", md: "80px" } }}>
              <Typography
                color="text.subHeader"
                textAlign="justify"
                variant="body1"
              >
                Backend
              </Typography>
            </Box>
            <Stack
              direction="row"
              alignItems="center"
              gap={0.5}
              flexWrap="wrap"
            >
              {skills.backEnd.map((skill) => (
                <SkillPill key={skill.id} label={skill.label} />
              ))}
            </Stack>
          </Stack>
        </Box>

        <Box mt={2} sx={{ width: "100" }}>
          <Stack direction="row" alignItems="flex-start" gap={2}>
            <Box sx={{ width: { xs: "130px", md: "80px" } }}>
              <Typography
                color="text.subHeader"
                textAlign="justify"
                variant="body1"
              >
                Tools
              </Typography>
            </Box>
            <Stack
              direction="row"
              alignItems="center"
              gap={0.5}
              flexWrap="wrap"
            >
              {skills.tools.map((skill) => (
                <SkillPill key={skill.id} label={skill.label} />
              ))}
            </Stack>
          </Stack>
        </Box>
      </Box>

      <Box
        mt={2}
        mb={1}
        sx={{
          width: "100",
          transform: "scaleX(1.3)",
          transformOrigin: "left",
        }}
      >
        <Typography textAlign="justify" variant="h6">
          PROJECTS
        </Typography>
      </Box>

      {skills.projects.map((item) => (
        <Project key={item.id} item={item} />
      ))}
    </Box>
  );
};

export default Information;
