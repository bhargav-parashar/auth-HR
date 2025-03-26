import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";


const ResignStepper = ({activeStep, resignSteps }) => {

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper 
       sx={{
        "& .MuiStepLabel-label": { fontSize: "0.8rem" }, 
        "& .MuiStepIcon-root": { fontSize: "0.8rem" }, 
        "& .MuiStepConnector-line": { minHeight: "1px" }, 
      }}
      activeStep={activeStep}>
        {resignSteps.map((item, index) => {
          const stepProps = {};
          const labelProps = {};
          
          return (
            <Step key={item.id} {...stepProps}>
              <StepLabel {...labelProps}>{item.step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      
    </Box>
  );
}

export default ResignStepper;
