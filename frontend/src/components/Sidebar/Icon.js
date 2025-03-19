import React from "react";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Icon = ({ menuIcon, menuItem }) => {
  let currIcon = (
    <HomeOutlinedIcon
      sx={{ cursor: "pointer" }}
      onClick={() => alert(menuItem)}
    />
  );
  switch (menuIcon) {
    case "HomeOutlinedIcon":
      currIcon = (
        <HomeOutlinedIcon
          sx={{ cursor: "pointer" }}
          onClick={() => alert(menuItem)}
        />
      );
      break;
    case "DataUsageIcon":
      currIcon = (
        <DataUsageIcon
          sx={{ cursor: "pointer" }}
          onClick={() => alert(menuItem)}
        />
      );
      break;
    case "GroupsIcon":
      currIcon = (
        <GroupsIcon
          sx={{ cursor: "pointer" }}
          onClick={() => alert(menuItem)}
        />
      );
      break;
    case "LogoutIcon":
      currIcon = (
        <LogoutIcon
          sx={{ cursor: "pointer" }}
          onClick={() => alert(menuItem)}
        />
      );
      break;
    case "DarkModeOutlinedIcon":
      currIcon = (
        <DarkModeOutlinedIcon
          sx={{ cursor: "pointer" }}
          onClick={() => alert(menuItem)}
        />
      );
      break;
    default:
      currIcon = (
        <HomeOutlinedIcon
          sx={{ cursor: "pointer" }}
          onClick={() => alert(menuItem)}
        />
      );
  }
  return <>{currIcon}</>;
};

export default Icon;
