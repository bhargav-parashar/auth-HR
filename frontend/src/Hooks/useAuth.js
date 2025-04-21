import { useState, useEffect } from "react";
import config from "../config/config";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const useAuth = () =>{
  
  const [loggedInUser, setLoggedInUser] = useState({ username: "", role: "" });
  const {enqueueSnackbar} = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
   
    //CHECK IF USER IS ALREADY LOGGED IN BY SENDING STORED HTTP ONLY USER COOKIES IF AVAILABLE TO BACKEND
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
          navigate("/");
        }
        console.log(err);
      } 
    };
    const loggedUser = localStorage.getItem("loggedInUser");
    if(loggedUser){
      checkStatus(loggedUser)
    }
  }, []);

  return {loggedInUser, setLoggedInUser};
};

export default useAuth;

