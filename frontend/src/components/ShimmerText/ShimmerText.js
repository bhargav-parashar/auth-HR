import React from "react";
import * as styles from "./ShimmerText.module.css";
import Typography from "@mui/material/Typography";

const ShimmerText = ({ children }) => {
  return (
    <Typography className={styles.shimmerText}>
      {children}
    </Typography>
  );
};

export default ShimmerText;
