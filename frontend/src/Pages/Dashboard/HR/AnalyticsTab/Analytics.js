import React from "react";
import { Stack } from "@mui/material";
import TotalEmployee from "./TotalEmployee";
import Location from "./Location";
import Department from "./Department";
import Requests from "./Requests";

const Analytics = () => {
  return (
    <Stack gap={1} sx={{ height: "100%" }}>
      <Stack gap={1} direction="row" sx={{ height: "100%" }}>
        <TotalEmployee />
        <Location />
      </Stack>
      <Stack gap={1} direction="row" sx={{ height: "100%" }}>
        <Department />
        <Requests />
      </Stack>
    </Stack>
  );
};

export default Analytics;
