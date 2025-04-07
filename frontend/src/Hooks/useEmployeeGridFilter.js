import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config/config";
import useGetAllUserDetails from "./useGetAllUserDetails";

const {users, setUsers } = useGetAllUserDetails();

const useEmployeeGridFilter = () => {
    const[filteredData, setFilteredData] = useState(users);
};

export default useEmployeeGridFilter;
