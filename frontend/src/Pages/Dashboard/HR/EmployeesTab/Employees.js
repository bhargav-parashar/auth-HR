import React,{useState} from "react";
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
import useDebouncedSearchFilter from "../../../../Hooks/useDebouncedSearchFilter";
import { departments, locations } from "../../../../constants/constants";
import EmployeeMobile from "./EmployeeMobile";
import Shimmer from "../../../../components/ShimmerUI/Shimmer";
import useModal from "../../../../Hooks/useModal";
import AddEditEmpModal from "../../../../components/Modal/AddEditEmpModal";

const Employees = ({getEmployeeData}) => {
   
  const [selectedUser, setSelectedUser] = useState('');
  const [ isEdit, setIsEdit] = useState(false);

  const {
    filteredData,
    department,
    handleDeptChange,
    location,
    handleLocationChange,
    searchInput,
    handleSearchInputChange,
    isLoading,
    queryEmployees
  } = useDebouncedSearchFilter();
  
  const { handleModalOpen, handleModalClose, handleOutsideClick, isModalOpen } = useModal();
  
  handleAddEmployee = () => { 
    setIsEdit(false);
    setSelectedUser('');
    handleModalOpen();
  }
  return (
    <Box
      sx={{
        height: "100%",
        paddingX: 2,
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#888",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
        scrollbarWidth: "thin",
        scrollbarColor: "#888 transparent",
      }}
    >
      <Box sx={{ height: "70%", display: { xs: "none", md: "block" } }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <Typography px={2} mb={1} variant="h5">
            Employees
          </Typography>
          <Box px={3}>
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
        {filteredData && !isLoading && (
          <Box
            pr={2}
            pl={1}
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
                  <Details
                    isHR
                    isGrid
                    isMobile
                    setIsEdit={setIsEdit}
                    user={user}
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
      <EmployeeMobile
        searchInput={searchInput}
        handleSearchInputChange={handleSearchInputChange}
        department={department}
        handleDeptChange={handleDeptChange}
        location={location}
        handleLocationChange={handleLocationChange}
        filteredData={filteredData}
        isLoading={isLoading}
      />
      {isModalOpen && (
        <AddEditEmpModal
          handleOutsideClick={handleOutsideClick}
          handleModalClose={handleModalClose}
          selectedUser={selectedUser}
          isEdit={isEdit}
          getEmployeeData={getEmployeeData}
          queryEmployees={queryEmployees}
        />
      )}
    </Box>
  );
};

export default Employees;
