import React from "react";
import DatePicker from "../DatePicker/DatePickerField";

const ResignationsStep1 = ({label, dateField, setDateField}) => {
  return (
    <DatePicker
      label={"Last Working Day"}
      dateField={dateField}
      setDateField={setDateField}
    />
  );
};

export default ResignationsStep1;
