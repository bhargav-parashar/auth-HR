import { Box, Typography, Stack, Paper, Select, MenuItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Questionnaire from "../Questionnaire/Questionnaire";
import DatePicker from "../DatePicker/DatePickerField";
import date_picker from "../../assets/date_picker.svg";
import resign_feedback from "../../assets/resign_feedback.svg";
import resign_submit from "../../assets/resign_submit.svg";
import relax from "../../assets/relax.svg";

import { locations, leaveTypes } from "../../constants/constants";
import { formatDistance, addDays } from "date-fns";
import locationImg from "../../assets/location.svg";
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

          {activeStep === 0 && stepCategory === "Resignation" && (
            <DatePicker
              label={"Last Working Day"}
              dateField={lwd}
              setDateField={setLwd}
            />
          )}
          {activeStep === 1 && stepCategory !== "Leave" && (
            <Questionnaire
              handleInputChange={handleInputChange}
              questionResponseMapping={questionResponseMapping}
            />
          )}
          {activeStep === 2 && stepCategory === "Resignation" && (
            <Box>
              <Stack direction="row" gap={1}>
                <Typography variant="body2">Last Working Day :</Typography>
                <Typography variant="body2" color="text.heading">
                  {lwd}
                </Typography>
              </Stack>
              <Box mt={2}>
                <Questionnaire
                  handleInputChange={handleInputChange}
                  questionResponseMapping={questionResponseMapping}
                  isReview={true}
                />
              </Box>
            </Box>
          )}
          {activeStep === 0 && stepCategory === "Relocation" && (
            <FormControl size="small" sx={{ width: "100%" }}>
              <InputLabel id="location-picker">
                {!location ? "Location" : null}
              </InputLabel>
              <Select
                labelId="location-picker"
                name="location"
                value={location}
                onChange={handleLocationChange}
                sx={{
                  width: "50%",
                  
                }}
              >
                <MenuItem disabled value="">
                  Location
                </MenuItem>
                {locations.map((item, idx) => (
                  <MenuItem key={idx} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          {activeStep === 2 && stepCategory === "Relocation" && (
            <Box>
              <Stack direction="row" gap={1}>
                <Typography variant="body2">New Work Location :</Typography>
                <Typography variant="body2" color="text.heading">
                  {location}
                </Typography>
              </Stack>
              <Box mt={1}>
                <Questionnaire
                  handleInputChange={handleInputChange}
                  questionResponseMapping={questionResponseMapping}
                  isReview={true}
                />
              </Box>
            </Box>
          )}
          {activeStep === 0 && stepCategory === "Leave" && (
            <FormControl size="small" sx={{ width: "100%" }}>
              <InputLabel id="location-picker">
                {!leaveType ? "Leave Type" : null}
              </InputLabel>
              <Select
                name="leaveType"
                value={leaveType}
                onChange={handleLeaveTypeChange}
                sx={{ width: "50%" }}
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
          )}
          {activeStep === 1 && stepCategory === "Leave" && (
          
              <Stack direction="row" gap={1}>
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
                  <Stack  justifyContent='center'>
                    <Typography color="primary.light" >{formatDistance(startDate, addDays(endDate, 1))}</Typography>
                  </Stack>
                )}
              </Stack>
            
          )}
          {activeStep === 2 && stepCategory === "Leave" && (
          <Box>
            <Stack direction='row' gap={1}>
            <Typography variant="body2" mb={1}>Applying for : </Typography>
            <Typography color="primary.light" variant="body2" >{leaveType} </Typography>
            </Stack>
            <Stack direction='row' gap={1}>
            <Typography variant="body2" mb={3}>No of days : </Typography>
            <Typography color="primary.light" variant="body2" >{formatDistance(startDate, addDays(endDate, 1))} </Typography>
            </Stack>
          <Stack direction="row" gap={1}>
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
          </Box>
        
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
          src= {
            
            steps[activeStep].id === 1 && stepCategory === 'Leave'? relax :
            steps[activeStep].id === 2 && stepCategory === 'Leave'? date_picker :
            steps[activeStep].id === 1 && stepCategory === "Relocation" ? locationImg :
            steps[activeStep].id === 1 && stepCategory === "Resignation" ? date_picker :
            steps[activeStep].id === 2 ? resign_feedback : resign_submit
          } 
          display={{ xs: "none", md: "block" }}
        />
      </Box>
    </Stack>
  );
};

export default Contents;
