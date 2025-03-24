import {createTheme} from "@mui/material";

const getTheme = (mode) =>{

    const theme = createTheme({
        palette :{
            mode : mode ? "dark" : "light",
            primary :{
                main : '#fff',
                light : '#9696FF',
                dark : '#D3D3D3',
            },
            secondary : {
                main : '#fff',
                light : '#9696FF',
                dark : '#D3D3D3',
            }
        },
        components :{
            MuiTypography:{
                styleOverrides :{
                    root:{
                        textAlign:'justify'
                    }
                }
            },
            MuiButton :{
                styleOverrides :{
                    root :{
                        background :'#9696FF'
                    }
                }
            }
        }
    });

    return theme;
}


export default getTheme;