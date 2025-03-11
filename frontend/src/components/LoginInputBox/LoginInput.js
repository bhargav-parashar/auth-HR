import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  Divider,
} from "@mui/material";

const LoginInput = ({ isRegister = false }) => {
  return (
    <Box
      sx={{
        // border: "2px solid white",
        height: "100%",
      }}
      pt={{ xs: "10%", md: "40%" }}
    >
      {isRegister ? (
         <Stack
         direction="column">
         <Typography color="white" variant="h2">
           Register
         </Typography>
         <Typography mb={2} color="lightgray" variant="subtitle2">
           Have an account?{" "}
           <Link
             to="/"
             style={{ textDecoration: "none", color: "#1976d2" }}
           >
             Login
           </Link>
         </Typography>
         <TextField
            
             sx={{
              marginBottom:"15px",
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
             id="username"
             label="User Name"
             variant="outlined"
           />
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
         <Typography mt={1}  color="lightgray" variant="subtitle2">
           Password must be atleast 5 characters long
         </Typography>
         <TextField
           id="confirmpassword"
           label="Confirm Password"
           type="password"
           variant="outlined"
           sx={{
            marginTop:"15px",
            marginBottom:"15px",
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
         
           sx={{
             marginTop: "25px",
             marginBottom: "25px",
             height: "45px",
             borderRadius: "0.5rem",
             marginTop: "25px",
             background: " rgba(246,228,204,1)",
             color: "black",
           }}
           variant="contained"
           onClick={() => {}}
         >
           Register
         </Button>
       </Stack>
      ) : (
        <Stack
          direction="column"
          gap={2}
         
        >
          <Typography color="white" variant="h2">
            Login
          </Typography>
          <Typography mb={2} color="lightgray" variant="subtitle2">
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "#1976d2" }}
            >
              Register
            </Link>
          </Typography>
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
                }
              }}
              
              id="userName"
              label="User Name"
              variant="outlined"
            />
          <TextField
            mt
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
            sx={{
              height: "45px",
              borderRadius: "0.5rem",
              marginTop: "25px",
              marginBottom: "15px",
              background: " rgba(246,228,204,1)",
              color: "black",
              "&:hover":{
                background: " rgb(105, 208, 240)",
              }
            }}
            variant="contained"
            onClick={() => {}}
          >
            Login
          </Button>
          <Divider sx={{ "&::before, &::after": { borderTopWidth: "thin",borderColor:"gray" } }}>
            <Typography variant="body2" sx={{ px: 1, color: "lightgray" }}>
              Or Login As
            </Typography>
          </Divider>
          <Stack sx={{marginTop:"15px"}} direction="row" gap={1}>
            <Button
              sx={{
                border: "1px solid white",
                height: "45px",
                width: "100%",
                borderRadius: "0.5rem",
                color: "white",
                "&:hover":{
                  background: " rgba(246,228,204,1)",
                  color:"black"
              }
              }}
              variant="outlined"
              onClick={() => {}}
            >
              Guest HR
            </Button>
            <Button
              sx={{
                border: "1px solid white",
                height: "45px",
                width: "100%",
                borderRadius: "0.5rem",
                color: "white",
                "&:hover":{
                  background: " rgba(246,228,204,1)",
                  color:"black"
              }
              }}
              variant="outlined"
              onClick={() => {}}
            >
              Guest Employee
            </Button>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default LoginInput;
