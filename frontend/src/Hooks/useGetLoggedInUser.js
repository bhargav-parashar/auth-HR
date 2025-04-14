import {useState, useEffect} from 'react';
import axios from 'axios';
import config from "../config/config";

const useGetLoggedInUser = () =>{
    const [user, setUser] = useState(null);
    const URL = `${config.endpoint}/user/details`;
    
    useEffect(()=>{
        callApi();
    },[]);

    const callApi = async () =>{
        try{
            const {data} = await axios.get(URL, {withCredentials:true});
            setUser(data);

        }catch(err){
            console.log(err);
        }
    }
    return {user};

};

export default useGetLoggedInUser;