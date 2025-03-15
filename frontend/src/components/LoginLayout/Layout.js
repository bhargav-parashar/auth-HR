import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Img from "../../assets/welcome.jpg";
import LoginCarousel from "../Carousel/LoginCarousel";
import { carouselSlides } from "../../constants/constants";

const Login = ({ children }) => {
  return (
    <Box
      py={{ xs: 0, sm: 0, xl: 5 }}
      px={{ xs: 0, sm: 0, xl: 10 }}
      sx={{
        height: "100vh",
        background:
          "linear-gradient(0deg, rgba(246,228,204,1) 0%, rgba(108,140,181,1) 100%)",
      }}
      direction="row"
      alignItems="center"
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          height: "100%",
        }}
      >
        <Box
          flex={{ xs: 1, md: 3 }}
          sx={{
            background: "#090909",
            objectFit: "cover",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: { xs: "0.5rem", md: "0%" },
            borderBottomLeftRadius: { xs: "0%", md: "0.5rem" },
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            sx={{
              maxWidth: "100%",
              background: "#090909",
              objectFit: "contain",
              borderTopLeftRadius: "0.5rem",
              borderTopRightRadius: { xs: "0.5rem", md: "0%" },
              borderBottomLeftRadius: { xs: "0%", md: "0.5rem" },
            }}
            component="img"
            alt="login-page"
            src={Img}
          />
          <Box
            sx={{
              position: "absolute",
              top: "5%",
              left: "5%",
            }}
          >
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "7vw", sm: "4vw" } }}
            >
              Welcome to Auth-HR,
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "7vw", sm: "4vw" } }}
            >
              your secure
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "7vw", sm: "4vw" } }}
            >
              HR management
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "7vw", sm: "4vw" } }}
            >
              platform.
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: "15%",
              left: "1%",
              right: "1%",
              px: "20%",
              display: { xs: "none", md: "block" },
            }}
          >
            <LoginCarousel
              slidesPerView={1}
              data={carouselSlides.map((slide) => (
                <Typography sx={{ color: "white" }}>{slide.txt}</Typography>
              ))}
            />
          </Box>
        </Box>
        <Box
          sx={{
            overflow: "hidden",
            backgroundColor: "rgba(0, 0, 0, 0.73)",
            backdropFilter: "blur(8px)",
            borderTopRightRadius: { xs: "0%", md: "0.5rem" },
            borderBottomLeftRadius: { xs: "0.5rem", md: "0%" },
            borderBottomRightRadius: "0.5rem",
            padding: { xs: "5%", md: "2%" },
          }}
          flex={{ xs: 3, md: 1 }}
        >
          {children}
        </Box>
      </Stack>
    </Box>
  );
};

export default Login;
