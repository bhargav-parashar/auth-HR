import React from "react";
import { Box, Stack, Typography, Divider } from "@mui/material";
import SidebarCard from "../../components/Cards/SidebarCard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  adminSidebarOptions,
  empSidebarOptions,
} from "../../constants/constants";
import UserContext from "../../context/UserContext";
import { useContext } from "react";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <Stack direction="column">
      <Stack
        mb={9}
        p={2}
        paddingLeft={5}
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        sx={{ border: "2px solid black" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          sx={{ border: "2px solid red" }}
        >
          <CheckCircleIcon fontSize="large" color="success" />
          <Typography variant="h4">AuthHR</Typography>
        </Stack>
      </Stack>
      {loggedInUser.role === "admin" ? (
        adminSidebarOptions.map((item) => (
          <SidebarCard
            key={item.id}
            menuItem={item.option}
            menuIcon={item.icon}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ))
      ) : loggedInUser.role === "employee" ? (
        empSidebarOptions.map((item) => (
          <SidebarCard
            key={item.id}
            menuItem={item.option}
            menuIcon={item.icon}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ))
      ) : (
        <></>
      )}

      <Divider
        variant="middle"
        sx={{
          flexGrow: 1,
          backgroundColor: "rgb(176, 169, 169)",
          borderRadius: "10px",
          height: "2px",
          marginTop: "20%",
          marginBottom: "20%",
        }}
      />
      {loggedInUser.role && (
        <>
          <SidebarCard menuIcon="LogoutIcon" menuItem="Logout" />
          <SidebarCard menuIcon="DarkModeOutlinedIcon" menuItem="Dark Mode" />
        </>
      )}
    </Stack>
  );
};

export default Sidebar;
