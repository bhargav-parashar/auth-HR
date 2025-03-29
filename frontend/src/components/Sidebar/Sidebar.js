import React from "react";
import { Paper, Stack, Box, Typography } from "@mui/material";
import SidebarCard from "../../components/Sidebar/SidebarCard";
import {
  adminSidebarOptions,
  empSidebarOptions,
} from "../../constants/constants";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import Panel from "./Panel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <Paper sx={{ height: "100%" }} elevation={0} square>
      <Box sx={{ height: "100%", paddingRight:'2%', paddingTop:'12%', paddingBottom:'12%'}}>
        <Stack
          direction="column"
          justifyContent="space-between"
          sx={{ height: "100%", borderRight:'2px solid gray' }}
        >
          <Box>
            <Stack
              paddingLeft="15%"
              mb="15%"
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
                <CheckCircleIcon fontSize="large" color="success" />
                <Typography  variant="h6">AuthHR</Typography>
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
          </Box>
          {loggedInUser.role && <Panel />}
        </Stack>
        </Box>
    </Paper>
  );
};

export default Sidebar;
