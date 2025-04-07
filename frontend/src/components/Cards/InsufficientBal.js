import React from "react";
import { Typography, Stack, Paper } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

const InsufficientBalCard = ({ leaveType, leaveBal, dateDiff }) => {
  return (
    <Paper elevation={2} sx={{ border:'2px solid', color:'rgb(78, 27, 27)', borderColor:'rgb(230, 101, 101)', bgcolor:'rgb(245, 196, 196)', px: 2, pb: 2, pt: 0.5, mt: 2 }}>
      <Stack direction="row" alignItems="center" gap={0.5}>
        <ErrorIcon fontSize="small" />
        <Typography>Alert</Typography>
      </Stack>
      <Typography mt={1} variant="body2">
        {`You do not have sufficient balance for ${leaveType}.`}{" "}
      </Typography>
      <Typography variant="body2">{`Days requested : ${dateDiff}`}</Typography>
      <Typography variant="body2">{`Balance : ${leaveBal}`} </Typography>
    </Paper>
  );
};

export default InsufficientBalCard;
