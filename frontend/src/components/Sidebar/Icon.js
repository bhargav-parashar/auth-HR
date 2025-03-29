import React from "react";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Icon = ({ menuIcon, menuItem, selectedTab, handleClick }) => {
  let currIcon = (
    <HomeOutlinedIcon
      sx={{ cursor: "pointer", color: selectedTab === menuItem ? 'text.heading' : "" }}
      onClick={()=>handleClick(menuItem)}
    />
  );
  switch (menuIcon) {
    case "HomeOutlinedIcon":
      currIcon = (
        <HomeOutlinedIcon
          sx={{ cursor: "pointer", color: selectedTab === menuItem ? 'text.heading' : "" }}
          onClick={()=>handleClick(menuItem)}
        />
      );
      break;
    case "DataUsageIcon":
      currIcon = (
        <DataUsageIcon
          sx={{ cursor: "pointer",color: selectedTab === menuItem ? 'text.heading' : "" }}
          onClick={()=>handleClick(menuItem)}
        />
      );
      break;
    case "GroupsIcon":
      currIcon = (
        <GroupsIcon
          sx={{ cursor: "pointer",color: selectedTab === menuItem ? 'text.heading' : "" }}
          onClick={()=>handleClick(menuItem)}
        />
      );
      break;
    case "LogoutIcon":
      currIcon = (
        <LogoutIcon
          sx={{ cursor: "pointer",color: selectedTab === menuItem ? 'text.heading' : "" }}
          onClick={()=>handleClick(menuItem)}
        />
      );
      break;
    case "DarkModeOutlinedIcon":
      currIcon = (
        <DarkModeOutlinedIcon
          sx={{ cursor: "pointer",color: selectedTab === menuItem ? 'text.heading' : "" }}
          onClick={()=>handleClick(menuItem)}
        />
      );
      break;
    default:
      currIcon = (
        <HomeOutlinedIcon
          sx={{ cursor: "pointer",color: selectedTab === menuItem ? 'text.heading' : "" }}
          onClick={()=>handleClick(menuItem)}
        />
      );
  }
  return <>{currIcon}</>;
};

export default Icon;
