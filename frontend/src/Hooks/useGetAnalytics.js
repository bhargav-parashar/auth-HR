import { useState, useEffect } from "react";
import config from "../config/config";
import axios from "axios";

const useGetAnalytics = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currMonResignations, setCurrMonResignations] = useState([]);

  const getEmployees = async () =>{
    const URL = `${config.endpoint}/hr/all-user-details`;
    try {
      const employees = await axios.get(URL, { withCredentials: true });
      setEmployees(employees.data);
    } catch (err) {
      throw err;
    } 
  };

  const getCurrMonthResig = async () =>{
    const URL = `${config.endpoint}/hr/current-month-resignations`;
    try {
      const currMonResign = await axios.get(URL, { withCredentials: true });
      setCurrMonResignations(currMonResign.data);
    } catch (err) {
      throw err;
    }
  };

  const queryData = async () => {
    try {
        getEmployees();
        getCurrMonthResig();
    } catch (err) {
        console.log(err);
    } finally {
        setIsLoading(false);
    }
  };

  // GET DATA ON PAGE LOAD
  useEffect(() => {
    queryData();
  }, []);

  const getEmployeeData = async ()=>{
    try{
      getEmployees();
    }catch{
      console.log(err);
    }
  }

  const totalEmployees = employees.length;
  let avgLeaveBal = 0;

  //CALCULATE AVG LEAVE BALANCE
  if (totalEmployees > 0) {
    let totalBal = 0;
    let emp;
    for (let i = 0; i < totalEmployees; i++) {
      emp = employees[i].leaveBal;
      for (const [key, value] of Object.entries(emp)) {
        totalBal += value;
      }
    }
    avgLeaveBal = (totalBal / totalEmployees).toFixed(1);
  };

  //CALCULATE MONTHLY ATTRITION RATE
  let attrition = 0;
  if (currMonResignations.length > 0 && totalEmployees > 0) {
    attrition = (currMonResignations.length / totalEmployees).toFixed(1);
  };

  //GET CURRENT MONTH HIRES COUNT
  let currMonthHires = 0;
  if (totalEmployees > 0) {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); 
    const currentYear = currentDate.getFullYear();
    
    const filteredItems = employees.filter(item => {
      const createdDate = new Date(item.createdAt);
      return (
        createdDate.getMonth() === currentMonth &&
        createdDate.getFullYear() === currentYear
      )
    });

    currMonthHires = filteredItems.length;
    
  };

  //CREATE LOCATION-FREQUENCY MAP
  const locationMap = new Map();
  employees.forEach((item) => {
    locationMap.set(item.location, (locationMap.get(item.location) || 0) + 1);
  });

  //CREATE DEPARTMENT-FREQUENCY MAP
  const deptMap = new Map();
  employees.forEach((item) => {
    deptMap.set(item.department, (deptMap.get(item.department) || 0) + 1);
  });

  //CREATE DEPARTMENT-REQUESTS GROUPED DATA
  const groupedByDepartment = Object.values(
    employees.reduce((acc, emp) => {
      const dept = emp.department;
      if (!acc[dept]) {
        acc[dept] = {
          department: dept,
          leave: 0,
          resignation: 0,
          relocation: 0,
        };
      }

      acc[dept].leave += emp.leaves || 0;
      acc[dept].resignation += emp.resignations || 0;
      acc[dept].relocation += emp.relocations || 0;

      return acc;
    }, {})
  );

  return {
    totalEmployees,
    locationMap,
    deptMap,
    groupedByDepartment,
    isLoading,
    avgLeaveBal,
    attrition,
    currMonthHires,
    getEmployeeData
  };
};

export default useGetAnalytics;
