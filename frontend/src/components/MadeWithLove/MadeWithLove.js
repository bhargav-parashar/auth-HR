import { Typography, Box, Stack } from "@mui/material";

const MadeWithLove = ({ size, isLogin }) => {
 
  return (
    <Stack
      gap={1}
      direction="row"
      sx={{ width: "100%" }}
      alignItems="center"
      justifyContent="center"
    >
      <Typography
        fontSize={size ? size : ""}
        variant="caption"
        color= {isLogin ?'lightgray' : "primary.inverse"}
      >
        Made with ❤️ and countless console.log()s
      </Typography>
      
    </Stack>
  );
};

export default MadeWithLove;
