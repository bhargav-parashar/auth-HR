import { Box, Button } from "@mui/material";
import { differenceInDays } from "date-fns";

const ButtonLayout = ({
  stepCategory,
  activeStep,
  handleBack,
  handleNext,
  steps,
  handleModalOpen,
  lwd,
  location,
  questionResponseMapping,
  leaveType,
  startDate,
  endDate,
  leaveBal,
}) => {

  dateDifference = (date1, date2) => {
    if (date1 && date2) return differenceInDays(date1, date2) + 1;
    return 0;
  };


  return (
    <Box sx={{ height: "10%", display: "flex", flexDirection: "row", p: 2 }}>
      <Button
        variant="contained"
        disabled={activeStep === 0}
        onClick={handleBack}
        sx={{
          mr: 1,
          height: "30px",
          bgcolor: "text.heading",
          color: "text.contrast",
        }}
      >
        Back
      </Button>
      <Box sx={{ flex: "1 1 auto" }} />
      {activeStep === steps.length - 1 ? (
        <Button
          variant="contained"
          sx={{
            height: "30px",
            bgcolor: "text.heading",
            color: "text.contrast",
          }}
          onClick={handleModalOpen}
        >
          Submit
        </Button>
      ) : (
        <Button
          variant="contained"
          sx={{
            height: "30px",
            bgcolor: "text.heading",
            color: "text.contrast",
          }}
          onClick={handleNext}
          disabled={
            (activeStep === 0 && !lwd && stepCategory === "Resignation") ||
            (activeStep === 0 && !location && stepCategory === "Relocation") ||
            (activeStep === 0 && !leaveType && stepCategory === "Leave") ||
            (activeStep === 1 &&
              stepCategory === "Resignation" &&
              questionResponseMapping[0]["response"].length === 0) ||
            (activeStep === 1 &&
              stepCategory === "Resignation" &&
              questionResponseMapping[1]["response"].length === 0) ||
            (activeStep === 1 &&
              stepCategory === "Relocation" &&
              questionResponseMapping[0]["response"].length === 0) ||
            (activeStep === 1 &&
              stepCategory === "Relocation" &&
              questionResponseMapping[1]["response"].length === 0) ||
       
            (activeStep === 1 &&
              stepCategory === "Leave" &&
              (!startDate ||
                !endDate ||
                dateDifference(endDate, startDate) > leaveBal)
            ) ? true : false
          }
        >
          Next
        </Button>
      )}
    </Box>
  );
};

export default ButtonLayout;
