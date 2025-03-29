import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector  from "@mui/material/StepConnector";

const ResignStepper = ({ activeStep, resignSteps }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        sx={{
          "& .MuiStepLabel-label": { fontSize: "0.8rem" },
          "& .MuiStepIcon-root": { fontSize: "0.8rem" },
          "& .MuiStepConnector-line": { minHeight: "1px" },
        }}
        activeStep={activeStep}
        connector={
          <StepConnector
            sx={{
              "& .MuiStepConnector-line": {
                borderColor: "text.primary"
              },
            }}
          />
        }
      >
        {resignSteps.map((item, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={item.id} {...stepProps}>
              <StepLabel
                slotProps={{
                  stepIcon: {
                    sx: {
                      "&.Mui-completed": {
                        color: activeStep > index ? "primary.success" : "",
                      },
                      "&.Mui-active": {
                        color: "white", 
                      },
                      "&:not(.Mui-active):not(.Mui-completed)": {
                        color: "primary.inactive", 
                      },
                    },
                  },
                }}
                {...labelProps}
              >
                {item.step}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
};

export default ResignStepper;
