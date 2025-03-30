export const lightTheme = () => (
    {
        palette :{
            mode : "light",
            primary :{
                main : '#fff',
                light : '#9696FF',
                dark : '#D3D3D3',
                bg1 : "rgb(239, 237, 247)",
                bg2 : 'rgb(203, 197, 246)',
                bg3 : '#000000',
                success : "#4CAF50",
                inactive:'#D3D3D3',
                contrast:'#9696FF'
            },
            
            text: {
                primary: "#000000",
                secondary: "rgba(0,0,0,0.5)",
                heading:'rgb(81, 81, 228)',
                headingContrast :'#9696FF',
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