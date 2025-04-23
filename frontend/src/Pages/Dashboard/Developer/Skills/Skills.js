import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { skills } from "../../../../constants/constants";
import SkillPill from "./SkillPill";

const Skills = () => {
  return (
    <Box>
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

      <Stack mt={1}  sx={{ width: "100%" }} gap={1} direction={{xs:'column', md:'row'}}>
        <Stack sx={{ width: "20%" }} direction="column">
          <Typography
            color="text.subHeader"
            textAlign="justify"
            variant="body1"
          >
            Frontend
          </Typography>
        </Stack>

        <Stack sx={{ width: "80%" }} direction={{xs:'column', md:'row'}}>
          <Stack direction="row" alignItems="center" gap={0.5} flexWrap="wrap">
            {skills.frontEnd.map((skill) => (
              <SkillPill key={skill.id} label={skill.label} />
            ))}
          </Stack>
        </Stack>
      </Stack>

      <Stack mt={1}  sx={{ width: "100%" }} gap={1} direction={{xs:'column', md:'row'}}>
        <Stack sx={{ width: "20%" }} direction="column">
          <Typography
            color="text.subHeader"
            textAlign="justify"
            variant="body1"
          >
            Backend
          </Typography>
        </Stack>
        <Stack sx={{ width: "80%" }} direction="column">
          <Stack direction="row" alignItems="center" gap={0.5} flexWrap="wrap">
            {skills.backEnd.map((skill) => (
              <SkillPill key={skill.id} label={skill.label} />
            ))}
          </Stack>
        </Stack>
      </Stack>
      <Stack mt={1}  sx={{ width: "100%" }} gap={1} direction={{xs:'column', md:'row'}}>
        <Stack sx={{ width: "20%" }} direction="column">
          <Typography
            color="text.subHeader"
            textAlign="justify"
            variant="body1"
          >
            Tools
          </Typography>
        </Stack>
        <Stack sx={{ width: "80%" }} direction="column">
          <Stack direction="row" alignItems="center" gap={0.5} flexWrap="wrap">
            {skills.tools.map((skill) => (
              <SkillPill key={skill.id} label={skill.label} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Skills;
