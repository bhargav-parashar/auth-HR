import { useContext } from "react";
import { Stack, Typography, Switch, Box, Divider } from "@mui/material";
import UserContext from "../../context/UserContext";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

const Panel = () => {
  const { darkMode, setDarkMode } = useContext(UserContext);
  const handleModeChange = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <Box>
      <Divider
        variant="middle"
        sx={{
          flexGrow: 1,
          backgroundColor: "rgb(176, 169, 169)",
          borderRadius: "10px",
          height: "1px",
          marginTop: "20%",
          marginBottom: "20%",
        }}
      />
      <Stack
        p={2}
        paddingLeft={5}
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        // sx={{ border: "2px solid black" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          gap={1}
        >
          <LogoutIcon />
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => handleClick(menuItem)}
          >
            Logout
          </Typography>
        </Stack>
      </Stack>

      <Stack
        p={2}
        paddingLeft={5}
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        // sx={{ border: "2px solid black" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          gap={1}
        >
          <DarkModeOutlinedIcon />
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => handleClick(menuItem)}
          >
            Dark Mode
          </Typography>
          <Switch checked={darkMode} onChange={handleModeChange} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Panel;
