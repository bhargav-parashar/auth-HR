import { useState } from "react";
import dayjs from "dayjs";
import isBetweenPlugin from "dayjs/plugin/isBetween";
import { styled } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";

dayjs.extend(isBetweenPlugin);

// Styled PickersDay with conditional highlighting
const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) => prop !== "isInRange",
})(({ theme, isInRange }) => ({
  
  borderRadius: "0",
  ...(isInRange && {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.main,
    },
  }),
}));

// Custom Day renderer
function Day(props) {
  const { day, startDate, endDate, ...other } = props;

  const isSameDay = startDate.isSame(endDate, "day");
  const isStart = day.isSame(startDate, "day");
  const isEnd = day.isSame(endDate, "day");

  const isInRange =
    isStart || isEnd || day.isBetween(startDate, endDate, null, "[]");

  let borderRadiusStyle = { borderRadius: 0 };

  if (isSameDay && isStart) {
    borderRadiusStyle = { borderRadius: "50%" };
  } else if (isStart) {
    borderRadiusStyle = {
      borderTopLeftRadius: "50%",
      borderBottomLeftRadius: "50%",
    };
  } else if (isEnd) {
    borderRadiusStyle = {
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
    };
  }

  return (
    <CustomPickersDay
      {...other}
      day={day}
      sx={{ px: 2.5, ...borderRadiusStyle }}
      disableMargin
      selected={false}
      disabled
      isInRange={isInRange}
    />
  );
}

// Main component accepting props
export default function WeekPicker({ startDate, endDate }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        views={["day"]}
        value={null}
        readOnly
        showDaysOutsideCurrentMonth
        slots={{ day: Day }}
        slotProps={{
          day: (ownerState) => ({
            startDate,
            endDate,
            day: ownerState.day,
          }),
        }}
        sx={{
          '.MuiPickersDay-today': {
      borderRadius: '50%'
    },
        }}
      />
    </LocalizationProvider>
  );
}
