import { useState, useEffect } from "react";
import { Box, Stack, Paper } from "@mui/material";
import Details from "./Details";
import LeaveBal from "./LeaveBal";
import Announcements from "./Announcements";
import RequestHistory from "./RequestHistory";
import config from "../../../../config/config";
import axios from "axios";
import MobileDash from "./MobileDash";
import useAnnouncements from "../../../../Hooks/useAnnouncements";

const EmployeeHome = () => {
  const [user, setUser] = useState([]);
  const { announcements } = useAnnouncements();
  useEffect(() => {
    const URL = `${config.endpoint}/user/details`;
    try {
      const getDetails = async () => {
        const { data } = await axios.get(URL, { withCredentials: true });
        setUser(data?.user);
      };
      getDetails();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Box sx={{ height: "100%" }}>
      <Paper elevation={0} sx={{ height: "100%", bgcolor: "primary.bg2" }}>
        <Stack
          direction="column"
          p={1}
          sx={{
            background: "primary.bg1",
            borderRadius: "0.6rem",
            height: "100%",
            display: { xs: "none", md: "block" },
          }}
        >
          <Box
            p={2}
            sx={{
              height: "100%",
              borderRadius: "0.6rem",
            }}
          >
            <Stack
              alignItems="center"
              justifyContent="space-between"
              direction="row"
              gap={1}
              sx={{ height: "100%" }}
            >
              <Stack
                direction="column"
                flex={1}
                gap={1}
                sx={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <Details user={user} />
                <LeaveBal user={user} />
              </Stack>

              <Stack
                direction="column"
                flex={1}
                gap={1}
                sx={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <Announcements announcements={announcements} />
                <RequestHistory />
              </Stack>
            </Stack>
          </Box>
        </Stack>

        <Box
          pt={3}
          sx={{
            height: "100%",
            display: { xs: "block", md: "none" },
          }}
        >
          <Stack
            sx={{ height: "90%" }}
            justifyContent="center"
            alignItems="center"
          >
            <MobileDash user={user} />
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default EmployeeHome;
