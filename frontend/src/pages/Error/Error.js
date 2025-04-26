import React from "react";
import errorImg from "../../assets/friends.svg";
import { Box, Stack, Paper, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <Box sx={{ height: "95vh", width: "95vw", position: "relative" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        sx={{
          width: { xs: "80%", md: "50%" },
          height: { xs: "60%", md: "40%" },
          position: "absolute",

          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Stack
          direction="column"
          gap={{ xs: 1, md: 0 }}
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            sx={{
              height: "35%",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
              sx={{
                height: "100%",
              }}
            >
              <CheckCircleIcon
                sx={{ color: "darkgray", fontSize: { xs: "200%", md: "300%" } }}
                color="success"
              />
              <Typography
                sx={{ fontSize: { xs: "200%", md: "300%" }, color: "darkgray" }}
              >
                AuthHR
              </Typography>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            gap={1}
            sx={{
              height: "15%",
            }}
          >
            <Typography fontWeight="bold">{`${err?.status || "Unknown error occured."}` }</Typography>
            <Typography color="rgb(152, 146, 146)">That's an error.</Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            sx={{
              height: "15%",
              overflowWrap: "break-word",
            }}
          >
            <Box sx={{ height: "100%", width: "100%" }}>
              <Typography>{`${err?.error?.message || ""}`}</Typography>
              <Typography color="rgb(152, 146, 146)">{`That's all we know.`}</Typography>
            </Box>
          </Stack>
        </Stack>
        <Box
          component="img"
          sx={{
            height: "100%",
            width: "100%",
          }}
          alt="step"
          src={errorImg}
        />
      </Stack>
    </Box>
  );
};

export default Error;
