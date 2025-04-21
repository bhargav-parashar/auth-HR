import { useState, useEffect } from "react";
import config from "../../../../config/config";
import axios from "axios";
import ResignationDesktop from "./ResignationDesktop";
import Shimmer from "../../../../components/ShimmerUI/Shimmer";
import Status from "./Status";

const Resignation = ({setSelectedTab}) => {
  const [resignation, setResignation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const[refresh, setRefresh] = useState(0);

  useEffect(() => {
    const URL = `${config.endpoint}/user/pending-resignation`;
    const getResignation = async () => {
      try {
        const { data } = await axios.get(URL, { withCredentials: true });
        setResignation(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getResignation();
  }, [refresh]);

  return (
    <>
      {isLoading && <Shimmer />}
      {!isLoading && resignation.length > 0 && <Status resignation={resignation} />}
      {!isLoading && resignation.length === 0 && <ResignationDesktop setRefresh={setRefresh} setSelectedTab={setSelectedTab} />}
    </>
  );
};

export default Resignation;
