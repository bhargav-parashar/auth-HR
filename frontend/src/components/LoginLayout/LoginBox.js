import React from "react";
import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  Divider,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import LoginCarousel from "../Carousel/LoginCarousel";
import { loadingCarousel } from "../../constants/constants";
import ShimmerButton from "../ButtonLayout/ShimmerButton";

const CustomTextBox = styled(TextField)(() => ({
  marginBottom: 2,
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

const LoginBox = ({ formData, handleChange, handleLogin, isLoading }) => {
  return (
    <Stack direction="column" gap={2}>
      <Box>
        <Typography color="white" variant="h4">
          Login
        </Typography>
        <Typography mb={2} color="lightgray" variant="subtitle2">
          Don't have an account ?{" "}
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "#1976d2" }}
          >
            Register
          </Link>
        </Typography>
      </Box>

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
      {isLoading ? (
        <Box sx={{ marginTop: "25px", marginBottom: "26px" }}>
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
            height: "45px",
            borderRadius: "0.5rem",
            marginTop: "25px",
            marginBottom: "15px",
            background: " rgba(246,228,204,1)",
            color: "black",
            "&:hover": {
              background: "rgb(240, 188, 121)",
            },
          }}
          variant="contained"
          onClick={() => handleLogin(false, false, true)}
        >
          Login
        </Button>
      )}

      <Divider
        sx={{
          "&::before, &::after": {
            borderTopWidth: "thin",
            borderColor: "gray",
          },
        }}
      >
        <Typography variant="body2" sx={{ px: 1, color: "lightgray" }}>
          Or Login As
        </Typography>
      </Divider>
      <Stack sx={{ marginTop: "15px" }} direction="row" gap={1}>
        <ShimmerButton
          label="Guest HR"
          handleClick={() => handleLogin(true, false, false)}
        />
        <ShimmerButton
          label="Guest Employee"
          handleClick={() => handleLogin(false, true, false)}
        />
      </Stack>
    </Stack>
  );
};

export default LoginBox;
