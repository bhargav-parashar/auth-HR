import { useState, useEffect } from "react";
import config from "../config/config";
import axios from "axios";

const useGetAnalytics = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const callApi = async () => {
    const URL = `${config.endpoint}/hr/all-user-details`;
    try {
      const employees = await axios.get(URL, { withCredentials: true });
      setEmployees(employees.data);
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
  const locationMap = new Map();
  const deptMap = new Map();

  employees.forEach((item) => {
    locationMap.set(item.location, ( locationMap.get(item.location) || 0 ) + 1 );
  });

  employees.forEach((item) => {
    deptMap.set(item.department, ( deptMap.get(item.department) || 0 ) + 1 );
  });

  const groupedByDepartment = Object.values(
    employees.reduce((acc, emp) => {
      const dept = emp.department;
      if (!acc[dept]) {
        acc[dept] = {
          department: dept,
          leave: 0,
          resignation: 0,
          relocation: 0
        };
      }
  
      acc[dept].leave += emp.leaves || 0;
      acc[dept].resignation += emp.resignations || 0;
      acc[dept].relocation += emp.relocations || 0;
  
      return acc;
    }, {})
  );
  
  return { totalEmployees, locationMap, deptMap, groupedByDepartment, isLoading };
};

export default useGetAnalytics;
