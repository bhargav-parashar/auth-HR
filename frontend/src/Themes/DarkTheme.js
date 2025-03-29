export const darkTheme = () => (
    {
        palette :{
            mode : "dark",
            primary :{
                main : '#fff',
                light : '#9696FF',
                dark : '#D3D3D3',
                bg1 : '#181717',
                bg2 : '#141414',
                bg3 : '#000000'
            },
            secondary : {
                main : '#fff',
                light : '#9696FF',
                dark : '#D3D3D3',
            },
            text: {
                primary: "#ffffff",
                secondary: "rgba(255,255,255,0.7)",
                heading:'#9696FF',
                contrast: '#000000'
            },
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
    }
);