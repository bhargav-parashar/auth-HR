import * as styles from "./RequestModal.module.css";
import { Box, Typography, Stack, Button } from "@mui/material";
import avatar from "../../assets/avatar.svg";
import CloseIcon from "@mui/icons-material/Close";
import AddEditEmp from "../../pages/Dashboard/HR/EmployeesTab/AddEditEmp";
import useLoginRegister from "../../Hooks/useLoginRegister";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

const AddEditEmpModal = ({
  handleOutsideClick,
  handleModalClose,
  selectedUser,
  isEdit,
  getEmployeeData,
  queryEmployees,
}) => {
  const {
    formData,
    isLoading,
    handleChange,
    handleRegister,
    handleUserUpdate,
    handleUserDelete,
  } = useLoginRegister(
    (isHR = true),
    getEmployeeData,
    handleModalClose,
    queryEmployees
  );

  return (
    <Box id="Outer-Modal" className={styles.modal} onClick={handleOutsideClick}>
      <Box className={styles["modal-content"]}>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <Stack
            mb={1}
            direction="column"
            alignItems="flex-start"
            sx={{ width: "100%" }}
          >
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h6"
              color="text.headingContrast"
            >
              {isEdit ? "Update Employee" : "Onboard Employee"}
            </Typography>
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="body2"
              color="primary.inactive"
            >
              {isEdit
                ? "Update Employee Details and proceed to submit"
                : "Enter employee details and proceed to add them to organization."}
            </Typography>
          </Stack>
          <CloseIcon
            onClick={handleModalClose}
            sx={{
              marginRight: 2,
              cursor: "pointer",
              color: "primary.contrast",
            }}
          />
        </Stack>
        <Stack
          gap={1}
          p={2}
          sx={{ width: "100%", height: "100%" }}
          direction={{ xs: "column", md: "row" }}
        >
          <Box sx={{ width: { xs: "100%", md: "100%" }, height: "100%" }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              gap={1}
              sx={{
                bgcolor: "primary.light",
                width: "100%",
                overflow: "hidden",
                backdropFilter: "blur(8px)",
                borderRadius: "0.6rem",
                padding: { xs: "5%", md: "2%" },
                position: "relative",
              }}
            >
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  component="img"
                  sx={{
                    bgcolor: "white",
                    height: { xs: "39%", md: "59%" },
                    width: { xs: "47%", md: "67%" },
                    borderRadius: "50%",
                    border: "4px solid white",
                  }}
                  alt="profile"
                  src={avatar}
                />
              </Stack>

              <Box sx={{ width: "100%" }}>
                <AddEditEmp
                  formData={isEdit ? selectedUser : formData}
                  handleChange={handleChange}
                  handleRegister={handleRegister}
                  handleUserUpdate={handleUserUpdate}
                  isLoading={isLoading}
                  isEdit={isEdit}
                />
              </Box>
              {isEdit && (
                <Button
                  onClick={() => handleUserDelete(selectedUser._id)}
                  startIcon={<PersonRemoveIcon />}
                  size="small"
                  variant="contained"
                  sx={{
                    fontSize: "10px",
                    position: "absolute",
                    top: 10,
                    left: 10,
                    background: " rgb(240, 188, 121)",
                    "&:hover": {
                      background: "rgb(233, 123, 106)",
                    },
                  }}
                >
                  Remove
                </Button>
              )}
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default AddEditEmpModal;
