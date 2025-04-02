import { useState, useEffect } from "react";
import config from "../../../../config/config";
import axios from "axios";
import RelocationDesktop from "./RelocationDesktop";
import Shimmer from "../../../../components/ShimmerUI/Shimmer";
//import Status from "../../../../components/Resignation/Status";

const Relocation = () => {
  const [relocation, setRelocation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
  }, []);
  return (
    <>
      {isLoading && <Shimmer />}
      {/* {!isLoading && relocation.length > 0 && <Status stepType="resignation" resignation={resignation} />}  */}
      {!isLoading && relocation.length === 0 && <RelocationDesktop />} 
    </>
  );
};

export default Relocation;