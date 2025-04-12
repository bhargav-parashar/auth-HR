import { useState, useEffect } from "react";
import config from "../config/config";
import axios from "axios";

const useGetAnalytics = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currMonResignations, setCurrMonResignations] = useState([]);

  const callApi = async () => {
    const URL1 = `${config.endpoint}/hr/all-user-details`;
    const URL2 = `${config.endpoint}/hr/current-month-resignations`;

    try {
      const employees = await axios.get(URL1, { withCredentials: true });
      const currMonResign = await axios.get(URL2, { withCredentials: true });

      setEmployees(employees.data);
      setCurrMonResignations(currMonResign.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

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
  const locationMap = new Map();
  const deptMap = new Map();

  employees.forEach((item) => {
    locationMap.set(item.location, (locationMap.get(item.location) || 0) + 1);
  });

  employees.forEach((item) => {
    deptMap.set(item.department, (deptMap.get(item.department) || 0) + 1);
  });

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
    currMonthHires
  };
};

export default useGetAnalytics;
