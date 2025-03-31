import { Box, Stack, Paper } from "@mui/material";
import StepHeader from "../../../../components/StepHeader/StepHeader";

const ResignationStatus = () => {
  return (
    <Box sx={{ height: "100%" }}>
      <Paper elevation={1} sx={{ height: "100%", bgcolor: "primary.bg2" }}>
        <Stack
          p={2}
          direction="column"
          sx={{
            borderRadius: "0.6rem",
            height: "100%",
            display: { xs: "none", md: "block" },
          }}
        >
          <StepHeader
            header={"Submit Resignation"}
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            steps={resignSteps}
          />

          <Contents
            activeStep={activeStep}
            resignSteps={resignSteps}
            lwd={lwd}
            setLwd={setLwd}
            handleInputChange={handleInputChange}
            questionResponseMapping={questionResponseMapping}
          />
        </Stack>
      </Paper>
    </Box>
  )
}

export default ResignationStatus
