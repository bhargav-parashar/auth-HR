import * as React from "react";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { resignSteps } from "../../constants/constants";
import date_picker from "../../assets/date_picker.svg";
import resign_feedback from "../../assets/resign_feedback.svg";
import resign_submit from "../../assets/resign_submit.svg";
import DatePicker from "../../components/DatePicker/DatePickerField";
import Questionnaire from "../../components/Questionnaire/Questionnaire";

export default function ResignationMobile({
  lwd,
  setLwd,
  handleInputChange,
  questionResponseMapping,
  handleSubmit
}) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = resignSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{ position: "relative", height: "90%", maxWidth: 400, flexGrow: 1 }}
    >
      <Typography color="primary.light" variant="h4" pb={5} pt={5}>
        Submit Resignation
      </Typography>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography variant="h6">{`${resignSteps[activeStep].id}. ${resignSteps[activeStep].step}`}</Typography>
      </Paper>
      <Stack
        sx={{ height: "100%" }}
        direction="column"
        justifyContent="space-between"
        pb={15}
      >
        <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}>
          <Typography mb={10} textAlign="justify">
            {resignSteps[activeStep].desc}
          </Typography>

          {activeStep === 0 && (
            <DatePicker isMobile lwd={lwd} setLwd={setLwd} />
          )}
          {activeStep === 1 && (
            <Questionnaire
              isMobile
              handleInputChange={handleInputChange}
              questionResponseMapping={questionResponseMapping}
            />
          )}
          {activeStep === 2 && (
            <Box>
              <Stack direction="row" gap={1}>
                <Typography variant="body2" color="primary.dark">
                  Last Working Day :
                </Typography>
                <Typography variant="body2" color="primary.light">
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
        </Box>
        <Stack
          justifyContent="flex-end"
          alignItems="center"
          sx={{ position: "relative" }}
        >
          <Box
            component="img"
            sx={{
              height: "70%",
              width: "70%"
            }}
            alt="date_picker"
            src={
              resignSteps[activeStep].id === 1
                ? date_picker
                : resignSteps[activeStep].id === 2
                ? resign_feedback
                : resign_submit
            }
          />
        </Stack>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={activeStep === 2 ? handleSubmit : handleNext}
              disabled={
                (activeStep === 0 && lwd.length === 0) ||
                (activeStep === 1 &&
                  questionResponseMapping[0]["response"].length === 0) ||
                (activeStep === 1 &&
                  questionResponseMapping[1]["response"].length === 0)
                  ? true
                  : false
              }
            >
              {activeStep === 2 ? "Submit" : "Next"}
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Stack>
    </Box>
  );
}
