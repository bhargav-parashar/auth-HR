import { useState, useEffect } from "react";
import config from "../../../../config/config";
import axios from "axios";
import ApplyLeaveDesktop from "./ApplyLeaveDesktop";
import Shimmer from "../../../../components/ShimmerUI/Shimmer";
import Status from "./Status";

const ApplyLeave = ({ setSelectedTab }) => {
  const [isLoading, setIsLoading] = useState(true);
  const[leave, setLeave] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const URL = `${config.endpoint}/user/pending-leave-applications`;
    const getLeaves = async () => {
      try {
        const { data } = await axios.get(URL, { withCredentials: true });
        setLeave(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getLeaves();
  },[refresh]);

  return (
    <>
      {isLoading && <Shimmer />}
      {!isLoading && leave.length > 0 && (
        <Status leave={leave} />
      )}
      {!isLoading && leave.length === 0 && (
        <ApplyLeaveDesktop setRefresh={setRefresh} setSelectedTab={setSelectedTab} />
      )}
    </>
  );
};

export default ApplyLeave;
