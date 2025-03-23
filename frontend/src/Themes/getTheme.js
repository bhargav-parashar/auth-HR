import {createTheme} from "@mui/material";

const getTheme = (mode) =>{

    const theme = createTheme({
        palette :{
            mode : mode ? "dark" : "light",
            primary :{
                main : '#fff',
                fontBlack : '#000000',
                fontGray : '#D3D3D3'
            }
        },
        components :{
            MuiTypography:{
                styleOverrides :{
                    root:{
                        fontSize :  {md:'50px'} 
                    }
                }
            } 
        }
    });

    return theme;
}


export default getTheme;