import React from "react";
import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  Divider,
  styled
} from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

const CustomTextBox = styled(TextField)(() => ({
    width: "100%",
    color: "white",
    "& .MuiInputLabel-root": { color: "lightgray" },
    "& label.Mui-focused": { color: "white" },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "rgb(80, 79, 78)",
      "& fieldset": { borderColor: "lightgray" },
      "&:hover fieldset": { borderColor: "white" },
      "&.Mui-focused fieldset": { borderColor: "white" },
    },
    "& .MuiInputBase-input": {
      color: "white",
    },
  }));

const LoginBox = ({ formData, handleChange, handleLogin, isLoading }) => {
  return (
    <Stack direction="column" gap={2}>
      <Typography color="white" variant="h2">
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
      <CustomTextBox
        id="username"
        name="username"
        label="User Name"
        variant="outlined"
        value={formData.username}
        onChange={handleChange}
      />
      <CustomTextBox
        id="password"
        name="password"
        label="Password"
        type="password"
        variant="outlined"
        value={formData.password}
        onChange={handleChange}
      />
      {isLoading ? (
        <Box mt={5}>
          <Loader />
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
              background: " rgb(105, 208, 240)",
            },
          }}
          variant="contained"
          onClick={handleLogin}
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
        <Button
          sx={{
            border: "1px solid white",
            height: "45px",
            width: "100%",
            borderRadius: "0.5rem",
            color: "white",
            "&:hover": {
              background: " rgba(246,228,204,1)",
              color: "black",
            },
            fontSize: "11px"
          }}
          variant="outlined"
          onClick={ () => handleLogin(true, false) }
        >
          Guest HR
        </Button>
        <Button
          sx={{
            border: "1px solid white",
            height: "45px",
            width: "100%",
            borderRadius: "0.5rem",
            color: "white",
            "&:hover": {
              background: " rgba(246,228,204,1)",
              color: "black",
            },
            fontSize: "11px"
          }}
          variant="outlined"
          onClick={ () => handleLogin(false, true) }
        >
          Guest Employee
        </Button>
      </Stack>
    </Stack>
  );
};

export default LoginBox;
