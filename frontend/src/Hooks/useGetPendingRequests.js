import { useState, useEffect } from "react";
import config from "../config/config";
import axios from "axios";

const useGetPendingRequests = () => {
  const [isReqLoading, setIsReqLoading] = useState(true);
  const [penRequests, setPenRequests] = useState({
    leaves: [],
    relocations: [],
    resignations: [],
  });

  getPenRequests = async () => {
    try {
      const URL1 = `${config.endpoint}/hr/pending-leaves`;
      const URL2 = `${config.endpoint}/hr/pending-relocations`;
      const URL3 = `${config.endpoint}/hr/pending-resignations`;

      const leaves = await axios.get(URL1, { withCredentials: true });
      const relocations = await axios.get(URL2, { withCredentials: true });
      const resignations = await axios.get(URL3, { withCredentials: true });

      setPenRequests((prev) => ({
        ...prev,
        leaves: leaves.data,
        relocations: relocations.data,
        resignations: resignations.data
      }));
    } catch (err) {
      console.log(err);
    } finally {
      setIsReqLoading(false);
    }
  };

  useEffect(() => {
    getPenRequests();
  }, []);

  return { isReqLoading, penRequests,getPenRequests };
};

export default useGetPendingRequests;
