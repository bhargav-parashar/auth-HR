import React, { lazy, Suspense } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import AdminHome from "./HR/HomeTab/AdminHome";
import EmployeeHome from "./Employee/HomeTab/EmployeeHome";
import { useState, useContext } from "react";
import TabContext from "../../context/TabContext";
import UserContext from "../../context/UserContext";
import useGetAnalytics from "../../Hooks/useGetAnalytics";
import Shimmer from "../../components/ShimmerUI/Shimmer";
import MadeWithLove from "../../components/MadeWithLove/MadeWithLove";

//INITALIZE COMPONENTS FOR LAZY LOADING
const Analytics = lazy(() => import("./HR/AnalyticsTab/Analytics"));
const Employees = lazy(() => import("./HR/EmployeesTab/Employees"));
const ApplyLeave = lazy(() => import("./Employee/LeaveTab/ApplyLeave"));
const Relocation = lazy(() => import("./Employee/RelocationTab/Relocation"));
const Resignation = lazy(() => import("./Employee/ResignationTab/Resignation"));
const AboutDeveloper = lazy(() => import("./Developer/About/AboutDeveloper"));

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");

  const {
    totalEmployees,
    isLoading,
    locationMap,
    groupedByDepartment,
    deptMap,
    avgLeaveBal,
    attrition,
    currMonthHires,
    getEmployeeData,
  } = useGetAnalytics();

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
          overflowY:{xs:'auto', md:'clip'},
          height: "100vh",
          background:
            "linear-gradient(0deg, rgba(246,228,204,1) 0%, rgba(108,140,181,1) 100%)",
        }}
      >
        <Stack direction="column" sx={{ height: "100%" }}>
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
                {loggedInUser.role === "admin" &&
                  selectedTab === "Dashboard" && (
                    <AdminHome
                      totalEmployees={totalEmployees}
                      avgLeaveBal={avgLeaveBal}
                      attrition={attrition}
                      currMonthHires={currMonthHires}
                      isLoading={isLoading}
                      getEmployeeData={getEmployeeData}
                    />
                  )
                }


                {/* HR ANALYTICS TAB - LAZY LOAD*/}
                {loggedInUser.role === "admin" &&
                  selectedTab === "Analytics" && (
                    <Suspense fallback={<Shimmer />}>
                      <Analytics
                        totalEmployees={totalEmployees}
                        isLoading={isLoading}
                        locationMap={locationMap}
                        groupedByDepartment={groupedByDepartment}
                        deptMap={deptMap}
                      />
                    </Suspense>
                  )
                }


                {/* HR ALL EMPLOYEES TAB - LAZY LOAD */}
                {loggedInUser.role === "admin" &&
                  selectedTab === "Employees" && (
                    <Suspense fallback={<Shimmer />}>
                      <Employees getEmployeeData={getEmployeeData} />
                    </Suspense>
                  )
                }


                {/* EMPLOYEE DASHBOARD */}
                {loggedInUser.role === "employee" &&
                  selectedTab === "Dashboard" && <EmployeeHome />}

                {/* EMPLOYEE APPLY LEAVE TAB - LAZY LOAD */}
                {loggedInUser.role === "employee" &&
                  selectedTab === "Apply Leave" && (
                    <Suspense fallback={<Shimmer />}>
                      <ApplyLeave setSelectedTab={setSelectedTab} />
                    </Suspense>
                  )
                }


                {/* EMPLOYEE REQUEST RELOCATION TAB - LAZY LOAD */}
                {loggedInUser.role === "employee" &&
                  selectedTab === "Relocation" && (
                    <Suspense fallback={<Shimmer />}>
                      <Relocation setSelectedTab={setSelectedTab} />
                    </Suspense>
                  )
                }


                {/* EMPLOYEE RESIGNATION TAB - LAZY LOAD */}
                {loggedInUser.role === "employee" &&
                  selectedTab === "Resignation" && (
                    <Suspense fallback={<Shimmer />}>
                      <Resignation setSelectedTab={setSelectedTab} />
                    </Suspense>
                  )
                }


                {/* ABOUT DEVELOPER TAB - LAZY LOAD */}
                { 
                  selectedTab === "About the Developer" && (
                    <Suspense fallback={<Shimmer />}>
                      <AboutDeveloper />
                    </Suspense>
                  )
                }
                

                <Stack
                  pt={1}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ width: "100%" }}
                >
                  <Box sx={{ display: { xs: "none", md: "block" } }}>
                    <MadeWithLove  size="0.7rem" />
                  </Box>
                </Stack>
              </Paper>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </TabContext.Provider>
  );
};

export default Dashboard;
