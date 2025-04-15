export const lightTheme = () => (
    {
        palette :{
            mode : "light",
            primary :{
                main : '#fff',
                light : 'rgb(124, 124, 247)',
                dark : '#D3D3D3',
                inactive2 : "rgb(247, 237, 223)",
                inactive3 : "rgb(247, 237, 223)",
                bg2 : 'rgb(214, 211, 238)',
                bg3 : '#000000',
                shimmer : "rgb(203, 201, 211)",
                success : "#4CAF50",
                inactive:'rgb(92, 68, 68)',
                bg1 : 'rgb(209, 207, 207)',
                contrast:'#9696FF',
                successLight :"rgb(222, 248, 223)",
                highlight:'rgb(225, 136, 34)',
                calendar: 'rgb(202, 202, 245)',
            },
            
            text: {
                primary: "#000000",
                secondary: "rgba(0,0,0,0.5)",
                heading:'rgb(81, 81, 228)',
                headingContrast :'#9696FF',
                contrast: "#fafafa"
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