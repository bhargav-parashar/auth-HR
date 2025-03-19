import React from "react";
import { useState, useEffect } from "react";
import LoginInput from "../../components/LoginLayout/LoginInput";
import Layout from "../../components/LoginLayout/Layout";
import Shimmer from "../../components/ShimmerUI/Shimmer";
import axios from "axios";
import config from "../../config/config";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();
  const { loggedInUser, setLoggedInUser} = useContext(UserContext);

  useEffect(() => {
    // CHECK IF USER IS ALREADY LOGGED IN BY SENDING STORED HTTP ONLY USER COOKIES IF AVAILABLE TO BACKEND
    const checkStatus = async (loggedUser) => {
      const URL = `${config.endpoint}/auth/loginstatus`;

      try {
        const res = await axios.post(URL, {}, { withCredentials: true });
        if (res.status === 200) {
          setLoggedInUser({username:loggedUser, role : res.data.role});
          navigate("/dashboard");
          enqueueSnackbar(`Logged in as ${res.data.userName}`, { variant: "success" });
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
    const loggedUser = localStorage.getItem("loggedInUser");
    if(loggedUser){
      checkStatus(loggedUser)
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
