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
import { Drawer } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );
  const [isLoading, setIsLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const toggleDrawer = (val) => {
    setOpen(val);
  };

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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, zIndex: 10, position: "relative" }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <MenuIcon sx={{display:{xs:"block", md:'none'}}} onClick={() => toggleDrawer(true)}/>
          </Box>

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
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        <Box
          sx={{
            background:
              "linear-gradient(0deg, rgba(246,228,204,1) 0%, rgba(108,140,181,1) 100%)",
            height: "100%",
          }}
        >
          <Sidebar />
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
