import { useState } from "react";

const useActiveStep = () =>{
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
    const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return {activeStep, handleNext, handleBack};

    
}

export default useActiveStep;