import React, { useState } from "react";
import { Box } from "@mui/material";
import { useSnackbar } from "notistack";
import config from "../../config/config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RegisterBox from "./RegisterBox";
import LoginBox from "./LoginBox";
import { guestAdmin, guestEmployee } from "../../constants/constants";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import useLoginRegister from "../../Hooks/useLoginRegister";

const LoginInput = ({ isRegister = false, isHR }) => {
  const {
    formData,
    isLoading,
    handleChange,
    handleRegister,
    handleLogin,
  } = useLoginRegister();

  return (
    <Box
      sx={{
        height: "100%",
      }}
      pt={{ xs: 2, sm: 1 }}
    >
      {isRegister ? (
        <RegisterBox
          isHR={isHR}
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
