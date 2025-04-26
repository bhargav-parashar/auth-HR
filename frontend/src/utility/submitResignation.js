import config from "../config/config";
import axios from "axios";

const submitResignation = async ({
  lwd,
  setIsLoading,
  questionResponseMapping,
  enqueueSnackbar,
  setSelectedTab,
  setRefresh,
  handleModalClose
}) => {
  const URL = `${config.endpoint}/user/resign`;
  const body = {
    lwd: lwd,
  };
  try {
    setIsLoading(true);
    const res = await axios.post(URL, body, { withCredentials: true });
    if (res.status === 200) {
      const URL = `${config.endpoint}/user/responses`;
      const body = {
        resignationId: res.data.data.resignation._id,
        responses: questionResponseMapping,
      };
      await axios.post(URL, body, { withCredentials: true });
      enqueueSnackbar("Resignation submitted", { variant: "success" });
      setSelectedTab("Resignation");
      setRefresh(prev=>prev+1);
      handleModalClose();
    }
  } catch (err) {
    if (err.status === 400) {
      enqueueSnackbar(
        `${err.response.data.message} - ${err.response.data.holiday}  `,
        { variant: "warning" }
      );
    }
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};

export default submitResignation;