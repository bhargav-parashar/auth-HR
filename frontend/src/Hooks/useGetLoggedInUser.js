import {useState, useEffect} from 'react';
import axios from 'axios';
import config from "../config/config";
import { useSnackbar } from "notistack";


const useGetLoggedInUser = () =>{
    const [user, setUser] = useState(null);
    const URL = `${config.endpoint}/user/details`;
    const {enqueueSnackbar} = useSnackbar();

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