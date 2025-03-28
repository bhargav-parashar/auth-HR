import { useState, useEffect } from "react";
import { Box, Typography, Stack, Button, Paper } from "@mui/material";
import date_picker from "../../assets/date_picker.svg";
import resign_feedback from "../../assets/resign_feedback.svg";
import resign_submit from "../../assets/resign_submit.svg";
import ResignStepper from "../../components/Stepper/ResignStepper";
import { resignSteps } from "../../constants/constants";
import ResignationMobile from "./ResignationMobile";
import DatePicker from "../../components/DatePicker/DatePickerField";
import config from "../../config/config";
import Questionnaire from "../../components/Questionnaire/Questionnaire";
import axios from "axios";
import { useSnackbar } from "notistack";

const Resignation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [lwd, setLwd] = useState("");
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const [questionResponseMapping, setQuestionResponseMapping] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {enqueueSnackbar} = useSnackbar();

  useEffect(() => {
    const URL = `${config.endpoint}/user/questionnaire`;
    const callApi = async () => {
      try {
        const { data } = await axios.get(URL);
        setQuestions(data);

        const initialResponses = {};

        setQuestionResponseMapping(
          data.map((item) => ({
            questionId: item._id,
            questionText: item.question,
            response: "",
          }))
        );

        data.forEach((item) => {
          initialResponses[item._id] = "";
        });
        setResponses(initialResponses);
      } catch (err) {
        console.log(err);
      }
    };
    callApi();
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleInputChange = (questionId, value) => {
    setResponses((prev) => ({ ...prev, [questionId]: value }));
    const update = JSON.parse(JSON.stringify(questionResponseMapping));
    const idx = update.indexOf(
      update.find((item) => item.questionId === questionId)
    );
    update[idx]["response"] = value;
    setQuestionResponseMapping(update);
  };

  const handleSubmit = async () => {
    const URL = `${config.endpoint}/user/resign`;
    const body = {
      lwd: lwd,
    };
    try {
      setIsLoading(true);
      const res = await axios.post(URL, body, { withCredentials: true });
      if (res.status === 200) {
        const URL = `${config.endpoint}/user/responses`;
        const body = {
          responses: questionResponseMapping,
        };
        await axios.post(URL, body, { withCredentials: true });
        enqueueSnackbar("Resignation submitted", { variant: "success" });
        navigate("/dashboard");
        console.log(res);
      }
    } catch (err) {
      if (err.status === 400) {
        enqueueSnackbar(
          `${err.response.data.message} - ${err.response.data.holiday}  `,
          { variant: "warning" }
        );
      }
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ height: "100%" }}>
      <Paper elevation={1} sx={{ height: "100%" }}>
        <Stack
          p={2}
          direction="column"
          sx={{
            borderRadius: "0.6rem",
            height: "100%",
            display: { xs: "none", md: "block" },
          }}
        >
          <Box sx={{ height: "20%", position: "relative", width: "100%" }}>
            <Typography variant="h5" mb={2} >
              Submit Resignation
            </Typography>
            <ResignStepper
              activeStep={activeStep}
              handleBack={handleBack}
              handleNext={handleNext}
              resignSteps={resignSteps}
            />
          </Box>

          <Stack direction={{ xs: "column", md: "row" }} sx={{ height: "70%" }}>
            <Box sx={{ position: "relative" }} flex={2}>
              <Paper  elevation={2} sx={{ position:'relative', padding: 2, height: "100%" }}>
                <Typography
                  color="primary.light"
                  variant="body1"
                  mb={2}
                >{`${resignSteps[activeStep].id}. ${resignSteps[activeStep].step}`}</Typography>
                <Typography  variant="body2" mb={2}>{resignSteps[activeStep].desc}</Typography>
                {activeStep === 0 && <DatePicker lwd={lwd} setLwd={setLwd} />}
                {activeStep === 1 && (
                
                  <Questionnaire
                    handleInputChange={handleInputChange}
                    questionResponseMapping={questionResponseMapping}
                  />
                )}
                {activeStep === 2 && (
                  <Box>
                    <Stack direction="row" gap={1}>
                      <Typography variant="body2" color="primary.dark">
                        Last Working Day :
                      </Typography>
                      <Typography variant="body2" color="primary.light">{lwd}</Typography>
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
                  resignSteps[activeStep].id === 1
                    ? date_picker
                    : resignSteps[activeStep].id === 2
                    ? resign_feedback
                    : resign_submit
                }
                display={{ xs: "none", md: "block" }}
              />
            </Box>
          </Stack>

          <Box
            sx={{ height: "10%", display: "flex", flexDirection: "row", p: 2 }}
          >
            <Button
              variant="contained"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, height: "30px" }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {activeStep === resignSteps.length - 1 ? (
              <Button
                variant="contained"
                sx={{ height: "30px" }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            ) : (
              <Button
                variant="contained"
                sx={{ height: "30px" }}
                onClick={handleNext}
                disabled={
                  (activeStep === 0 && lwd.length === 0) || 
                  (activeStep === 1 && questionResponseMapping[0]['response'].length === 0) ||
                  (activeStep === 1 && questionResponseMapping[1]['response'].length === 0)
                    ? true
                    : false
                }
              >
                Next
              </Button>
            )}
          </Box>
        </Stack>
      
      <Box
        pt={3}
        sx={{
          position: "relative",
          height: "100%",
          display: { xs: "block", md: "none" },
        }}
      >
        <Stack
          sx={{ height: "90%" }}
          justifyContent="center"
          alignItems="center"
        >
         
          <ResignationMobile lwd={lwd} setLwd={setLwd} questionResponseMapping={questionResponseMapping} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
        </Stack>
      </Box>
      </Paper>
    </Box>
  );
};

export default Resignation;
