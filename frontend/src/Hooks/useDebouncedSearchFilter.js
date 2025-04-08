import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config/config";

const useDebouncedSearchFilter = () => {
  const [users, setUsers] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [timeoutId, setTimeoutId] = useState(undefined);
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [searchInput, setSearchInput] = useState("");

  //GET INITIAL LIST OF USERS
  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    try {
      const URL = `${config.endpoint}/hr/all-user-details`;
      const { data } = await axios.get(URL, { withCredentials: true });
      setUsers(data);
      setFilteredData(data);
    } catch (err) {
      console.log(err);
    }
  };

  //ON CHANGE OF SEARCH INPUTS/FILTERS, CALL DEBOUNCED SEARCH
  useEffect(() => {
    debouncedSearch();
  }, [searchInput, department, location]);

  //DEBOUNCED SEARCH ON LIST OF USERS BY CALLING FILTER FUNCTION
  debouncedSearch = () => {
    if (timeoutId) {
      clearInterval(timeoutId);
    }

    const id = setTimeout(() => {
      filterUsers();
    }, 500);
    setTimeoutId(id);
  };

  //FILTER FUNCTION
  filterUsers = () => {
    let searchFilteredData =
      !searchInput || searchInput.length === 0
        ? users
        : users.filter((user) =>
            user["username"]
              .toLowerCase()
              .includes(searchInput.trim().toLowerCase())
          );

    searchFilteredData =
      department.length === 0
        ? searchFilteredData
        : searchFilteredData.filter((user) =>
            user["department"].toLowerCase().includes(department.toLowerCase())
          );

    searchFilteredData =
      location.length === 0
        ? searchFilteredData
        : searchFilteredData.filter((user) =>
            user["location"].toLowerCase().includes(location.toLowerCase())
          );

    setFilteredData(searchFilteredData);
  };

  //HANDLE SEARCH INPUT, DEPARTMENT AND LOCATION CHANGE
  handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  handleDeptChange = (e) => {
    setDepartment(e.target.value);
  };
  handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return {
    filteredData,
    department,
    handleDeptChange,
    location,
    handleLocationChange,
    searchInput,
    handleSearchInputChange,
  };
};

export default useDebouncedSearchFilter;
