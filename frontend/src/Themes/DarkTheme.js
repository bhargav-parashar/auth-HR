export const darkTheme = () => (
    {
        palette :{
            mode : "dark",
            primary :{
                main : '#fff',
                light : '#9696FF',
                dark : '#D3D3D3',
                bg1 : 'rgb(39, 37, 37)',
                bg2 : 'rgb(24, 23, 23)',
                bg3 : '#000000',
                shimmer : 'rgb(61, 58, 58)',
                success : "#4CAF50", 
                inactive:'rgb(151, 144, 144)',
                inactive2 : 'rgb(26, 25, 25)',
                inactive3 : 'rgb(39, 38, 38)',
                contrast:'rgb(81, 81, 228)',
                successLight :"rgb(222, 248, 223)",
                highlight:'rgb(217, 133, 37)'
            },
           
            text: {
                primary: "#ffffff",
                secondary: "rgba(255,255,255,0.7)",
                heading:'#9696FF',
                headingContrast : 'rgb(81, 81, 228)',
                contrast: '#000000'
            },
             background : {
                light : '#9696FF'
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
    }
);