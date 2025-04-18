import React, { useState } from "react";
import { Box } from "@mui/material";
import { useSnackbar } from "notistack";
import config from "../config/config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { guestAdmin, guestEmployee } from "../constants/constants";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const useLoginRegister = (isHR, getEmployeeData, handleModalClose,queryEmployees) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    department: "",
    location: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

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
    } else if (formData.location.length === 0) {
      enqueueSnackbar("Location is a required field", { variant: "warning" });
      return false;
    } else if (formData.department.length === 0) {
      enqueueSnackbar("Department is a required field", { variant: "warning" });
      return false;
    } else {
      return true;
    }
  };

  const updateValidateInput = (formData) => {
    if (!formData.username || formData.username.length === 0) {
      enqueueSnackbar("Username is a required field", { variant: "warning" });
      return false;
    } else if (!formData.username || formData.username.length < 5) {
      enqueueSnackbar("Username must be at least 5 characters", {
        variant: "warning",
      });
      return false;
    } else if (formData.password && formData.password.length === 0) {
      enqueueSnackbar("Password is a required field", { variant: "warning" });
      return false;
    } else if (formData.password && formData.password.length < 5) {
      enqueueSnackbar("Password must be at least 6 characters", {
        variant: "warning",
      });
      return false;
    } else if (  (formData.password || formData.confirmpassword) && formData.password !== formData.confirmpassword) {
      enqueueSnackbar("Passwords do not match", { variant: "warning" });
      return false;
    } else if ( !formData.location || formData.location.length === 0) {
      enqueueSnackbar("Location is a required field", { variant: "warning" });
      return false;
    } else if ( !formData.department || formData.department.length === 0) {
      enqueueSnackbar("Department is a required field", { variant: "warning" });
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
      location: formData.location,
    };

    try {
      setIsLoading(true);
      const res = await axios.post(URL, body);
      setFormData({
        username: "",
        password: "",
        confirmPassword: "",
        department: "",
        location: "",
      });
      enqueueSnackbar("Registered successfully", { variant: "success" });
      if(!isHR){ 
        navigate("/")
      }else{
        queryEmployees();
        getEmployeeData();
        handleModalClose();
      }
      
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (
    isGuestAdmin = false,
    isGuestEmp = false,
    isManualLogin = true
  ) => {
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
      setLoggedInUser({ username: body.username, role: res.data.role });

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

  const handleUserUpdate = (data) =>{
    if (!updateValidateInput(data)) return;
    const userID = data._id;
    const body  =  {
      username : data.username,
      password : data.password,
      location : data.location, 
      department : data.department 
    };
    console.log(userID);
    console.log(body);
    handleModalClose();
  }

  return {
    formData,
    isLoading,
    handleChange,
    handleRegister,
    handleLogin,
    handleUserUpdate
  };
};

export default useLoginRegister;
