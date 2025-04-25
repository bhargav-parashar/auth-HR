import React from 'react';
import DatePicker from "../DatePicker/DatePickerField";
import {Box,Typography, Stack} from "@mui/material";
import { formatDistance, addDays } from "date-fns";

const LeaveStep3 = ({leaveType,startDate, endDate}) => {
  return (
    <Box>
              <Stack direction="row" gap={1}>
                <Typography variant="body2" mb={1}>
                  Applying for :{" "}
                </Typography>
                <Typography color="primary.light" variant="body2">
                  {leaveType}{" "}
                </Typography>
              </Stack>
              <Stack direction="row" gap={1}>
                <Typography variant="body2" mb={3}>
                  No of days :{" "}
                </Typography>
                <Typography color="primary.light" variant="body2">
                  {formatDistance(startDate, addDays(endDate, 1))}{" "}
                </Typography>
              </Stack>
              <Stack direction="row" gap={1}>
                <DatePicker
                  label="Start Date"
                  disabled={true}
                  dateField={startDate}
                />
                <DatePicker
                  label="End Date"
                  disabled={true}
                  minDate={startDate}
                  dateField={endDate}
                />
              </Stack>
            </Box>
  )
}

export default LeaveStep3
