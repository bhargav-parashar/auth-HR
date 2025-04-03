import { useState, useEffect } from "react";
import { Box, Stack, Paper } from "@mui/material";
import { leaveSteps } from "../../../../constants/constants";
//import RelocationMobile from "./RelocationMobile";
import config from "../../../../config/config";
import axios from "axios";
import { useSnackbar } from "notistack";
import submitLeave from "../../../../utility/submitLeave";
import Modal from "../../../../components/Modal/Modal";
import ButtonLayout from "../../../../components/ButtonLayout/ButtonLayout";
import Contents from "../../../../components/Contents/Contents";
import StepHeader from "../../../../components/StepHeader/StepHeader";
import useModal from "../../../../Hooks/useModal";
import useActiveStep from "../../../../Hooks/useActiveStep";

const ApplyLeaveDesktop = ({ setSelectedTab }) => {
  const [leaveData, setLeaveData] = useState({
    startDate: null,
    endDate : null,
    leaveType: null
  });
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { handleModalOpen, handleModalClose, handleOutsideClick, isModalOpen } = useModal();
  const {activeStep, handleNext, handleBack} = useActiveStep();
  const { enqueueSnackbar } = useSnackbar();

  const handleInputChange = () => {
    
  };

  const handleSubmit = () => {
    submitLeave({
      leaveData,
      setIsLoading,
      enqueueSnackbar,
      setSelectedTab,
    });
    handleModalClose();
  };

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
            leaveData={leaveData}
            setLeaveData={setLeaveData}
            handleInputChange={handleInputChange}
          />

          <ButtonLayout
            stepCategory="Leave"
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            steps={leaveSteps}
            handleModalOpen={handleModalOpen}
            leaveType={leaveData.leaveType}
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
            {/* <RelocationMobile
              location={location}
              setLocation={setLocation}
              questionResponseMapping={questionResponseMapping}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            /> */}
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
