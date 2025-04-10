import React from "react";
import { Box, Paper, Stack } from "@mui/material";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import AdminHome from "./HR/HomeTab/AdminHome";
import EmployeeHome from "./Employee/HomeTab/EmployeeHome";
import ApplyLeave from "./Employee/LeaveTab/ApplyLeave";
import Relocation from "./Employee/RelocationTab/Relocation";
import Resignation from "./Employee/ResignationTab/Resignation";
import Analytics from "./HR/AnalyticsTab/Analytics";
import Employees from "./HR/EmployeesTab/Employees";
import { useState } from "react";
import TabContext from "../../context/tabContext";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import useGetAnalytics from "../../Hooks/useGetAnalytics";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  const { totalEmployees, isLoading, locationMap, groupedByDepartment, deptMap } = useGetAnalytics();
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
      >
        <Stack direction="column" gap={0} sx={{ height: "100%" }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{
              height: "100%",
            }}
          >
            <Box
              flex={1}
              sx={{
                display: { xs: "none", md: "block" },
                height: "100%",
              }}
            >
              <Sidebar
                selectedTab={selectedTab}
                setSelectedTab={handleTabChange}
              />
            </Box>
            <Box flex={5} sx={{ height: "100%" }}>
              <Header
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
              <Paper
                sx={{
                  height: "100%",
                  paddingTop: "8%",
                  paddingLeft: "2%",
                  paddingRight: "2%",
                  paddingBottom: "3%",
                }}
                elevation={0}
                square
              >

                {/* HR DASHBOARD */}
                { loggedInUser.role === "admin" && selectedTab === "Dashboard" && (
                <AdminHome />
                )}

                
                {/* HR ANALYTICS TAB*/}
                {loggedInUser.role === "admin" && selectedTab === "Analytics" && (
                    <Analytics
                      totalEmployees={totalEmployees}
                      isLoading={isLoading}
                      locationMap={locationMap}
                      groupedByDepartment={groupedByDepartment}
                      deptMap={deptMap}
                    />
                )}

                
                {/* HR ALL EMPLOYEES TAB*/}
                {loggedInUser.role === "admin" && selectedTab === "Employees" && (
                  <Employees />
                )}


                {/* EMPLOYEE DASHBOARD */}
                {loggedInUser.role === "employee" && selectedTab === "Dashboard" && (
                <EmployeeHome />
                )}


                {/* EMPLOYEE APPLY LEAVE TAB */}
                {loggedInUser.role === "employee" && selectedTab === "Apply Leave" && ( 
                <ApplyLeave setSelectedTab={setSelectedTab} />
                )}
                
                
                {/* EMPLOYEE REQUEST RELOCATION TAB */}
                {loggedInUser.role === "employee" && selectedTab === "Relocation" && ( 
                <Relocation setSelectedTab={setSelectedTab} />
                )}
                

                {/* EMPLOYEE RESIGNATION TAB */}
                {loggedInUser.role === "employee" &&
                  selectedTab === "Resignation" && (
                    <Resignation setSelectedTab={setSelectedTab} />
                )}

              </Paper>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </TabContext.Provider>
  );
};

export default Dashboard;
