import React from "react";
import { Stack } from "@mui/material";
import RequestCards from "../../components/Sections/RequestCards";
import RequestGrid from "../../components/Sections/RequestGrid";

const AdminHome = () => {
  return (
    <Stack mt={4} px={4} direction="column" gap={4}>
      <RequestCards />
      <RequestGrid />
    </Stack>
  );
};

export default AdminHome;
