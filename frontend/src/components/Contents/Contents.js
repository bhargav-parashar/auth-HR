import { Box, Typography, Stack, Paper, Select, MenuItem } from "@mui/material";
import Questionnaire from "../Questionnaire/Questionnaire";
import DatePicker from "../DatePicker/DatePickerField";
import date_picker from "../../assets/date_picker.svg";
import resign_feedback from "../../assets/resign_feedback.svg";
import resign_submit from "../../assets/resign_submit.svg";
import { locations, leaveTypes } from "../../constants/constants";

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
  leaveData,
  setLeaveData
}) => {
  handleLocationChange = (e) => {
    const { value } = e.target;
    setLocation(value);
  };
  handleLeaveDataChange = (e)=>{
    const {name,value} = e.target;
    setLeaveData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Stack direction={{ xs: "column", md: "row" }} sx={{ height: "70%" }}>
      <Box sx={{ position: "relative" }} flex={2}>
        <Paper
          elevation={2}
          sx={{
            bgcolor: "primary.bg1",
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
            <DatePicker date={lwd} setDate={setLwd} />
          )}
          {activeStep === 1 &&  stepCategory !== "Leave" &&  (
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
            <Select
              name="location"
              value={location}
              onChange={handleLocationChange}
              sx={{width:'50%'}}
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
          )}
          {activeStep === 2 && stepCategory === "Relocation" && (
            <Box>
              <Stack direction="row" gap={1}>
                <Typography variant="body2">New Work Location :</Typography>
                <Typography variant="body2" color="text.heading">
                  {location}
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
          {
            activeStep === 0 && stepCategory === "Leave" && (
              <Select
              name="leaveType"
              value={leaveData.leaveType}
              onChange={handleLeaveDataChange}
              sx={{width:'50%'}}
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
            )
          }
          {
            activeStep === 1 && stepCategory === "Leave" && (
              <Stack direction='row' gap={1}>
               <DatePicker date={leaveData.startDate} setDate={handleLeaveDataChange} />
               <DatePicker date={leaveData.endDate} setDate={handleLeaveDataChange} />
            </Stack>
            )
          }
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
          alt="date_picker"
          src={
            steps[activeStep].id === 1
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
