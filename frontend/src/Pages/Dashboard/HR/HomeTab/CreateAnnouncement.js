import { useState } from "react";
import { Box, Typography, Stack, Paper, Button } from "@mui/material";
import Shimmer from "../../../../components/ShimmerUI/Shimmer";
import useAnnouncements from "../../../../Hooks/useAnnouncements";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AnnouncementModal from "../../../../components/Modal/AnnouncementModal";
import useModal from "../../../../Hooks/useModal";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const CreateAnnouncement = ({
  isLoading
}) => {
  const {
    announcements,
    handleCreateAnnouncment,
    handleUpdateAnnouncment,
    handleDeleteAnnouncment,
  } = useAnnouncements();
  const { handleModalOpen, handleModalClose, handleOutsideClick, isModalOpen } =
    useModal();
  const [announcement, setAnnouncement] = useState("");
  const [id, setId] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  hancelCreateClick = () => {
    setIsEdit(false);
    setIsDelete(false);
    setAnnouncement("");
    handleModalOpen();
  };

  handleEditClick = (id, ann) => {
    setIsEdit(true);
    setIsDelete(false);
    setAnnouncement(ann);
    setId(id);
    handleModalOpen();
  };

  handleDeleteClick = (id) => {
    setIsDelete(true);
    setIsEdit(false);
    setId(id);
    handleModalOpen();
  };

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Box
        sx={{
          bgcolor: "primary.inactive3",
          borderRadius: "0.6rem",
          width: "100%",
          cursor: "pointer",
          height: "100%",
          position: "relative",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
          scrollbarWidth: "thin",
          scrollbarColor: "#888 transparent",
          transition: "transform 0.3s ease, background-color 0.3s ease",
          "&:hover": {
            transform: "scale(1.015)",
          },
        }}
      >
        {isLoading && <Shimmer cover />}
        {!isLoading && (
          <Stack p={1} s>
            <Typography mb={1}> Announcements</Typography>

            <TableContainer component={Paper}>
              <Table
                sx={{
                  "& .MuiTableCell-root": {
                    padding: "4px 8px",
                    fontSize: "0.8rem",
                    lineHeight: 1.4,
                  },
                  "& .MuiTableRow-root": {
                    height: "32px",
                  },
                }}
                aria-label="dense table"
              >
                <TableHead>
                  {/* <TableRow>
                    <TableCell align="left">Announcement</TableCell>
                    <TableCell align="left">Edit</TableCell>
                    <TableCell align="left">Delete</TableCell>
                  </TableRow> */}
                </TableHead>
                <TableBody key={1}>
                  {announcements.length > 0 &&
                    announcements.map((item, idx) => (
                      <TableRow
                        key={item.id || `leave-${idx}`}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="left">{item.body}</TableCell>
                        <TableCell align="left">
                          <EditIcon
                            onClick={() => handleEditClick(item._id, item.body)}
                            fontSize="small"
                            sx={{
                              "&:hover": {
                                color: "primary.light",
                              },
                            }}
                          />
                        </TableCell>
                        <TableCell align="left">
                          <DeleteIcon
                            onClick={() => handleDeleteClick(item._id)}
                            fontSize="small"
                            sx={{
                              "&:hover": {
                                color: "primary.light",
                              },
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Button
              onClick={hancelCreateClick}
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                minWidth: 0,
                padding: 0,
                backgroundColor: "primary.light",
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "secondary.dark",
                },
                position: "absolute",
                bottom: "5%",
                right: "5%",
              }}
            >
              +
            </Button>
          </Stack>
        )}
      </Box>
      {isModalOpen && (
        <AnnouncementModal
          handleOutsideClick={handleOutsideClick}
          handleModalClose={handleModalClose}
          handleSubmit={handleCreateAnnouncment}
          handleEdit={handleUpdateAnnouncment}
          handleDelete={handleDeleteAnnouncment}
          announcement={announcement}
          id={id}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          isDelete={isDelete}
          setIsDelete={setIsDelete}
        />
      )}
    </Box>
  );
};

export default CreateAnnouncement;
