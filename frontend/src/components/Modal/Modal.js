import React from "react";
import styles from "./Modal.module.css";
import { Box, Typography, Stack, Button, Paper } from "@mui/material";

const Modal = ({ handleOutsideClick, handleModalClose, handleSubmit }) => {
  
  
  return (
    <Box id="Outer-Modal" className={styles.modal} onClick={handleOutsideClick}>
      <Box className={styles["modal-content"]}>
        <Typography sx={{fontWeight:'bold'}} variant="h6" color="text.headingContrast">Submit Request</Typography>
        <Typography textAlign='left' pr={1}>Are you sure you want to submit this request ?</Typography>
        <Stack pt={6} px={2} direction='row' justifyContent='flex-end' gap={0.5}>
          <Button sx={{bgcolor:'primary.inactive'}} onClick={handleModalClose}>No</Button>
          <Button sx={{bgcolor:'primary.contrast'}} onClick={handleSubmit} >Yes</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Modal;
