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
import  DatePicker  from "../../components/DatePicker/DatePickerField";

export default function ResignationMobile({lwd, setLwd}) {
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
      >
        <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}>
          <Typography mb={10} textAlign="justify">
            {resignSteps[activeStep].desc}
          </Typography>
        
        {activeStep === 0 && <DatePicker isMobile lwd={lwd} setLwd={setLwd} />}
        </Box>
        <Stack justifyContent='flex-end' alignItems='center'
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
              onClick={handleNext}
              disabled={activeStep + 1 === maxSteps}
            >
              Next
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
