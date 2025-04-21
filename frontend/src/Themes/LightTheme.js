export const lightTheme = () => (
    {
        palette :{
            mode : "light",
            primary :{
                main : '#fff',
                light : 'rgb(124, 124, 247)',
                dark : '#D3D3D3',
                inactive2 :"rgb(245, 223, 193)",
                inactive3 : 'rgb(247, 233, 207)',
                bg2 : 'rgb(214, 211, 238)',
                bg3 : '#000000',
                shimmer : "rgb(203, 201, 211)",
                success : "#4CAF50",
                inactive:'rgb(92, 68, 68)',
                bg1 : 'rgb(209, 207, 207)',
                contrast:'rgb(81, 81, 228)',
                successLight :"rgb(222, 248, 223)",
                highlight:'rgb(225, 136, 34)',
                calendar: "rgb(141, 173, 243)",
                badge:'#f0fff0'
            },
            
            text: {
                primary: "#000000",
                secondary: "rgba(0,0,0,0.5)",
                heading:'rgb(81, 81, 228)',
                headingContrast :'rgb(81, 81, 228)',
                contrast: "#fafafa",
                badge:'rgb(53, 71, 100)',
                badgeSubtext : 'rgb(92, 68, 68)',
                subHeader : 'rgb(137, 150, 160)',
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