import React from "react";
import { Paper, Stack, Switch, Divider, Typography } from "@mui/material";
import SidebarCard from "../../components/Cards/SidebarCard";
import {
  adminSidebarOptions,
  empSidebarOptions,
} from "../../constants/constants";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import Panel from "./Panel";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <Paper sx={{ height: "100%" }} elevation={0} square>
      <Stack direction="column">
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

        {loggedInUser.role && <Panel />}
      </Stack>
    </Paper>
  );
};

export default Sidebar;
