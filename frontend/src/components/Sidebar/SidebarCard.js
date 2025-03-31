import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import Icon from "../Sidebar/Icon";

const SidebarCard = ({  menuItem, menuIcon, selectedTab, setSelectedTab,toggleDrawer }) => {
 

  const handleClick = (val) => {
    setSelectedTab(val);
    if(toggleDrawer){
      toggleDrawer(false);
    }
    
  };

  return (
    <Stack
      p={2}
      paddingLeft="15%"
      mb={1}
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
      sx={{
        position: "relative",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        gap={1}
      >
        <Icon
          menuIcon={menuIcon}
          menuItem={menuItem}
          selectedTab={selectedTab}
          handleClick={handleClick}
        />
        <Typography
          variant="caption"
          sx={{
            cursor: "pointer",
            fontWeight: selectedTab === menuItem ? "bold" : "",
            color: selectedTab === menuItem ? "text.heading" : "",
          }}
          onClick={() => handleClick(menuItem)}
        >
          {menuItem}
        </Typography>
      </Stack>
      {selectedTab === menuItem && (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={1}
          sx={{
            position: "absolute",
            left: "0%",
            width: "15%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              bgcolor: "text.heading",
              borderRadius: "50%",
              height: "5px",
              width: "5px",
            }}
          ></Box>
        </Stack>
      )}
    </Stack>
  );
};

export default SidebarCard;
