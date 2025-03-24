import { Box, Typography, Stack, Button } from "@mui/material";
import QuestionItem from "./QuestionItem";

const Questionnaire = ({ isReview, questionResponseMapping, handleInputChange}) => {
  return (
    <Box   >
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
