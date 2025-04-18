import styles from "./RequestModal.module.css";
import { Box, Typography, Stack } from "@mui/material";
import avatar from "../../assets/avatar.svg";
import CloseIcon from "@mui/icons-material/Close";
import AddEditEmp from "../../pages/Dashboard/HR/EmployeesTab/AddEditEmp";
import useLoginRegister from "../../Hooks/useLoginRegister";

const AddEditEmpModal = ({ handleOutsideClick, handleModalClose,selectedUser, isEdit, getEmployeeData, queryEmployees }) => {
  
  const { formData, isLoading, handleChange, handleRegister, handleUserUpdate } =  useLoginRegister(isHR=true, getEmployeeData, handleModalClose,  queryEmployees );

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
              {isEdit ? "Update Employee Details and proceed to submit" : "Enter employee details and proceed to add them to organization."}
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
              direction="row"
              sx={{
                bgcolor:'primary.light',
                width: "100%",
                overflow: "hidden",
                backdropFilter: "blur(8px)",
                borderRadius: "0.6rem",
                padding: { xs: "5%", md: "2%" },
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
                    bgcolor:'white',
                    height: "59%",
                    width: "67%",
                    borderRadius:'50%',
                    border:'4px solid white'
                  }}
                  alt="profile"
                  src={avatar}
                />
              </Stack>

              <Box sx={{ width: "100%" }}>
                <AddEditEmp
                  formData={ isEdit ? selectedUser : formData }
                  handleChange={handleChange}
                  handleRegister={handleRegister}
                  handleUserUpdate = {handleUserUpdate}
                  isLoading={isLoading}
                  isEdit={isEdit}
                />
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default AddEditEmpModal;
