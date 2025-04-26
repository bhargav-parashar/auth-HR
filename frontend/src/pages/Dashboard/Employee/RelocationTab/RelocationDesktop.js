import { useState, useEffect } from "react";
import { Box, Stack, Paper } from "@mui/material";
import { relocationSteps } from "../../../../constants/constants";
import RelocationMobile from "./RelocationMobile";
import config from "../../../../config/config";
import axios from "axios";
import { useSnackbar } from "notistack";
import submitRelocation from "../../../../utility/submitRelocation";
import Modal from "../../../../components/Modal/Modal";
import ButtonLayout from "../../../../components/ButtonLayout/ButtonLayout";
import Contents from "../../../../components/Contents/Contents";
import StepHeader from "../../../../components/StepHeader/StepHeader";
import useModal from "../../../../Hooks/useModal";
import useActiveStep from "../../../../Hooks/useActiveStep";

const RelocationDesktop = ({ setSelectedTab, setRefresh }) => {
  const [location, setLocation] = useState("");
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const [questionResponseMapping, setQuestionResponseMapping] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { handleModalOpen, handleModalClose, handleOutsideClick, isModalOpen } = useModal();
  const {activeStep, handleNext, handleBack} = useActiveStep();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const URL = `${config.endpoint}/user/relocationquestionnaire`;
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

  const handleInputChange = (questionId, value) => {
    setResponses((prev) => ({ ...prev, [questionId]: value }));
    const update = JSON.parse(JSON.stringify(questionResponseMapping));
    const idx = update.indexOf(
      update.find((item) => item.questionId === questionId)
    );
    update[idx]["response"] = value;
    setQuestionResponseMapping(update);
  };

  const handleSubmit = () => {
    submitRelocation({
      location,
      setIsLoading,
      questionResponseMapping,
      enqueueSnackbar,
      setSelectedTab,
      setRefresh,
      handleModalClose
    });
    
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
            header={"Request Relocation"}
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            steps={relocationSteps}
          />

          <Contents
            stepCategory="Relocation"
            activeStep={activeStep}
            steps={relocationSteps}
            location={location}
            setLocation={setLocation}
            handleInputChange={handleInputChange}
            questionResponseMapping={questionResponseMapping}
          />

          <ButtonLayout
            stepCategory="Relocation"
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            steps={relocationSteps}
            handleModalOpen={handleModalOpen}
            location={location}
            questionResponseMapping={questionResponseMapping}
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
            <RelocationMobile
              location={location}
              setLocation={setLocation}
              questionResponseMapping={questionResponseMapping}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
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

export default RelocationDesktop;
