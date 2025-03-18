import React, { useState, useContext, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import AccountCircle from "@mui/icons-material/AccountCircle";
import config from "../../config/config";

const Header = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogout = async () => {
    try {
      const URL = `${config.endpoint}/auth/logout`;
      const res = await axios.post(URL, {}, { withCredentials: true });
      localStorage.removeItem("loggedInUser");
      enqueueSnackbar("Logged out successfully", { variant: "success" });
      navigate("/");
    } catch (err) {
      enqueueSnackbar(`Something went wrong - ${err}`, { variant: "warning" });
      console.log(err);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, zIndex: 10, position: "relative" }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}></Box>

          {
            //isLoggedIn
            true && (
              <Stack direction="row" spacing={2} alignItems="center">
                <AccountCircle />
                <Typography>
                  {JSON.parse(localStorage.getItem("userName")) || ""}
                </Typography>

                {/* <Link to="/" style={{ color: "white" }}> */}
                <Button onClick={() => handleLogout()} color="inherit">
                  Logout
                </Button>
                {/* </Link> */}
              </Stack>
            )
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
