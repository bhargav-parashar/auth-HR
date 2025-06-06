import { TextField, Typography } from "@mui/material";

const QuestionItem = ({ handleInputChange, questionitem, idx, isReview }) => {
  
  return (
    <>
      {!isReview ? (
        <>
          <Typography variant="body2" sx={{ mb: 1 }}>{`${String.fromCharCode(65 + idx)}. ${
            questionitem.questionText
          } *`}</Typography>

          <TextField
            id={questionitem.questionId}
            label=""
            required
            placeholder="Enter your response"
            variant="outlined"
            value={questionitem.response}
            size="small"
            sx={{ width: "100%", mb: 3, bgcolor:'primary.dropdown' }}
            inputProps={{ maxLength: 100, style: {fontSize: "0.8rem"}}} 
            onChange={(e) =>
              handleInputChange(questionitem.questionId, e.target.value)
            }
          />
        </>
      ) : (
        <>
          <Typography variant="body2" sx={{ mb: 1 }}>{`${String.fromCharCode(65 + idx)}. ${
            questionitem.questionText
          }`}</Typography>

          <TextField
            id={questionitem.questionId}
            label=""
            size="small"
            value={questionitem.response}
            disabled={true}
            variant="outlined"
            inputProps={{maxLength: 100,style: {fontSize: "0.8rem"}}} 
            sx={{ width: "100%", mb: {xs:1, lg:2} }}
          />
        </>
      )}
    </>
  );
};
export default QuestionItem;
