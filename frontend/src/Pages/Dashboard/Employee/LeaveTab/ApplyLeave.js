import { useState, useEffect } from "react";
import config from "../../../../config/config";
import axios from "axios";
import ApplyLeaveDesktop from "./ApplyLeaveDesktop";
import Shimmer from "../../../../components/ShimmerUI/Shimmer";
import Status from "./Status";

const ApplyLeave = ({ setSelectedTab }) => {
  const [isLoading, setIsLoading] = useState(true);
  const[leave, setLeave] = useState([]);
  useEffect(() => {
    const URL = `${config.endpoint}/user/leave-applications`;
    const getLeaves = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(URL, { withCredentials: true });
        setLeave(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getLeaves();
  }, []);
  return (
    <>
      {isLoading && <Shimmer />}
      {!isLoading && leave.length > 0 && (
        <Status leave={leave} />
      )}
      {!isLoading && leave.length === 0 && (
        <ApplyLeaveDesktop setSelectedTab={setSelectedTab} />
      )}
    </>
  );
};

export default ApplyLeave;
