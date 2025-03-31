import { Box, Typography} from "@mui/material";
import Stepper from "./Stepper/Stepper";

const StepHeader = ({header, activeStep,handleBack,handleNext,steps }) => {
  return (
    <Box sx={{  height: "15%", position: "relative", width: "100%" }}>
    <Typography sx={{ fontWeight: "bold" }} variant="h5" mb={2} mt={2}>
      {header}
    </Typography>
    <Stepper
      activeStep={activeStep}
      handleBack={handleBack}
      handleNext={handleNext}
      steps={steps}
    />
  </Box>
  )
}

export default StepHeader
