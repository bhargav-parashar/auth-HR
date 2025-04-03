import config from "../config/config";
import axios from "axios";

export default submitRelocation = async ({
  location,
  setIsLoading,
  questionResponseMapping,
  enqueueSnackbar,
  setSelectedTab
}) => {
  const URL = `${config.endpoint}/user/relocate`;
  const body = {
    location: location,
  };
  try {
    setIsLoading(true);
    const res = await axios.post(URL, body, { withCredentials: true });
    if (res.status === 200) {
      const URL = `${config.endpoint}/user/relocationresponses`;
      const body = {
        responses: questionResponseMapping,
      };
      await axios.post(URL, body, { withCredentials: true });
      enqueueSnackbar("Relocation request submitted", { variant: "success" });
      setSelectedTab("Dashboard");
    }
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};
