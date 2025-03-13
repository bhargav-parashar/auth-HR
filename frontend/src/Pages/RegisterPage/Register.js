import React from "react";
import { Box, Stack, Container, colors, Typography } from "@mui/material";
import Img from "../../../assets/welcome.jpg";
import LoginInput from "../../components/LoginInputBox/LoginInput";

const Login = () => {
  return (
    <Box
      py={3}
      px={3}
      sx={{
        background:
          "linear-gradient(0deg, rgba(246,228,204,1) 0%, rgba(108,140,181,1) 100%)",
      }}
    >
      <Stack direction={{ xs: "column", md: "row" }} sx={{ width: "100%" }}>
        <Box
          sx={{
            maxWidth: { xs: "100vw", md: "65vw" },
            maxHeight: "95vh",
            background: "#090909",
            objectFit: "cover",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: { xs: "0.5rem", md: "0%" },
            borderBottomLeftRadius: { xs: "0%", md: "0.5rem" },
          }}
          component="img"
          alt="login-page"
          src={Img}
          flex={2}
        ></Box>

        <Box
          sx={{
            height: "95vh",
            overflow: "hidden",
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(8px)",
            borderTopRightRadius: { xs: "0%", md: "0.5rem" },
            borderBottomLeftRadius: { xs: "0.5rem", md: "0%" },
            borderBottomRightRadius: "0.5rem",
            padding: "2%",
          }}
          flex={1}
        >
          <LoginInput isRegister />
        </Box>
      </Stack>
    </Box>
  );
};

export default Login;
