import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Drawer } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );
  const [open, setOpen] = useState(false);
  const toggleDrawer = (val) => {
    setOpen(val);
  };

  return (
    <Box sx={{ flexGrow: 1, zIndex: 10, position: "relative" }}>
      <AppBar position="absolute" elevation={0} sx={{paddingTop:'1%',paddingBottom:'1%'}}>
        <Toolbar >
          <Box sx={{ flexGrow: 1 }}>
            <MenuIcon
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={() => toggleDrawer(true)}
            />
          </Box>

          {
            <Stack direction="row" spacing={1} alignItems="center">
              <AccountCircle />
              <Typography sx={{fontSize:'1vw'}} >{loggedInUser || ""}</Typography>
            </Stack>
          }
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        <Box
          sx={{
            background:
              "linear-gradient(0deg, rgba(246,228,204,1) 0%, rgba(108,140,181,1) 100%)",
            height: "100%",
          }}
        >
          <Sidebar />
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
