import { useState } from "react";
import { Box, Typography, Paper, Stack, Button } from "@mui/material";
import date_picker from "../../assets/date_picker.svg";
import resign_feedback from "../../assets/resign_feedback.svg";
import resign_submit from "../../assets/resign_submit.svg";
import ResignStepper from "../../components/Stepper/ResignStepper";
import { resignSteps } from "../../constants/constants";
import ResignationMobile from "./ResignationMobile";

const Resignation = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Box sx={{ height: "100%" }}>
      <Stack
        p={2}
        direction="column"
        sx={{
          borderRadius: "0.6rem",
          border: "2px solid white",
          height: "100%",
          display: { xs: "none", md: "block" },
        }}
      >
        <Box sx={{ height: "20%", position: "relative", width: "100%" }}>
          <Typography mb={4} sx={{ fontSize: "2vw" }}>
            Submit Resignation
          </Typography>
          <ResignStepper
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            resignSteps={resignSteps}
          />
        </Box>

        <Stack direction={{ xs: "column", md: "row" }} sx={{ height: "60%" }}>
          <Box flex={2}>
            <Typography variant="h6" mb={2}>{`${resignSteps[activeStep].id}. ${resignSteps[activeStep].step}`}</Typography>
            <Typography>{resignSteps[activeStep].desc}</Typography>
          </Box>
          <Box
            flex={1}
            sx={{ display: { xs: "none", md: "block" }, position: "relative" }}
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
              src={ resignSteps[activeStep].id === 1 ? date_picker : resignSteps[activeStep].id === 2 ? resign_feedback : resign_submit }
              display={{ xs: "none", md: "block" }}
            />
          </Box>
        </Stack>

        <Box
          sx={{ height: "20%", display: "flex", flexDirection: "row", p: 2 }}
        >
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          {activeStep === resignSteps.length -1 ? (
            <Button>Submit</Button>
          ) : (
            <Button onClick={handleNext}>Next</Button>
          )}
        </Box>
      </Stack>
      <Box pt={3} sx={{ position:'relative', height: "100%", display: { xs: "block", md: "none" } }}>
        <Stack sx={{height: "90%",}} justifyContent='center' alignItems='center'>
        <ResignationMobile />
        </Stack>
      </Box>
    </Box>
  );
};

export default Resignation;
