import { departments, locations } from "../../../../constants/constants";
import {
  Box,
  Typography,
  Stack,
  TextField,
  FormControl,
  Select,
  Button,
} from "@mui/material";
import Details from "../../Employee/HomeTab/Details";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import MenuItem from "@mui/material/MenuItem";
import Shimmer from "../../../../components/ShimmerUI/Shimmer";

const EmployeeMobile = ({
  searchInput,
  handleSearchInputChange,
  department,
  handleDeptChange,
  location,
  handleLocationChange,
  filteredData,
  isLoading,
  handleAddEmployee,
  setIsEdit,
  handleModalOpen,
  setSelectedUser
}) => {
  return (
    <Box mt={5} sx={{ height: "100%", display: { xs: "block", md: "none" } }}>
      <Stack
        direction="row"
        sx={{ width: "100%" }}
        justifyContent="space-between"
      >
        <Typography mb={1} variant="h5">
          Employees
        </Typography>
        <Box>
          <Button
            onClick={handleAddEmployee}
            sx={{
              bgcolor: "primary.contrast",
              "&:hover": {
                backgroundColor: "secondary.dark",
              },
            }}
            size="small"
          >
            + Employee
          </Button>
        </Box>
      </Stack>
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
        fullWidth
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
      <Stack mt={1} mb={2} gap={1} direction="row" alignItems="center">
        <FormControl
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "rgb(124, 124, 247)",
              },
            },
          }}
          size="small"
          fullWidth
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
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "rgb(124, 124, 247)",
              },
            },
          }}
          size="small"
          fullWidth
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
      {!isLoading && filteredData && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {filteredData &&
            filteredData.length > 0 &&
            filteredData.map((user, idx) => (
              <Box key={idx} sx={{ width: "100%", height: "100%", padding: 1 }}>
                <Details
                  isHR
                  isGrid
                  isMobile
                  user={user}
                  setIsEdit={setIsEdit}
                  handleModalOpen={handleModalOpen}
                  setSelectedUser={setSelectedUser}
                />
              </Box>
            ))}
        </Box>
      )}
      {!isLoading && (!filteredData || filteredData.length === 0) && (
        <Typography mt={5} textAlign="center">
          No employees found !
        </Typography>
      )}
      {isLoading && (
        <Box
          alignItems="center"
          flex={1}
          p={1}
          sx={{
            height: "100%",
            borderRadius: "0.6rem",
            bgcolor: "primary.inactive3",
          }}
        >
          <Shimmer />
        </Box>
      )}
    </Box>
  );
};

export default EmployeeMobile;
