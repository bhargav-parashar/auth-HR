export const lightTheme = () => (
    {
        palette :{
            mode : "light",
            primary :{
                main : '#fff',
                light : '#9696FF',
                dark : '#D3D3D3',
                bg1 : "#fafafa",
                bg2 : '#D3D3D3',
                bg3 : '#000000'
            },
            secondary : {
                main : '#fff',
                light : 'rgb(68, 68, 168)',
                dark : '#D3D3D3',
            },
            text: {
                primary: "#000000",
                secondary: "rgba(0,0,0,0.5)",
                heading:'rgb(81, 81, 228)',
                contrast: "#fafafa"
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