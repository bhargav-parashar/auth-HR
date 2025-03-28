import { Box, Typography, Stack, Button } from "@mui/material";
import QuestionItem from "./QuestionItem";

const Questionnaire = ({ isMobile, isReview, questionResponseMapping, handleInputChange}) => {
  return (
    <Box  sx={{  height: isMobile ? "100%":"70%",  overflowY:'clip'}}  >
      {questionResponseMapping.map((item, idx) => (
        <QuestionItem
          key={item.questionId}
          questionitem={item}
          idx={idx}
          handleInputChange={handleInputChange}
          isReview={isReview}
        />
      ))} 
    </Box>
  );
};

export default Questionnaire;
