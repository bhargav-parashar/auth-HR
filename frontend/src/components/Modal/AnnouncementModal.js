import { useState, useEffect, useRef } from "react";
import * as styles from "./Modal.module.css";
import { Box, Typography, Stack, Button, TextField } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import CloseIcon from "@mui/icons-material/Close";

const AnnouncementModal = ({
  handleOutsideClick,
  handleModalClose,
  handleSubmit,
  handleEdit,
  handleDelete,
  announcement = "",
  id = "",
  isEdit = false,
  isDelete = false,
  isAnnLoading,
}) => {
  const [editedAnnouncement, setEditedAnnouncement] = useState(announcement);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmitClick = () => {
    if (isEdit) {
      handleEdit(id, editedAnnouncement, handleModalClose);
    } else if (isDelete) {
      handleDelete(id, handleModalClose);
    } else {
      handleSubmit(editedAnnouncement, handleModalClose);
    }
  };

  const handleChange = (e) => {
    setEditedAnnouncement(e.target.value);
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
          <Stack
            mb={1}
            direction="row"
            alignItems="center"
            gap={1}
            sx={{ width: "100%" }}
          >
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h6"
              color="text.headingContrast"
            >
              {isEdit
                ? "Update Announcement"
                : isDelete
                ? "Delete Announcement"
                : "Create Announcement"}
            </Typography>

            <CampaignIcon sx={{ color: "primary.contrast" }} />
          </Stack>
          <CloseIcon
            onClick={handleModalClose}
            sx={{
              marginX: "10px",
              cursor: "pointer",
              color: "primary.contrast",
            }}
          />
        </Stack>
        {isDelete && (
          <Typography
            sx={{ color: "primary.inactive" }}
            textAlign="left"
            pr={1}
          >
            Are you sure you want to delete this announcement ?
          </Typography>
        )}
        {!isDelete && (
          <TextField
            id={1}
            inputRef={inputRef}
            name="announcement"
            label=""
            required
            placeholder="Create new"
            variant="outlined"
            size="small"
            value={editedAnnouncement}
            onChange={handleChange}
            sx={{
              paddingRight: 1,
              width: "100%",
              mb: 3,
              "& .MuiInputLabel-root": { color: "white" },
              "& label.Mui-focused": { color: "white" },
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgb(214, 214, 244)",
                "& fieldset": { borderColor: "black" },
                "&:hover fieldset": { borderColor: "black" },
                "&.Mui-focused fieldset": { borderColor: "primary.contrast" },
              },
              "& .MuiInputBase-input": {
                color: "primary.contrast",
              },
            }}
            inputProps={{ maxLength: 70, style: { fontSize: "0.8rem" } }}
          />
        )}
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
            Cancel
          </Button>
          <Button
            sx={{ bgcolor: "primary.contrast" }}
            onClick={handleSubmitClick}
          >
            {isEdit ? "Update" : isDelete ? "Delete" : "Create"}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default AnnouncementModal;
