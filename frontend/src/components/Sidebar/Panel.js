import { useContext, useState, useEffect } from "react";
import { Stack, Typography, Switch, Box, Divider } from "@mui/material";
import UserContext from "../../context/UserContext";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import config from "../../config/config";
import { useSnackbar } from "notistack";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SidebarCard from "./SidebarCard";

const Panel = ({ selectedTab, setSelectedTab,toggleDrawer }) => {
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!loggedInUser) {
      navigate("/");
      enqueueSnackbar("Logged out successfully", { variant: "success" });
    }
  }, [loggedInUser]);

  const { darkMode, setDarkMode } = useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleModeChange = () => {
    setDarkMode((prev) => !prev);
  };

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
    <Box>
      <Divider
        variant="middle"
        sx={{
          flexGrow: 1,
          backgroundColor: "rgb(176, 169, 169)",
          borderRadius: "10px",
          height: "1px",
          marginTop: "0%",
          marginBottom: "10%",
        }}
      />
      <Stack
        p={2}
        paddingLeft="15%"
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          gap={1}
        >
          <LogoutIcon sx={{ cursor: "pointer" }} onClick={handleLogout} />
          <Typography
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={handleLogout}
          >
            Logout
          </Typography>
        </Stack>
      </Stack>

      <Stack
        p={2}
        paddingLeft="15%"
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          gap={1}
        >
          <DarkModeOutlinedIcon />
          <Typography variant="caption">Dark Mode</Typography>
          <Switch checked={darkMode} onChange={handleModeChange} />
        </Stack>
      </Stack>
      <SidebarCard
        key='100'
        menuItem='About the Developer'
        menuIcon="Code"
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        toggleDrawer={toggleDrawer}
        isShimmer
      />
    </Box>
  );
};

export default Panel;
