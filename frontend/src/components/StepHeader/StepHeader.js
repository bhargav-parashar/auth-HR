import { Box, Typography, Stack } from "@mui/material";
import Stepper from "./Stepper/Stepper";

const StepHeader = ({
  isSubmitted,
  header,
  activeStep,
  handleBack,
  handleNext,
  steps,
}) => {
  return (
    <Box mb={2} sx={{ height: "15%", position: "relative", width: "100%" }}>
      <Stack
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%" }}
        direction="row"
      >
        <Typography sx={{ fontWeight: "bold" }} variant="h5" mb={2}>
          {header}
        </Typography>
        {isSubmitted && (
          <Box
            sx={{
              width: "10%",
              bgcolor: "primary.successLight",
              border: "1.5px solid ",
              borderColor: "primary.success",
              height: "6%",
              borderRadius: "0.2rem",
            }}
          >
            <Typography
              fontWeight="bold"
              textAlign="center"
              variant="body2"
              sx={{ color: "primary.success" }}
            >
              Submitted
            </Typography>
          </Box>
        )}
      </Stack>
      <Stepper
        activeStep={activeStep}
        handleBack={handleBack}
        handleNext={handleNext}
        steps={steps}
      />
    </Box>
  );
};

export default StepHeader;
