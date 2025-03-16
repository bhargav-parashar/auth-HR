import React from "react";
import { Box, Stack, Typography, Divider } from "@mui/material";
import SidebarCard from "../../components/Cards/SidebarCard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { sidebarOptions } from "../../constants/constants";


const Sidebar = () => {
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
      {sidebarOptions.map((item) => (
        <SidebarCard
          key={item.id}
          menuItem={item.option}
          menuIcon={item.icon}
        />
      ))}
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
      <SidebarCard menuIcon="LogoutIcon" menuItem="Logout" />
      <SidebarCard menuIcon="DarkModeOutlinedIcon" menuItem="Dark Mode"/>
    </Stack>
  );
};

export default Sidebar;
