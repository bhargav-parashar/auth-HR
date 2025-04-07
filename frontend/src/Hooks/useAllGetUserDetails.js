import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config/config";

const useGetAllUserDetails = () => {
  const [users, setUsers] = useState(null);
  const URL = `${config.endpoint}/hr/all-user-details`;

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    try {
      const { data } = await axios.get(URL, { withCredentials: true });
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  return { users, setUsers };
};

export default useGetAllUserDetails;
