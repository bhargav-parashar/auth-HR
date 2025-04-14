import config from "../config/config";
import axios from "axios";
import { differenceInDays } from "date-fns";

export default submitLeave = async ({
  startDate,
  endDate,
  leaveType,
  setIsLoading,
  enqueueSnackbar,
  setSelectedTab,
  allLeaveBal,
  setRefresh
}) => {
  const type =
    leaveType === "Sick Leave"
      ? "sick"
      : leaveType === "Earned Leave"
      ? "earned"
      : leaveType === "Casual Leave"
      ? "casual"
      : "";
  const oldBal = allLeaveBal[type];
  const dateDiff = differenceInDays(endDate, startDate)+1;
  const newBalance = oldBal - dateDiff;

  const URL1 = `${config.endpoint}/user/leave`;
  const URL2 = `${config.endpoint}/user/updateLeaveBal`;
  const body1 = {
    leaveType: leaveType,
    startDate: startDate,
    endDate: endDate,
  };
  const body2 = {
    newBal: { ...allLeaveBal,[type] : newBalance },
  };
  try {
    setIsLoading(true);
    const res1 = await axios.post(URL1, body1, { withCredentials: true });
    

    if (res1.status === 200) {
      const res2 = await axios.post(URL2, body2, { withCredentials: true });
      if(res2.status === 200){
        enqueueSnackbar("Leave request submitted", { variant: "success" });
        setSelectedTab("Apply Leave");
        setRefresh(prev=>prev+1);
      }
    }
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};
