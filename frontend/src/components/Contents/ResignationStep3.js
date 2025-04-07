import React from 'react';
import { Box, Typography, Stack } from "@mui/material";
import Questionnaire from "../Questionnaire/Questionnaire";

const ResignationStep3 = ({lwd,handleInputChange,questionResponseMapping}) => {
  return (
    <Box>
    <Stack direction="row" gap={1}>
      <Typography variant="body2">Last Working Day :</Typography>
      <Typography variant="body2" color="text.heading">
        {lwd}
      </Typography>
    </Stack>
    <Box mt={2}>
      <Questionnaire
        handleInputChange={handleInputChange}
        questionResponseMapping={questionResponseMapping}
        isReview={true}
      />
    </Box>
  </Box>
  )
}

export default ResignationStep3
