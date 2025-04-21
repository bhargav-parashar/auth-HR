import { Typography, Box, Stack } from "@mui/material";
import ShimmerText from "../ShimmerText/ShimmerText";

const MadeWithLove = ({ size }) => {
  handleClick = () =>{
    window.open("https://www.google.com", "_blank", "noopener,noreferrer");
  }
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
        color="lightgray"
      >
        Made with ❤️ and countless console.log()s
      </Typography>
      {/* <Typography
        fontSize="15px"
        variant="caption"
        color="lightgray"
      >
        |
      </Typography>
      <ShimmerText>
        <Typography
          onClick={handleClick}
          fontSize={size ? size : ""}
          variant="caption"
          color="lightgray"
          fontWeight='bold'
          sx={{cursor:'pointer'}}
        >
          About Me
        </Typography>
      </ShimmerText> */}
    </Stack>
  );
};

export default MadeWithLove;
