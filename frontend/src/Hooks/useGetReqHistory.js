import { useState, useEffect } from "react";
import config from "../config/config";
import axios from "axios";

const useGetReqHistory = () => {
  const [requests, setRequests] = useState(null);

  const callApi = async () => {
    const URL = `${config.endpoint}/user/request-history`;
    try {
      const requests = await axios.get(URL, { withCredentials: true });
      setRequests(requests.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return requests;
};

export default useGetReqHistory;
