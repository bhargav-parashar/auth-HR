import React from "react";
import Questionnaire from "../Questionnaire/Questionnaire";

const RelocationStep2 = ({handleInputChange, questionResponseMapping}) => {
  return (
    <Questionnaire
      handleInputChange={handleInputChange}
      questionResponseMapping={questionResponseMapping}
    />
  );
};

export default RelocationStep2;
