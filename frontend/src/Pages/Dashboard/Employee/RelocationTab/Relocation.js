import { useState, useEffect } from "react";
import config from "../../../../config/config";
import axios from "axios";
import RelocationDesktop from "./RelocationDesktop";
import Shimmer from "../../../../components/ShimmerUI/Shimmer";
import Status from "./Status";

const Relocation = ({setSelectedTab}) => {
  const [relocation, setRelocation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const URL = `${config.endpoint}/user/relocation`;
    const getRelocation = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(URL, { withCredentials: true });
        setRelocation(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getRelocation();
  }, [refresh]);
  return (
    <>
      {isLoading && <Shimmer />}
      {!isLoading && relocation.length > 0 && <Status relocation={relocation} />} 
      {!isLoading && relocation.length === 0 && <RelocationDesktop setRefresh={setRefresh} setSelectedTab={setSelectedTab} />} 
    </>
  );
};

export default Relocation;