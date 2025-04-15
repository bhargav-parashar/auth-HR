import { Stack, Box, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Shimmer from "../../../../components/ShimmerUI/Shimmer";
import Badge from "@mui/material/Badge";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import Tooltip from "@mui/material/Tooltip";
import { holidays } from "../../../../constants/holidays";

const highlightedDates = holidays.map((item) => ({
  date: dayjs(item.date),
  label: item.label,
}));

function CustomDay(props) {
  const { day, outsideCurrentMonth, ...other } = props;

  const match = highlightedDates.find((highlighted) =>
    highlighted.date.isSame(day, "day")
  );

  if (outsideCurrentMonth) {
    return (
      <PickersDay
        {...other}
        day={day}
        outsideCurrentMonth={outsideCurrentMonth}
        disabled
      />
    );
  }

  const content = (
    <Badge overlap="circular" badgeContent={match ? "📌" : undefined}>
      <PickersDay
        {...other}
        day={day}
        outsideCurrentMonth={outsideCurrentMonth}
        disabled
      />
    </Badge>
  );

  return match ? (
    <Tooltip title={match.label}>
      <span>{content}</span>
    </Tooltip>
  ) : (
    content
  );
}

const CalendarSection = ({ isLoading }) => {
  return (
    <Box
      sx={{
        borderRadius: "0.6rem",
        width: "100%",
        cursor: "pointer",
        height: "100%",
        bgcolor : "primary.calendar",
        transition: 'transform 0.3s ease, background-color 0.3s ease',
        '&:hover': {
          transform: 'scale(1.015)'
        }
      }}
    >
     
      {isLoading && <Shimmer cover />}
      {!isLoading && (
        <Stack direction="row" alignItems="center" justifyContent="center">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateCalendar"]}>
              <DemoItem>
                <DateCalendar
                  views={["day"]}
                  defaultValue={dayjs(new Date())}
                  readOnly
                  slots={{ day: CustomDay }}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </Stack>
      )}
    </Box>
  );
};

export default CalendarSection;
