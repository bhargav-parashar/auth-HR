import React from "react";
import {
  Box,
  Typography,
  Stack,
  TextField,
  FormControl,
  Select,
} from "@mui/material";
import Details from "../../Employee/HomeTab/Details";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import MenuItem from "@mui/material/MenuItem";
import useDebouncedSearchFilter from "../../../../Hooks/useDebouncedSearchFilter";
import { departments, locations } from "../../../../constants/constants";
import EmployeeMobile from "./EmployeeMobile";

const Employees = () => {
  const {
    filteredData,
    department,
    handleDeptChange,
    location,
    handleLocationChange,
    searchInput,
    handleSearchInputChange,
  } = useDebouncedSearchFilter();

  return (
    <Box
      sx={{
        height: "100%",
        overflowY: "auto",
        paddingX: 2,
      }}
    >
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Typography px={2} mb={1} variant="h5">
          Employees
        </Typography>
        <Stack px={2} mb={2} direction="row" alignItems="center">
          <TextField
            sx={{
              flex: 1,
              padding: "none",
              "& .MuiOutlinedInput-input": {
                fontSize: { xs: "3vw", sm: "1.5vw", md: "1.1vw" },
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "rgb(124, 124, 247)",
                },
              },
            }}
            size="small"
            placeholder="Employee Name (debounced)"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon />
                  </InputAdornment>
                ),
              },
            }}
            required
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <FormControl
            sx={{
              m: 1,
              width: "33.33%",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "rgb(124, 124, 247)",
                },
              },
            }}
            size="small"
          >
            {
              <Select
                value={department}
                displayEmpty
                onChange={handleDeptChange}
                startAdornment={
                  <InputAdornment position="start">
                    <HomeWorkIcon />
                  </InputAdornment>
                }
              >
                <MenuItem value="">
                  <em>All Departments</em>
                </MenuItem>
                {departments.map((item, idx) => (
                  <MenuItem key={idx} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            }
          </FormControl>
          <FormControl
            sx={{
              m: 1,
              width: "33.33%",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "rgb(124, 124, 247)",
                },
              },
            }}
            size="small"
          >
            {
              <Select
                value={location}
                displayEmpty
                onChange={handleLocationChange}
                startAdornment={
                  <InputAdornment position="start">
                    <PlaceOutlinedIcon />
                  </InputAdornment>
                }
              >
                <MenuItem value="">
                  <em>All Locations</em>
                </MenuItem>
                {locations.map((item, idx) => (
                  <MenuItem key={idx} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            }
          </FormControl>
        </Stack>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {filteredData &&
            filteredData.length > 0 &&
            filteredData.map((user, idx) => (
              <Box
                key={idx}
                sx={{ width: "33.33%", height: "100%", padding: 1 }}
              >
                <Details isGrid isMobile user={user} />
              </Box>
            ))}
        </Box>
      </Box>
      <EmployeeMobile
        searchInput={searchInput}
        handleSearchInputChange={handleSearchInputChange}
        department={department}
        handleDeptChange={handleDeptChange}
        location={location}
        handleLocationChange={handleLocationChange}
        filteredData={filteredData}
      />
    </Box>
  );
};

export default Employees;
