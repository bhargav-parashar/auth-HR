import { useState } from "react";
import { Box, Stack, Paper } from "@mui/material";
import { leaveSteps } from "../../../../constants/constants";
import ApplyLeaveMobile from "./ApplyLeaveMobile";
import { useSnackbar } from "notistack";
import submitLeave from "../../../../utility/submitLeave";
import Modal from "../../../../components/Modal/Modal";
import ButtonLayout from "../../../../components/ButtonLayout/ButtonLayout";
import Contents from "../../../../components/Contents/Contents";
import StepHeader from "../../../../components/StepHeader/StepHeader";
import useModal from "../../../../Hooks/useModal";
import useActiveStep from "../../../../Hooks/useActiveStep";
import useGetUserLeaveBalance from "../../../../Hooks/useGetUserLeaveBal";
import submitLeave from "../../../../utility/submitLeave";

const ApplyLeaveDesktop = ({ setSelectedTab, setRefresh }) => {

  const[startDate, setStartDate] = useState(null);
  const[endDate, setEndDate] = useState(null);
  const[leaveType, setLeaveType] = useState("");
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { handleModalOpen, handleModalClose, handleOutsideClick, isModalOpen } = useModal();
  const {activeStep, handleNext, handleBack} = useActiveStep();
  const { enqueueSnackbar } = useSnackbar();
  const {allLeaveBal, setAllLeaveBal} = useGetUserLeaveBalance();
  

  const handleSubmit = () => {
    
   submitLeave({
    startDate,
    endDate,
    leaveType,
    setIsLoading,
    enqueueSnackbar,
    setSelectedTab,
    allLeaveBal,
    setRefresh
  });
  handleModalClose();
};

const getBalance = (leaveType, allLeaveBal) => {
  if (leaveType === "Earned Leave") {
    return allLeaveBal?.earned;
  } else if (leaveType === "Casual Leave") {
    return allLeaveBal?.casual;
  } else if (leaveType === "Sick Leave") {
    return allLeaveBal?.sick;
  } else {
    return 0;
  }
};

const leaveBal = getBalance(leaveType, allLeaveBal);

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
            header={"Apply Leave"}
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            steps={leaveSteps}
          />

          <Contents
            stepCategory="Leave"
            activeStep={activeStep}
            steps={leaveSteps}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            leaveType={leaveType}
            setLeaveType={setLeaveType}
            leaveBal={leaveBal}
          />

          <ButtonLayout
            stepCategory="Leave"
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            steps={leaveSteps}
            handleModalOpen={handleModalOpen}
            leaveType={leaveType}
            startDate={startDate}
            endDate={endDate}
            leaveBal={leaveBal}
          />
        </Stack>

        <Box
          pt={3}
          sx={{
            height: "100%",
            display: { xs: "block", md: "none" },
          }}
        >
          <Stack
            sx={{ height: "90%" }}
            justifyContent="center"
            alignItems="center"
          >
            <ApplyLeaveMobile
              stepCategory="Leave"
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              leaveType={leaveType}
              setLeaveType={setLeaveType}
              handleSubmit={handleSubmit}
              leaveBal={leaveBal}
            />
          </Stack>
        </Box>
      </Paper>
      {isModalOpen && (
        <Modal
          handleOutsideClick={handleOutsideClick}
          handleModalClose={handleModalClose}
          handleSubmit={handleSubmit}
        />
      )}
    </Box>
  );
};

export default ApplyLeaveDesktop;
