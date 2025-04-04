import config from "../config/config";
import axios from "axios";

export default submitLeave = async ({
  startDate,
  endDate,
  leaveType,
  setIsLoading,
  enqueueSnackbar,
  setSelectedTab
}) => {
  const URL = `${config.endpoint}/user/leave`;
  const body = {
    leaveType : leaveType,
    startDate : startDate,
    endDate : endDate
  };
  try {
    setIsLoading(true);
    const res = await axios.post(URL, body, { withCredentials: true });
    if (res.status === 200) {
      enqueueSnackbar("Leave request submitted", { variant: "success" });
      setSelectedTab("Dashboard");
    }
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};
