import React from "react";
import DatePicker from "../DatePicker/DatePickerField";
import { Typography, Stack } from "@mui/material";
import InsufficientBalCard from "../Cards/InsufficientBal";
import { formatDistance, addDays, differenceInDays } from "date-fns";
import { leaveSteps } from "../../constants/constants";

const LeaveStep2 = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  leaveType,
  leaveBal
}) => {

  dateDifference = (date1, date2) => {
    if (date1 && date2) return differenceInDays(date1, date2) + 1;
    return 0;
  };

  return (
    <>
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
          <Stack justifyContent="center">
            <Typography color="primary.light">
              {formatDistance(startDate, addDays(endDate, 1))}
            </Typography>
          </Stack>
        )}
      </Stack>
      { dateDifference(endDate, startDate) > leaveBal && (
        <InsufficientBalCard
          leaveType={leaveType}
          leaveBal={leaveBal}
          dateDiff={dateDifference(endDate, startDate)}
        />
      )}
    </>
  );
};

export default LeaveStep2;
