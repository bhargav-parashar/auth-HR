import { useEffect, useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

function convert(str) {
  let mnths = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  if (!str) return null;
  let currDate = str.split(" ");

  return [currDate[3], mnths[currDate[1]], currDate[2]].join("-");
}

export default function BasicDatePicker({
  minDate,
  dateField,
  setDateField,
  disabled,
  isMobile,
  label,
}) {
  const [date, setDate] = useState(null);

  useEffect(() => {
    if (dateField) {
      setDate(dayjs(dateField));
    }
  }, [dateField]);

  const handleDateChange = (e) => {
    setDateField(convert(e?.$d.toString()));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label={label}
          minDate={dayjs(minDate)}
          disablePast
          disabled={disabled}
          value={date}
          onChange={handleDateChange}
          sx={{ width: isMobile ? "100%" : "50%" }}
          slotProps={{
            textField: { size: isMobile ? "large" : "small" },
            popper: {
              placement: "right",
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
