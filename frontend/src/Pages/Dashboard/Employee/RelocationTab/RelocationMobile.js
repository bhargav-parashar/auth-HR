import { Box, Stack, Select, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { relocationSteps, locations } from "../../../../constants/constants";
import date_picker from "../../../../assets/date_picker.svg";
import resign_feedback from "../../../../assets/resign_feedback.svg";
import resign_submit from "../../../../assets/resign_submit.svg";
import Questionnaire from "../../../../components/Questionnaire/Questionnaire";
import Modal from "../../../../components/Modal/Modal";
import useModal from "../../../../Hooks/useModal";
import useActiveStep from "../../../../Hooks/useActiveStep";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import useGetLoggedInUser from "../../../../Hooks/useGetLoggedInUser";

export default function RelocationMobile({
  location,
  setLocation,
  handleInputChange,
  questionResponseMapping,
  handleSubmit,
}) {
  const theme = useTheme();
  const { handleModalOpen, handleModalClose, handleOutsideClick, isModalOpen } =
    useModal();
  const { activeStep, handleNext, handleBack } = useActiveStep();
  const maxSteps = relocationSteps.length;
  const {user} = useGetLoggedInUser();
  const currLocation = user?.location;
  const updatedLocations = locations.filter((item)=>item !== currLocation);

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
                    Request Relocation
                  </Typography>
                  <Typography color="text.heading" variant="h6">
                    {`${relocationSteps[activeStep].id}. ${relocationSteps[activeStep].step}`}
                  </Typography>
                  <Typography variant="caption" mb={5} textAlign="justify">
                    {relocationSteps[activeStep].desc}
                  </Typography>
                </Box>

                <Box>
                  {activeStep === 0 && (
                    <FormControl size="small" sx={{ width: "100%" }}>
                      <InputLabel id="location-picker">
                        {!location ? "Work Location" : null}
                      </InputLabel>
                      <Select
                        name="location"
                        value={location}
                        onChange={handleLocationChange}
                        sx={{ width: "50%" }}
                      >
                        <MenuItem disabled value="">
                          Location
                        </MenuItem>
                        {updatedLocations.map((item, idx) => (
                          <MenuItem key={idx} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                  {activeStep === 1 && (
                    <Questionnaire
                      isMobile
                      handleInputChange={handleInputChange}
                      questionResponseMapping={questionResponseMapping}
                    />
                  )}
                  {activeStep === 2 && (
                    <Box>
                      <Stack direction="row" gap={1}>
                        <Typography variant="body2">
                          New work location :
                        </Typography>
                        <Typography variant="body2" color="primary.light">
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
                    (activeStep === 0 && !location) ||
                    (activeStep === 1 &&
                      questionResponseMapping[0]["response"].length === 0) ||
                    (activeStep === 1 &&
                      questionResponseMapping[1]["response"].length === 0)
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
