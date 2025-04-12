import { useState, useEffect } from "react";
import config from "../config/config";
import axios from "axios";

const useGetPendingRequests = () => {
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPenRequests();
  }, []);

  return { isLoading, penRequests };
};

export default useGetPendingRequests;
