import config from "../config/config";
import axios from "axios";

export default submitRelocation = async ({
  location,
  setIsLoading,
  questionResponseMapping,
  enqueueSnackbar,
  setSelectedTab,
  setRefresh
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
        relocationId: res.data.data.relocation._id,
        responses: questionResponseMapping,
      };
      await axios.post(URL, body, { withCredentials: true });
      enqueueSnackbar("Relocation request submitted", { variant: "success" });
      setSelectedTab("Relocation");
      setRefresh(prev=>prev+1);
    }
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};
