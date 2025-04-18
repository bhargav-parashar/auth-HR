import React from "react";
import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  styled,
} from "@mui/material";
import Dropdown from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import LoginCarousel from "../Carousel/LoginCarousel";
import {
  loadingCarousel,
  departments,
  locations,
} from "../../constants/constants";

const CustomTextBox = styled(TextField)(() => ({
  marginBottom: 10,
  width: "100%",
  color: "white",
  fontSize: "0.875rem",
  "& .MuiInputLabel-root": {
    color: "lightgray",
    fontSize: "0.8rem",
    transform: "translate(14px, -9px) scale(0.75)",
    transformOrigin: "top left",
  },
  "& .MuiInputLabel-shrink": {
    transform: "translate(14px, -9px) scale(0.75)",
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgb(80, 79, 78)",
    fontSize: "0.875rem",
    "& fieldset": { borderColor: "lightgray" },
    "&:hover fieldset": { borderColor: "white" },
    "&.Mui-focused fieldset": { borderColor: "white" },
  },
  "& .MuiInputBase-input": {
    color: "white",
    padding: "8px 10px",
    fontSize: "0.875rem",
  },
}));

const RegisterBox = ({ formData, handleChange, handleRegister, isLoading }) => {
  return (
    <Stack direction="column" gap={2}>
      <Box>
        <Typography color="white" variant="h4">
          Register
        </Typography>
        <Typography mb={2} color="lightgray" variant="subtitle2">
          Have an account ?{" "}
          <Link to="/" style={{ textDecoration: "none", color: "#1976d2" }}>
            Login
          </Link>
        </Typography>
      </Box>

      <Stack direction="column" gap={1}>
        <CustomTextBox
          id="username"
          name="username"
          placeholder="User Name"
          label={formData.username ? "User Name" : ""}
          variant="outlined"
          value={formData.username}
          onChange={handleChange}
        />

        <CustomTextBox
          id="password"
          name="password"
          placeholder="Password"
          label={formData.password ? "Password" : ""}
          type="password"
          variant="outlined"
          value={formData.password}
          onChange={handleChange}
        />
        <Typography mb={1} color="lightgray" variant="subtitle2">
          Password must be atleast 5 characters long
        </Typography>
        <CustomTextBox
          id="confirmpassword"
          name="confirmpassword"
          placeholder="Confirm Password"
          label={formData.confirmpassword ? "Confirm Password" : ""}
          type="password"
          variant="outlined"
          value={formData.confirmpassword}
          onChange={handleChange}
        />
        <Stack direction="row" gap={1}>
          <Dropdown
            id="location"
            name="location"
            value={formData.location}
            handleChange={handleChange}
            placeholder="Location"
            items={locations}
          />
          <Dropdown
            id="department"
            name="department"
            value={formData.department}
            handleChange={handleChange}
            placeholder="Department"
            items={departments}
          />
        </Stack>
      </Stack>
      {isLoading ? (
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
      ) : (
        <Button
          sx={{
            marginTop: "15px",
            marginBottom: "25px",
            height: "45px",
            borderRadius: "0.5rem",
            background: " rgba(246,228,204,1)",
            "&:hover": {
              background: " rgb(240, 188, 121)",
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

export default RegisterBox;
