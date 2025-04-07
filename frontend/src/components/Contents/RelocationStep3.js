import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Questionnaire from "../Questionnaire/Questionnaire";

const RelocationStep3 = ({location, handleInputChange, questionResponseMapping}) => {
  return (
    <Box>
      <Stack direction="row" gap={1}>
        <Typography variant="body2">New Work Location :</Typography>
        <Typography variant="body2" color="text.heading">
          {location}
        </Typography>
      </Stack>
      <Box mt={1}>
        <Questionnaire
          handleInputChange={handleInputChange}
          questionResponseMapping={questionResponseMapping}
          isReview={true}
        />
      </Box>
    </Box>
  );
};

export default RelocationStep3;
