import {useState, useEffect} from 'react';
import axios from 'axios';
import config from "../config/config";

const useGetUserLeaveBalance = () =>{
    const [allLeaveBal, setAllLeaveBal] = useState(null);
    const URL = `${config.endpoint}/user/leaveBal`;

    useEffect(()=>{
        callApi();
    },[]);

    const callApi = async () =>{
        try{
            const {data} = await axios.get(URL, {withCredentials:true});
            setAllLeaveBal(data);

        }catch(err){
            console.log(err);
        }
    }

    return {allLeaveBal, setAllLeaveBal};

};

export default useGetUserLeaveBalance;