import React from 'react';
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Select, MenuItem } from "@mui/material";
import { leaveTypes } from "../../constants/constants";

const LeaveStep1 = ({leaveType,handleLeaveTypeChange}) => {
  return (
    <FormControl size="small" sx={{ width: "100%" }}>
    <InputLabel id="location-picker">
      {!leaveType ? "Leave Type" : null}
    </InputLabel>
    <Select
      name="leaveType"
      value={leaveType}
      onChange={handleLeaveTypeChange}
      sx={{ width: "50%", bgcolor:'primary.dropdown' }}
    >
      <MenuItem disabled value="">
        Leave Type
      </MenuItem>
      {leaveTypes.map((item, idx) => (
        <MenuItem key={idx} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
  )
}

export default LeaveStep1
