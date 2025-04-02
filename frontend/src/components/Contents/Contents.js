import { Box, Typography, Stack, Paper } from "@mui/material";
import Questionnaire from "../Questionnaire/Questionnaire";
import DatePicker from "../DatePicker/DatePickerField";
import date_picker from "../../assets/date_picker.svg";
import resign_feedback from "../../assets/resign_feedback.svg";
import resign_submit from "../../assets/resign_submit.svg";
import Dropdown from "../Dropdown/Dropdown";
import { locations } from "../../constants/constants";

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
}) => {
  handleLocationChange = (e) => {
    const { value } = e.target;
    setLocation(value);
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
            <DatePicker lwd={lwd} setLwd={setLwd} />
          )}
          {activeStep === 1 && (
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
            <Dropdown
              id="location"
              name="location"
              value={location}
              handleChange={handleLocationChange}
              placeholder="Location"
              items={locations}
            />
           
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
