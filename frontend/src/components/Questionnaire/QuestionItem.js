import { TextField, Typography } from "@mui/material";

const QuestionItem = ({ handleInputChange, questionitem, idx, isReview }) => {
  const handleChange = (e) => {
    setResponses((prev) => [...prev]);
  };
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
            sx={{ width: "100%", mb: 3, }}
            inputProps={{style: {fontSize: "0.8rem"}}} 
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
            inputProps={{style: {fontSize: "0.8rem"}}} 
            sx={{ width: "100%", mb: {xs:1, lg:2} }}
          />
        </>
      )}
    </>
  );
};
export default QuestionItem;
