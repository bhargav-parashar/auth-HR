import {createTheme} from "@mui/material";

const getTheme = (mode) =>{

    const theme = createTheme({
        palette :{
            mode : mode ? "dark" : "light",
            primary :{
                main : '#fff'
            }
        }
    });

    return theme;
}


export default getTheme;