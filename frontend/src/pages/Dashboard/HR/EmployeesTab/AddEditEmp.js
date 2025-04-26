import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  styled,
} from "@mui/material";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import { Link } from "react-router-dom";
import Loader from "../../../../components/Loader/Loader";
import LoginCarousel from "../../../../components/Carousel/LoginCarousel";
import {
  loadingCarousel,
  departments,
  locations,
} from "../../../../constants/constants";
import Loader from "../../../../components/Loader/Loader";

const CustomTextBox = styled(TextField)(() => ({
  marginBottom: 10,
  width: "100%",
  fontSize: "0.875rem",
  "& .MuiInputLabel-root": {
    color: "black",
    fontSize: "0.8rem",
    transform: "translate(14px, -9px) scale(0.75)",
    transformOrigin: "top left",
  },
  "& .MuiInputLabel-shrink": {
    transform: "translate(14px, -9px) scale(0.75)",
  },
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: " rgba(246,228,204,1)",
    fontSize: "0.875rem",
    "& fieldset": { borderColor: "rgb(80, 79, 78)" },
    "&:hover fieldset": { borderColor: "rgb(81, 81, 228)" },
    "&.Mui-focused fieldset": { borderColor: "rgb(81, 81, 228)" },
  },
  "& .MuiInputBase-input": {
    color: "black",
    padding: "8px 10px",
    fontSize: "0.875rem",
  },
}));

const AddEditEmp = ({
  formData,
  handleChange,
  handleRegister,
  isLoading,
  isEdit,
  handleUserUpdate,
}) => {
  const [updatedData, setUpdatedData] = useState({
    username: formData.username,
    password: "",
    confirmpassword: "",
    department: formData.department,
    location: formData.location,
  });

  const disabled =
    formData._id === "67a3950a04fbad8753fc0f18" ||
    formData._id === "67d85cbaccf002f5a1bf809c";

  useEffect(() => {
    setUpdatedData(formData);
  }, [formData]);

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateClick = (updatedData) => {
    handleUserUpdate(updatedData);
  };

  return (
    <Stack direction="column" gap={2}>
      <Stack direction="column" gap={1}>
        <CustomTextBox
          id="username"
          name="username"
          placeholder="User Name"
          label={updatedData.username ? "User Name" : ""}
          variant="outlined"
          value={
            disabled
              ? ` ${updatedData.username} (This user's username cannot be updated)`
              : updatedData.username
          }
          onChange={isEdit ? handleUpdate : handleChange}
          InputProps={{ readOnly: disabled }}
        />

        <CustomTextBox
          id="password"
          name="password"
          placeholder={
            disabled
              ? "This user's password cannot be updated"
              : isEdit
              ? "Update Password (leave blank to keep old password)"
              : "Password"
          }
          label={updatedData.password ? "Password" : ""}
          type="password"
          variant="outlined"
          value={updatedData.password}
          onChange={isEdit ? handleUpdate : handleChange}
          InputProps={{ readOnly: disabled }}
          helperText={!disabled && "Password must be atleast 5 characters long"}
        />
        <CustomTextBox
          id="confirmpassword"
          name="confirmpassword"
          placeholder={
            disabled
              ? "This user's password cannot be updated"
              : isEdit
              ? "Confirm Password (leave blank to keep old password)"
              : "Confirm Password"
          }
          label={updatedData.confirmpassword ? "Confirm Password" : ""}
          type="password"
          variant="outlined"
          value={updatedData.confirmpassword}
          onChange={isEdit ? handleUpdate : handleChange}
          InputProps={{ readOnly: disabled }}
        />
        <Stack direction="row" gap={1}>
          <Dropdown
            id="location"
            name="location"
            value={updatedData.location}
            handleChange={isEdit ? handleUpdate : handleChange}
            placeholder="Location"
            items={locations}
            isHR
          />
          <Dropdown
            id="department"
            name="department"
            value={updatedData.department}
            handleChange={isEdit ? handleUpdate : handleChange}
            placeholder="Department"
            items={departments}
            isHR
          />
        </Stack>
      </Stack>
      {isLoading && !isEdit ? (
        <Box mt={5}>
          <Stack direction="row">
            <Loader />
            <LoginCarousel
              slidesPerView={1}
              delay={3000}
              data={loadingCarousel.map((slide) => (
                <Typography key={slide.id} sx={{ color: "white" }}>
                  {slide.txt}
                </Typography>
              ))}
            />
          </Stack>
        </Box>
      ) : !isLoading  && isEdit  ? (
        <Button
          sx={{
            marginTop: "15px",
            marginBottom: "25px",
            height: "45px",
            borderRadius: "0.5rem",
            background: " rgb(240, 188, 121)",
            "&:hover": {
              background: "rgb(228, 158, 67)",
            },
            color: "black",
          }}
          variant="contained"
          onClick={() => handleUpdateClick(updatedData)}
        >
          Update
        </Button>
      ) : isLoading && isEdit ? (
        <Loader isColored />
      ) : (
        <Button
          sx={{
            marginTop: "15px",
            marginBottom: "25px",
            height: "45px",
            borderRadius: "0.5rem",
            background: " rgb(240, 188, 121)",
            "&:hover": {
              background: "rgb(228, 158, 67)",
            },
            color: "black",
          }}
          variant="contained"
          onClick={handleRegister}
        >
          Register
        </Button>
      )}
    </Stack>
  );
};

export default AddEditEmp;
