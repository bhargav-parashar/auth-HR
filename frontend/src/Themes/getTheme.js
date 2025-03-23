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
                        textAlign:'justify'
                    }
                }
            } 
        }
    });

    return theme;
}


export default getTheme;