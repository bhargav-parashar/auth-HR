import React from "react";
import { Stack, Typography } from "@mui/material";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Icon from "../Sidebar/Icon";

const SidebarCard = ({ menuItem, menuIcon, selectedTab, setSelectedTab }) => {
  let icon = <HomeOutlinedIcon />;
  switch (menuIcon) {
    case "HomeOutlinedIcon":
      icon = <HomeOutlinedIcon sx={{cursor:"pointer"}}  />;
      break;
    case "DataUsageIcon":
      icon = <DataUsageIcon />;
      break;
    case "GroupsIcon":
      icon = <GroupsIcon />;
      break;
    case "LogoutIcon":
      icon = <LogoutIcon/>
      break;
      case "DarkModeOutlinedIcon":
        icon = <DarkModeOutlinedIcon/>
        break;
    default:
      icon = <HomeOutlinedIcon />;
  }

  const handleClick = (val) =>{
    setSelectedTab(val);
  };

  return (
    <Stack
      p={2}
      paddingLeft={5}
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
      sx={{ border: "2px solid black" }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        sx={{ border: "2px solid red" }}
        gap={1}
      >
        <Icon menuIcon={menuIcon} menuItem={menuItem} selectedTab={selectedTab} handleClick={handleClick} />
        <Typography sx={{cursor:"pointer"}} onClick={() => handleClick(menuItem)} >{menuItem}</Typography>
      </Stack>
    </Stack>
  );
};

export default SidebarCard;
