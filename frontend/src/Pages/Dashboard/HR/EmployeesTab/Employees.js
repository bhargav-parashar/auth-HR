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
import useGetAllUserDetails from "../../../../Hooks/useAllGetUserDetails";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import MenuItem from "@mui/material/MenuItem";

const Employees = () => {
  const { users, setUsers } = useGetAllUserDetails();

  return (
    <Box
      sx={{
        height: "100%",
        overflowY: "auto",
        paddingX: 2,
      }}
    >
      <Typography px={2} mb={1} variant="h5">
        All Employees
      </Typography>
      <Stack px={2} mb={2} direction="row" alignItems="center">
        <TextField
          sx={{
            // border: "1px solid #F0F0F0",
            flex: 1,
            padding: "none",
            "& .MuiOutlinedInput-input": {
              fontSize: { xs: "3vw", sm: "1.5vw", md: "1.1vw" },
            },
          }}
          size="small"
          placeholder="Employee Name"
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
          // value={searchItem}
          // onChange={(e) => setSearchItem(e.target.value)}
        />
        <FormControl
          sx={{
            m: 1,
            // minWidth: 120,
            width: "33.33%",
          }}
          size="small"
        >
          {
            <Select
              // name={name}
              // value={value}
              displayEmpty
              // onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <PlaceOutlinedIcon />
                </InputAdornment>
              }
              // disabled={disabled}
            >
              <MenuItem disabled value="">
                <em>filtere</em>
              </MenuItem>
              {
                // items.map((item,idx)=><MenuItem key={idx} value={item}>{item}</MenuItem>)
                <MenuItem key={1} value={`abc`}>{`abc`}</MenuItem>
              }
            </Select>
          }
        </FormControl>
        <FormControl
          sx={{
            m: 1,
            // minWidth: 120,
            width: "33.33%",
          }}
          size="small"
        >
          {
            <Select
              // name={name}
              // value={value}
              displayEmpty
              // onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <PlaceOutlinedIcon />
                </InputAdornment>
              }
              // disabled={disabled}
            >
              <MenuItem disabled value="">
                <em>filtere</em>
              </MenuItem>
              {
                // items.map((item,idx)=><MenuItem key={idx} value={item}>{item}</MenuItem>)
                <MenuItem key={1} value={`abc`}>{`abc`}</MenuItem>
              }
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
        {users &&
          users.length > 0 &&
          users.map((user, idx) => (
            <Box key={idx} sx={{ width: "33.33%", height: "100%", padding: 1 }}>
              <Details isGrid isMobile user={user} />
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Employees;
