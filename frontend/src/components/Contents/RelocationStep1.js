import React from 'react';
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Select, MenuItem } from "@mui/material";
import { locations } from "../../constants/constants";

const RelocationStep1 = ({location, handleLocationChange}) => {
  return (
    <FormControl size="small" sx={{ width: "100%" }}>
              <InputLabel id="location-picker">
                {!location ? "Location" : null}
              </InputLabel>
              <Select
                labelId="location-picker"
                name="location"
                value={location}
                onChange={handleLocationChange}
                sx={{
                  width: "50%",
                }}
              >
                <MenuItem disabled value="">
                  Location
                </MenuItem>
                {locations.map((item, idx) => (
                  <MenuItem key={idx} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
  )
}

export default RelocationStep1
