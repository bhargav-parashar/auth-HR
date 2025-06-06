import React, { useState } from "react";
import * as styles from "./Modal.module.css";
import { Box, Typography, Stack, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Loader from "../Loader/Loader";

const Modal = ({ handleOutsideClick, handleModalClose, handleSubmit }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitClick = () => {
    setIsLoading(true);
    handleSubmit();
  };

  return (
    <Box id="Outer-Modal" className={styles.modal} onClick={handleOutsideClick}>
      <Box className={styles["modal-content"]}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <Typography
            sx={{ fontWeight: "bold" }}
            variant="h6"
            color="text.headingContrast"
          >
            Submit Request
          </Typography>
          <CloseIcon
            onClick={handleModalClose}
            sx={{
              marginX: "10px",
              cursor: "pointer",
              color: "primary.contrast",
            }}
          />
        </Stack>
        <Typography textAlign="left" pr={1}>
          Are you sure you want to submit this request ?
        </Typography>
        {isLoading ? (
          <Stack
            pt={6}
            px={2}
            direction="row"
            justifyContent="flex-end"
            gap={0.5}
          >
            <Loader isColored />
          </Stack>
        ) : (
          <Stack
            pt={6}
            px={2}
            direction="row"
            justifyContent="flex-end"
            gap={0.5}
          >
            <Button
              sx={{ bgcolor: "primary.inactive" }}
              onClick={handleModalClose}
            >
              No
            </Button>
            <Button
              sx={{ bgcolor: "primary.contrast" }}
              onClick={handleSubmitClick}
            >
              Yes
            </Button>
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default Modal;
