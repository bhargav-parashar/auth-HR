import React from 'react';
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Select, MenuItem } from "@mui/material";
import { locations } from "../../constants/constants";
import useGetLoggedInUser from '../../Hooks/useGetLoggedInUser';

const RelocationStep1 = ({location, handleLocationChange}) => {
  const {user} = useGetLoggedInUser();
  const currLocation = user?.location;
  const updatedLocations = locations.filter((item)=>item !== currLocation);
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
                {updatedLocations.map((item, idx) => (
                  <MenuItem key={idx} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
  )
}

export default RelocationStep1
