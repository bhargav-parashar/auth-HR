import React from "react";
import { Box, Stack} from "@mui/material";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import AdminHome from "./AdminHome";
import EmployeeHome from "./EmployeeHome";
import ApplyLeave from "./ApplyLeave";
import Relocation from "./Relocation";
import Resignation from "./Resignation";
import Analytics from "./Analytics";
import Employees from "./Employees";
import { useState } from "react";
import TabContext from "../../context/tabContext";
import UserContext from "../../context/UserContext";
import { useContext } from "react";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  const { loggedInUser } = useContext(UserContext);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <TabContext.Provider value={{ selectedTab, handleTabChange }}>
      <Box
        py={{ xs: 0, xl: 5 }}
        px={{ xs: 0, xl: 10 }}
        sx={{
          height: "100vh",
          background:
            "linear-gradient(0deg, rgba(246,228,204,1) 0%, rgba(108,140,181,1) 100%)",
        }}
        direction="row"
        alignItems="center"
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            height: "100%",
          }}
        >
          <Box
            flex={1}
            sx={{
              border: "2px solid black",
              display: { xs: "none", md: "block" },
            }}
          >
            <Sidebar
              selectedTab={selectedTab}
              setSelectedTab={handleTabChange}
            />
          </Box>
          <Box flex={5} sx={{ border: "2px solid black" }}>
            <Header />
            {loggedInUser.role === "admin" && selectedTab === "Dashboard" && (
              <AdminHome />
            )}
            {loggedInUser.role === "admin" && selectedTab === "Analytics" && (
              <Analytics />
            )}
            {loggedInUser.role === "admin" && selectedTab === "Employees" && (
              <Employees />
            )}
            {loggedInUser.role === "employee" &&
              selectedTab === "Dashboard" && (
              <EmployeeHome />
            )}
            {loggedInUser.role === "employee" &&
              selectedTab === "Apply Leave" && (
              <ApplyLeave />
            )}
            {loggedInUser.role === "employee" &&
              selectedTab === "Request Relocation" && (
              <Relocation />
            )}
            {loggedInUser.role === "employee" &&
              selectedTab === "Submit Resignation" && (
              <Resignation />
            )}
          </Box>
        </Stack>
      </Box>
    </TabContext.Provider>
  );
};

export default Dashboard;
