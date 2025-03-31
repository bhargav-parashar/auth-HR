import { Box, Typography, Stack, Paper } from "@mui/material";
import Questionnaire from "../Questionnaire/Questionnaire";
import DatePicker from "../DatePicker/DatePickerField";
import date_picker from "../../assets/date_picker.svg";
import resign_feedback from "../../assets/resign_feedback.svg";
import resign_submit from "../../assets/resign_submit.svg";

const Contents = ({
  activeStep,
  resignSteps,
  lwd,
  setLwd,
  handleInputChange,
  questionResponseMapping
}) => {
  return (
    <Stack direction={{ xs: "column", md: "row" }} sx={{ height: "70%" }}>
      <Box sx={{ position: "relative" }} flex={2}>
        <Paper
          elevation={2}
          sx={{
            bgcolor: "primary.bg1",
            position: "relative",
            padding: 2,
            height: "100%",
          }}
        >
          <Typography
            color="text.heading"
            variant="body1"
            mb={2}
            sx={{ fontWeight: "bold" }}
          >{`${resignSteps[activeStep].id}. ${resignSteps[activeStep].step}`}</Typography>
          <Typography variant="body2" mb={2}>
            {resignSteps[activeStep].desc}
          </Typography>
          {activeStep === 0 && <DatePicker lwd={lwd} setLwd={setLwd} />}
          {activeStep === 1 && (
            <Questionnaire
              handleInputChange={handleInputChange}
              questionResponseMapping={questionResponseMapping}
            />
          )}
          {activeStep === 2 && (
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
          )}
        </Paper>
      </Box>
      <Box
        flex={1}
        sx={{
          display: { xs: "none", md: "block" },
          position: "relative",
        }}
      >
        <Box
          component="img"
          sx={{
            height: "80%",
            width: "80%",
            bottom: 0,
            right: 0,
            position: "absolute",
          }}
          alt="date_picker"
          src={
            resignSteps[activeStep].id === 1
              ? date_picker
              : resignSteps[activeStep].id === 2
              ? resign_feedback
              : resign_submit
          }
          display={{ xs: "none", md: "block" }}
        />
      </Box>
    </Stack>
  );
};

export default Contents;
