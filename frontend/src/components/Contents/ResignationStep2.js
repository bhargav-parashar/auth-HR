import React from "react";
import Questionnaire from "../Questionnaire/Questionnaire";

const ResignationStep2 = ({handleInputChange, questionResponseMapping}) => {
  return (
    <Questionnaire
      handleInputChange={handleInputChange}
      questionResponseMapping={questionResponseMapping}
    />
  );
};

export default ResignationStep2;