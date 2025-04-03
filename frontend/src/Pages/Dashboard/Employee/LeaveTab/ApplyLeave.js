import { useState, useEffect } from "react";
import config from "../../../../config/config";
import axios from "axios";
import ApplyLeaveDesktop from "./ApplyLeaveDesktop";
import Shimmer from "../../../../components/ShimmerUI/Shimmer";
//import Status from "./Status";

const ApplyLeave = () => {
  // const [leaveData, setLeaveData] = useState({
  //   startDate: null,
  //   endDate : null,
  //   leaveType: null
  // });
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const URL = `${config.endpoint}/user/leave-applications`;
  //   const getLeaves = async () => {
  //     try {
  //       setIsLoading(true);
  //       const { data } = await axios.get(URL, { withCredentials: true });
  //       setRelocation(data);
  //     } catch (err) {
  //       console.log(err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   getLeaves();
  // }, []);
  return (
    <>
      {/* {isLoading && <Shimmer />}
      {!isLoading && relocation.length > 0 && <Status relocation={relocation} />}  */}
      {/* {!isLoading && relocation.length === 0 && <RelocationDesktop />}  */}
      <ApplyLeaveDesktop />
    </>
  );
};

export default ApplyLeave;