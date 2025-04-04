import { Box, Stack, Select, MenuItem, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { leaveSteps,leaveTypes } from "../../../../constants/constants";
import date_picker from "../../../../assets/date_picker.svg";
import resign_feedback from "../../../../assets/resign_feedback.svg";
import resign_submit from "../../../../assets/resign_submit.svg";
import DatePicker from "../../../../components/DatePicker/DatePickerField";
import Questionnaire from "../../../../components/Questionnaire/Questionnaire";
import Modal from "../../../../components/Modal/Modal";
import useModal from "../../../../Hooks/useModal";
import useActiveStep from "../../../../Hooks/useActiveStep";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { formatDistance } from "date-fns";

export default function ApplyLeaveMobile({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  leaveType,
  setLeaveType,
  handleSubmit,
}) {
  const theme = useTheme();
  const { handleModalOpen, handleModalClose, handleOutsideClick, isModalOpen } =
    useModal();
  const { activeStep, handleNext, handleBack } = useActiveStep();
  const maxSteps = leaveSteps.length;

  handleLeaveTypeChange = (e) => {
    setLeaveType(e.target.value);
  };

  return (
    <Box sx={{ height: "90%", maxWidth: 400, flexGrow: 1 }}>
      <Stack
        sx={{ height: "90vh" }}
        direction="column"
        justifyContent="space-around"
        pb={5}
      >
        <Paper
          elevation={0}
          sx={{ maxWidth: 400, height: "100%", width: "100%", p: 2 }}
        >
          <Stack height="100%" justifyContent="space-between">
            <Box>
              <Box>
                <Box pb="5%">
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    variant="h5"
                    pb={2}
                    pt={2}
                  >
                    Apply Leave
                  </Typography>
                  <Typography color="text.heading" variant="h6">
                    {`${leaveSteps[activeStep].id}. ${leaveSteps[activeStep].step}`}
                  </Typography>
                  <Typography  variant="caption" mb={5} textAlign="justify">
                    {leaveSteps[activeStep].desc}
                  </Typography>
                </Box>

                <Box >
                  {activeStep === 0 && (
                    <Box mb={20}   sx={{ height:'100%', position:'relative'}}  >
                    <FormControl  size="small" sx={{  width: "100%" }}>
                      <InputLabel id="location-picker">
                        {!leaveType ? "Leave Type" : null}
                      </InputLabel>
                      <Select
                        name="leaveType"
                        value={leaveType}
                        onChange={handleLeaveTypeChange}
                        sx={{ width: "100%" }}
                      >
                        <MenuItem disabled value="">
                          Leave Type
                        </MenuItem>
                        {leaveTypes.map((item, idx) => (
                          <MenuItem key={idx} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    </Box>
                  )}
                  {activeStep === 1 && (
                    <Stack mb={5} pt={5} direction="column" alignItems="center"  gap={2}>
                      <DatePicker
                        label="Start Date"
                        dateField={startDate}
                        setDateField={setStartDate}
                      />
                      <DatePicker
                        label="End Date"
                        minDate={startDate}
                        dateField={endDate}
                        setDateField={setEndDate}
                      />
                      {startDate && endDate && (
                        <Stack justifyContent="center">
                          <Typography color="primary.light">
                            {formatDistance(startDate, endDate)}
                          </Typography>
                        </Stack>
                      )}
                    </Stack>
                  )}
                  {activeStep === 2 && (
                    <Box>
                      
                      <Stack alignItems='center' direction="column" gap={3}>
                        <DatePicker
                          label="Start Date"
                          disabled={true}
                          dateField={startDate}
                          setDateField={setStartDate}
                        />
                        <DatePicker
                          label="End Date"
                          disabled={true}
                          minDate={startDate}
                          dateField={endDate}
                          setDateField={setEndDate}
                        />
                      </Stack>
                      <Stack mt={3} justifyContent='center' direction="row" gap={1}>
                        <Typography variant="body2" mb={1}>
                          Applying for :{" "}
                        </Typography>
                        <Typography color="primary.light" variant="body2">
                          {leaveType}{" "}
                        </Typography>
                      </Stack>
                      <Stack  justifyContent='center'  direction="row" gap={1}>
                        <Typography variant="body2" mb={3}>
                          No of days :{" "}
                        </Typography>
                        <Typography color="primary.light" variant="body2">
                          {formatDistance(startDate, endDate)}{" "}
                        </Typography>
                      </Stack>
                    </Box>
                  )}
                </Box>
              </Box>
              <Stack
                justifyContent="flex-end"
                alignItems="center"
                sx={{ position: "relative" }}
                pt={5}
              >
                <Box
                  component="img"
                  sx={{
                    height: "45%",
                    width: "45%",
                  }}
                  alt="date_picker"
                  src={
                    activeStep === 0
                      ? date_picker
                      : activeStep === 1
                      ? resign_feedback
                      : resign_submit
                  }
                />
              </Stack>
            </Box>

            <MobileStepper
              variant="text"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  sx={{ bgcolor: "text.heading", color: "text.contrast" }}
                  size="small"
                  onClick={activeStep === 2 ? handleModalOpen : handleNext}
                  disabled={
                    (activeStep === 0 && !leaveType) ||
                    (activeStep === 1 && (!startDate || !endDate))
                      ? true
                      : false
                  }
                >
                  {activeStep === 2 ? "Submit" : "Next"}
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  sx={{ bgcolor: "text.heading", color: "text.contrast" }}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Stack>
        </Paper>
      </Stack>

      {isModalOpen && (
        <Modal
          handleOutsideClick={handleOutsideClick}
          handleModalClose={handleModalClose}
          handleSubmit={handleSubmit}
        />
      )}
    </Box>
  );
}
