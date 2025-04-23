import React from "react";
import { Box} from "@mui/material";
import Skills from "../Skills/Skills";
import ProjectSection from "../Projects/ProjectSection";
import Intro from "./Intro";

const Information = () => {
  return (
    <Box px={1} sx={{ width: "100%", height: "100%", overflowX: "clip" }}>
      <Intro/>
      <Skills />
      <ProjectSection />
    </Box>
  );
};

export default Information;
