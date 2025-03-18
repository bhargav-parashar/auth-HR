import React from "react";
import { useState, useEffect } from "react";
import LoginInput from "../../components/LoginLayout/LoginInput";
import Layout from "../../components/LoginLayout/Layout";
import Shimmer from "../../components/ShimmerUI/Shimmer";
import axios from "axios";
import config from "../../config/config";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();
  useEffect(() => {
    // CHECK IF USER IS ALREADY LOGGED IN BY SENDING STORED HTTP ONLY USER COOKIES IF AVAILABLE TO BACKEND
    const checkStatus = async () => {
      const URL = `${config.endpoint}/auth/loginstatus`;

      try {
        const res = await axios.post(URL, {}, { withCredentials: true });
        if (res.status === 200) {
          console.log(res.data);
          if (res.data.role === "admin") {
            navigate("/dashboard");
            enqueueSnackbar(`Logged in as ${res.data.userName}`, { variant: "success" });
          } else {
            navigate("/dashboard");
            enqueueSnackbar(`Logged in as ${res.data.userName}`, { variant: "success" });
          }
        }
      } catch (err) {
        if (err.status === 403) {
          enqueueSnackbar("Previous session timed out", { variant: "warning" });
        }
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    const loggedInUser = localStorage.getItem("loggedInUser");
    if(loggedInUser){
      checkStatus()
    }else{
      setIsLoading(false);
    }
  }, []);
  return (
    <>
      {isLoading ? (
        <Shimmer />
      ) : (
        <Layout>
          <LoginInput />
        </Layout>
      )}
    </>
  );
};

export default Login;
