import React, { useState, useContext, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import AccountCircle from "@mui/icons-material/AccountCircle";
import config from "../../config/config";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(
   JSON.parse( localStorage.getItem("loggedInUser") )
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/");
      enqueueSnackbar("Logged out successfully", { variant: "success" });
    }
  }, [loggedInUser]);

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      const URL = `${config.endpoint}/auth/logout`;
      const res = await axios.post(URL, {}, { withCredentials: true });
      localStorage.removeItem("loggedInUser");
      setLoggedInUser(localStorage.getItem("loggedInUser"));
    } catch (err) {
      enqueueSnackbar(`Something went wrong - ${err}`, { variant: "warning" });
      console.log(err);
    }finally{
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, zIndex: 10, position: "relative" }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}></Box>

          {
            <Stack direction="row" spacing={2} alignItems="center">
              <AccountCircle />
              <Typography>{loggedInUser || ""}</Typography>
              {isLoading ? (
                <Loader small={true} />
              ) : (
                <Button onClick={() => handleLogout()} color="inherit">
                  Logout
                </Button>
              )}
            </Stack>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
