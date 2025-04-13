import { useState, useEffect } from "react";
import config from "../config/config";
import axios from "axios";

const useGetQuesResponses = ({type}) => {
    const [responses, setResponses ] = useState([]);
    const URL = type === 'Leaves' ? `${config.endpoint}/hr/`;
  getResponses = async () =>{

    try{
        const {data} = await axios.get(URL,{withCredentials:true});
        setResponses(data);
    }catch(err){
        console.log(err)
    }
  }

  useEffect(()=>{
    getResponses();
  },[])

  return {responses}
}

export default useGetQuesResponses
