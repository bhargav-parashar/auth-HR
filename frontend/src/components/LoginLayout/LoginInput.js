import React, { useState } from "react";
import { Box } from "@mui/material";
import { useSnackbar } from "notistack";
import config from "../../config/config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RegisterBox from "./RegisterBox";
import LoginBox from "./LoginBox";
import { guestAdmin, guestEmployee } from "../../constants/constants";

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

  const handleRegister = async () => {
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

  const handleLogin = async (isGuestAdmin = false, isGuestEmp = false, isManualLogin=true ) => {
    if (isManualLogin && !loginValidateInput(formData)) return;
    const URL = `${config.endpoint}/auth/login`;

    const body = {
      username: isGuestAdmin
        ? guestAdmin.username
        : isGuestEmp
        ? guestEmployee.username
        : formData.username,
      password: isGuestAdmin
        ? guestAdmin.password
        : isGuestEmp
        ? guestEmployee.password
        : formData.password,
    };

    try {
      setIsLoading(true);
      const res = await axios.post(URL, body, { withCredentials: true });
      setFormData({
        username: "",
        password: "",
      });
      localStorage.setItem("loggedInUser", JSON.stringify(body.username));
      enqueueSnackbar(
        `Logged In as ${
          isGuestAdmin
            ? guestAdmin.username
            : isGuestEmp
            ? guestEmployee.username
            : formData.username
        }`,
        {
          variant: "success",
        }
      );
      navigate("/dashboard");
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
      pt={{ xs: 4, sm: 10 }}
    >
      {isRegister ? (
        <RegisterBox
          formData={formData}
          handleChange={handleChange}
          handleRegister={handleRegister}
          isLoading={isLoading}
        />
      ) : (
        <LoginBox
          formData={formData}
          handleChange={handleChange}
          handleLogin={handleLogin}
          isLoading={isLoading}
        />
      )}
    </Box>
  );
};

export default LoginInput;
