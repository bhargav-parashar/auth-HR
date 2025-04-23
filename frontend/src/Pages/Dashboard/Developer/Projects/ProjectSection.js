import React from "react";
import { Box, Typography} from "@mui/material";
import { skills } from "../../../../constants/constants";
import Project from "./Project";

const ProjectSection = () => {
  return (
    <Box>
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

export default ProjectSection;
