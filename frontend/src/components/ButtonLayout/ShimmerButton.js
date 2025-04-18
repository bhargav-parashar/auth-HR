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
  height: "45px",
  width: "100%",
  fontSize: "11px",
  fontWeight: "bold",
  background: 'linear-gradient(110deg, #2e7d32 20%, #66bb6a 40%, #2e7d32 60%)',
  //background: "linear-gradient(110deg, #3f51b5 20%,rgb(161, 117, 232) 40%, #3f51b5 60%)",
  backgroundSize: "200% 100%",
  animation: `${shimmer} 4s linear infinite`,
  color: "#fff",
  borderRadius: "8px",
  padding: "10px 24px",
  boxShadow: theme.shadows[2],
  "&:hover": {
    animationPlayState: "paused",
    background: "rgb(18, 136, 28)"
  },
}));

const ShimmerButton = ({ label, handleClick }) => {
  return (
    <CustomButton onClick={handleClick} variant="contained">
      {label}
    </CustomButton>
  );
};

export default ShimmerButton;
