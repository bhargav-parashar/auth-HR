import React from "react";
import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  Divider,
} from "@mui/material";

const LoginInput = () => {
  return (
    <Box
      sx={{
        // border: "2px solid white",
        height: "100%",
      }}
      pt={{ xs: "10%", md: "40%" }}
    >
      <Stack
        direction="column"
        gap={2}
        sx={
          {
            // border:'2px solid green'
          }
        }
      >
        <Typography color="white" variant="h2">
          Login
        </Typography>
        <Typography mb={2} color="lightgray" variant="subtitle2">
          Don’t have an account? Register
        </Typography>
        <Stack mb={1} direction="row" gap={1}>
          <TextField
            sx={{
              width: "100%",
              color: "white",
              "& .MuiInputLabel-root": { color: "lightgray" },
              "& label.Mui-focused": { color: "white" },
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgb(80, 79, 78)",
                "& fieldset": { borderColor: "lightgray" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
              "& .MuiInputBase-input": {
                color: "white",
              },
            }}
            id="firstName"
            label="First Name"
            variant="outlined"
          />
          <TextField
            sx={{
              width: "100%",
              color: "white",
              "& .MuiInputLabel-root": { color: "lightgray" },
              "& label.Mui-focused": { color: "white" },
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgb(80, 79, 78)",
                "& fieldset": { borderColor: "lightgray" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
              "& .MuiInputBase-input": {
                color: "white",
              },
            }}
            id="lasttName"
            label="Last Name"
            variant="outlined"
          />
        </Stack>
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          sx={{
            width: "100%",
            color: "white",
            "& .MuiInputLabel-root": { color: "lightgray" },
            "& label.Mui-focused": { color: "white" },
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgb(80, 79, 78)",
              "& fieldset": { borderColor: "lightgray" }, // Default border color
              "&:hover fieldset": { borderColor: "white" }, // Hover border color
              "&.Mui-focused fieldset": { borderColor: "white" }, // Focus border color
            },
            "& .MuiInputBase-input": {
              color: "white",
            },
          }}
        />
        <Button
          sx={{ height: "45px", borderRadius: "0.5rem", marginTop: "25px", background:" rgba(246,228,204,1)", color:"black" }}
          variant="contained"
          onClick={() => {}}
        >
          Login
        </Button>
        <Divider sx={{ "&::before, &::after": { borderTopWidth: "thin" } }}>
          <Typography variant="body2" sx={{ px: 1, color: "lightgray" }}>
            Or Login As
          </Typography>
        </Divider>
        <Stack direction="row" gap={1}>
          <Button
            sx={{ border:"1px solid white", height: "45px", width: "100%", borderRadius: "0.5rem", color:"white" }}
            variant="outlined"
            onClick={() => {}}
          >
            Guest HR
          </Button>
          <Button
            sx={{ border:"1px solid white", height: "45px", width: "100%", borderRadius: "0.5rem",color:"white" }}
            variant="outlined"
            onClick={() => {}}
          >
            Guest Employee
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LoginInput;
