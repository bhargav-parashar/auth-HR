export const darkTheme = () => (
    {
        palette :{
            mode : "dark",
            primary :{
                main : '#fff',
                light : '#9696FF',
                dark : '#D3D3D3',
                bg1 : ' #181717',
                bg2 : '#141414',
                bg3 : '#000000',
                shimmer : 'rgb(61, 58, 58)',
                success : "#4CAF50", 
                inactive:'rgb(151, 144, 144)',
                inactive2 : 'rgb(37, 37, 37)',
                contrast:'rgb(81, 81, 228)',
                successLight :"rgb(222, 248, 223)"
                
            },
           
            text: {
                primary: "#ffffff",
                secondary: "rgba(255,255,255,0.7)",
                heading:'#9696FF',
                headingContrast : 'rgb(81, 81, 228)',
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