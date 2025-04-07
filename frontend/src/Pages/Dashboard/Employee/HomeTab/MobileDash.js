import React from "react";
import { Box, Stack, Paper } from "@mui/material";
import Details from "./Details";
import LeaveBal from "./LeaveBal";
import Announcements from "./Announcements";
import RequestHistory from "./RequestHistory";

const MobileDash = ({ user }) => {
  return (
    <Stack gap={1}>
      <Announcements isMobile />
      <Details isMobile user={user} />
      <LeaveBal isMobile user={user} />
      <RequestHistory isMobile />
    </Stack>
  );
};

export default MobileDash;
