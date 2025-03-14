import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import Dropdown from "../Dropdown/Dropdown";
import { useSnackbar } from "notistack";
import config from "../../../config/config";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";

const LoginInput = ({ isRegister = false }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    department: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const registerValidateInput = (formData) => {
    if (formData.username.length === 0) {
      enqueueSnackbar("Username is a required field", { variant: "warning" });
      return false;
    } else if (formData.username.length < 5) {
      enqueueSnackbar("Username must be at least 5 characters", {
        variant: "warning",
      });
      return false;
    } else if (formData.department.length === 0) {
      enqueueSnackbar("Department is a required field", { variant: "warning" });
      return false;
    } else if (formData.password.length === 0) {
      enqueueSnackbar("Password is a required field", { variant: "warning" });
      return false;
    } else if (formData.password.length < 5) {
      enqueueSnackbar("Password must be at least 6 characters", {
        variant: "warning",
      });
      return false;
    } else if (formData.password !== formData.confirmpassword) {
      enqueueSnackbar("Passwords do not match", { variant: "warning" });
      return false;
    } else {
      return true;
    }
  };

  const loginValidateInput = (formData) => {
    if (formData.username.length === 0) {
      enqueueSnackbar("Username is a required field", { variant: "warning" });
      return false;
    } else if (formData.username.length < 5) {
      enqueueSnackbar("Username must be at least 5 characters", {
        variant: "warning",
      });
      return false;
    } else if (formData.password.length === 0) {
      enqueueSnackbar("Password is a required field", { variant: "warning" });
      return false;
    } else if (formData.password.length < 5) {
      enqueueSnackbar("Password must be at least 6 characters", {
        variant: "warning",
      });
      return false;
    } else {
      return true;
    }
  };

  const handleRegister = async (formData) => {
    if (!registerValidateInput(formData)) return;
    const URL = `${config.endpoint}/auth/register`;

    const body = {
      username: formData.username,
      password: formData.password,
      department: formData.department,
    };

    try {
      setIsLoading(true);
      const res = await axios.post(URL, body);
      setFormData({
        username: "",
        password: "",
        confirmPassword: "",
        department: "",
      });
      enqueueSnackbar("Registered successfully", { variant: "success" });
      navigate("/");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (formData) => {
    if (!loginValidateInput(formData)) return;
    const URL = `${config.endpoint}/auth/login`;

    const body = {
      username: formData.username,
      password: formData.password
    };

    try {
      setIsLoading(true);
      const res = await axios.post(URL, body);
      setFormData({
        username: "",
        password: ""
      });
      console.log(res);
      enqueueSnackbar(`Logged In as ${formData.username}`, {
        variant: "success",
      });
      navigate("/");
    } catch (err) {
      console.log(err);
      enqueueSnackbar(err.response.data.message, { variant: "warning" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        height: "100%",
      }}
      pt={{ xs: "10%", md: "40%" }}
    >
      {isRegister ? (
        <Stack direction="column" gap={2}>
          <Typography color="white" variant="h2">
            Register
          </Typography>
          <Typography mb={2} color="lightgray" variant="subtitle2">
            Have an account ?{" "}
            <Link to="/" style={{ textDecoration: "none", color: "#1976d2" }}>
              Login
            </Link>
          </Typography>
          <Stack direction="column" gap={1}>
            <Stack direction="row" gap={1}>
              <TextField
                sx={{
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
                }}
                id="username"
                name="username"
                label="User Name"
                variant="outlined"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <Dropdown
                id="department"
                name="department"
                value={formData.department}
                handleChange={(e) => handleChange(e)}
                placeholder="Department"
                items={["Finance", "IT", "Sales", "Marketing", "Operations"]}
              />
            </Stack>

            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              sx={{
                width: "100%",
                color: "white",
                "& .MuiInputLabel-root": { color: "lightgray" },
                "& label.Mui-focused": { color: "white" },
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgb(80, 79, 78)",
                  "& fieldset": { borderColor: "lightgray" }, // Default border color
                  "&:hover fieldset": { borderColor: "white" }, // Hover border color
                  "&.Mui-focused fieldset": { borderColor: "white" }, // Focus border color
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
              onChange={(e) => handleChange(e)}
            />
            <Typography mt={1} mb={2} color="lightgray" variant="subtitle2">
              Password must be atleast 5 characters long
            </Typography>
            <TextField
              id="confirmpassword"
              name="confirmpassword"
              label="Confirm Password"
              type="password"
              variant="outlined"
              onChange={(e) => handleChange(e)}
              sx={{
                width: "100%",
                color: "white",
                "& .MuiInputLabel-root": { color: "lightgray" },
                "& label.Mui-focused": { color: "white" },
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgb(80, 79, 78)",
                  "& fieldset": { borderColor: "lightgray" }, // Default border color
                  "&:hover fieldset": { borderColor: "white" }, // Hover border color
                  "&.Mui-focused fieldset": { borderColor: "white" }, // Focus border color
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
            />
          </Stack>
          {isLoading ? (
            <Box mt={5}>
              <Loader />
            </Box>
          ) : (
            <Button
              sx={{
                marginTop: "25px",
                marginBottom: "25px",
                height: "45px",
                borderRadius: "0.5rem",
                marginTop: "25px",
                background: " rgba(246,228,204,1)",
                color: "black",
              }}
              variant="contained"
              onClick={() => {
                handleRegister(formData);
              }}
            >
              Register
            </Button>
          )}
        </Stack>
      ) : (
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
          <TextField
            id="username"
            name="username"
            label="User Name"
            variant="outlined"
            onChange={(e) => handleChange(e)}
            sx={{
              marginBottom: 1,
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
            }}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            onChange={(e) => handleChange(e)}
            sx={{
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
            }}
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
              onClick={() => handleLogin(formData)}
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
              }}
              variant="outlined"
              onClick={() => {}}
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
              }}
              variant="outlined"
              onClick={() => {}}
            >
              Guest Employee
            </Button>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default LoginInput;
