import React from "react";
import { Button } from "@mui/material";
import { styled, keyframes } from "@mui/system";

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const CustomButton = styled(Button)(({ theme }) => ({
  fontSize: "11px",
  fontWeight: "bold",
  //background: 'linear-gradient(110deg, #2e7d32 20%, #66bb6a 40%, #2e7d32 60%)',
  background:'linear-gradient(110deg, #ff4d4d 20%, #ff9999 40%, #ff4d4d 60%)',

  backgroundSize: "200% 100%",
  animation: `${shimmer} 4s linear infinite`,
  color: "#fff",
  boxShadow: theme.shadows[2],
  "&:hover": {
    animationPlayState: "paused",
    background: " #ff4d4d "
  },
}));

const ShimmerButton = ({ label, handleClick, endIcon }) => {
  return (
    <CustomButton startIcon={endIcon}  variant="contained" size="small" onClick={handleClick} >
      {label}
    </CustomButton>
  );
};

export default ShimmerButton;
