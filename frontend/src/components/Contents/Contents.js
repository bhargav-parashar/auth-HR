import { Box, Typography, Stack, Paper, Select, MenuItem } from "@mui/material";
import date_picker from "../../assets/date_picker.svg";
import resign_feedback from "../../assets/resign_feedback.svg";
import resign_submit from "../../assets/resign_submit.svg";
import relax from "../../assets/relax.svg";
import locationImg from "../../assets/location.svg";
import ResignationsStep1 from "./ResignationsStep1";
import ResignationStep2 from "./ResignationStep2";
import ResignationStep3 from "./ResignationStep3";
import RelocationStep1 from "./RelocationStep1";
import RelocationStep2 from "./RelocationStep2";
import RelocationStep3 from "./RelocationStep3";
import LeaveStep1 from "./LeaveStep1";
import LeaveStep2 from "./LeaveStep2";
import LeaveStep3 from "./LeaveStep3";

const Contents = ({
  stepCategory,
  activeStep,
  steps,
  lwd,
  setLwd,
  location,
  setLocation,
  handleInputChange,
  questionResponseMapping,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  leaveType,
  setLeaveType,
  leaveBal
}) => {
  handleLocationChange = (e) => {
    const { value } = e.target;
    setLocation(value);
  };
  handleLeaveTypeChange = (e) => {
    setLeaveType(e.target.value);
  };

  return (
    <Stack direction={{ xs: "column", md: "row" }} sx={{ height: "70%" }}>
      <Box sx={{ position: "relative" }} flex={2}>
        <Paper
          elevation={2}
          sx={{
            bgcolor: "primary.inactive2",
            position: "relative",
            padding: 2,
            height: "100%",
          }}
        >
          <Typography
            color="text.heading"
            variant="body1"
            mb={2}
            sx={{ fontWeight: "bold" }}
          >{`${steps[activeStep].id}. ${steps[activeStep].step}`}</Typography>

          <Typography variant="body2" mb={2}>
            {steps[activeStep].desc}
          </Typography>

          {/* LEAVE STEPS */}
          {activeStep === 0 && stepCategory === "Leave" && (
            <LeaveStep1
              leaveType={leaveType}
              handleLeaveTypeChange={handleLeaveTypeChange}
            />
          )}
          {activeStep === 1 && stepCategory === "Leave" && (
            <LeaveStep2
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              leaveType={leaveType}
              leaveBal={leaveBal}
            />
          )}
          {activeStep === 2 && stepCategory === "Leave" && (
            <LeaveStep3
              leaveType={leaveType}
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          )}

          {/* RELOCATION STEPS */}
          {activeStep === 0 && stepCategory === "Relocation" && (
            <RelocationStep1
              location={location}
              handleLocationChange={handleLocationChange}
            />
          )}
          {activeStep === 1 && stepCategory === "Relocation" && (
            <RelocationStep2
              handleInputChange={handleInputChange}
              questionResponseMapping={questionResponseMapping}
            />
          )}
          {activeStep === 2 && stepCategory === "Relocation" && (
            <RelocationStep3
              location={location}
              handleInputChange={handleInputChange}
              questionResponseMapping={questionResponseMapping}
            />
          )}

          {/* RESIGNATION STEPS */}
          {activeStep === 0 && stepCategory === "Resignation" && (
            <ResignationsStep1
              label="Last Working Day"
              dateField={lwd}
              setDateField={setLwd}
            />
          )}
          {activeStep === 1 && stepCategory === "Resignation" && (
            <ResignationStep2
              handleInputChange={handleInputChange}
              questionResponseMapping={questionResponseMapping}
            />
          )}
          {activeStep === 2 && stepCategory === "Resignation" && (
            <ResignationStep3
              lwd={lwd}
              handleInputChange={handleInputChange}
              questionResponseMapping={questionResponseMapping}
            />
          )}
        </Paper>
      </Box>
      <Box
        flex={1}
        sx={{
          display: { xs: "none", md: "block" },
          position: "relative",
        }}
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
          alt="step"
          src={
            steps[activeStep].id === 1 && stepCategory === "Leave"
              ? relax
              : steps[activeStep].id === 2 && stepCategory === "Leave"
              ? date_picker
              : steps[activeStep].id === 1 && stepCategory === "Relocation"
              ? locationImg
              : steps[activeStep].id === 1 && stepCategory === "Resignation"
              ? date_picker
              : steps[activeStep].id === 2
              ? resign_feedback
              : resign_submit
          }
          display={{ xs: "none", md: "block" }}
        />
      </Box>
    </Stack>
  );
};

export default Contents;
