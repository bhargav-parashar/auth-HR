import styles from "./RequestModal.module.css";
import {
  Box,
  Typography,
  Stack,
  Button,
  Paper,
  TextField,
} from "@mui/material";
import Details from "../../pages/Dashboard/Employee/HomeTab/Details";
import review from "../../assets/reviewHR.svg";
import axios from "axios";
import { useSnackbar } from "notistack";
import config from "../../config/config";
import CloseIcon from '@mui/icons-material/Close';
import format from "date-fns/format";

const RelocationModal = ({
  handleOutsideClick,
  handleModalClose,
  selectedReq,
  getPenRequests,
  getEmployeeData
}) => {
  const { enqueueSnackbar } = useSnackbar();

  reject = async () => {
    try {
      const URL = `${config.endpoint}/hr/update-relocation-status`;
      const id = selectedReq?._id;
      const res = await axios.put(
        URL,
        { id: id, newStatus: "Rejected" },
        { withCredentials: true }
      );
      if (res.status === 200) {
        getPenRequests();
        handleModalClose();
        enqueueSnackbar("Request Approved", { variant: "success" });
      }
    } catch (err) {
      console.log(err);
      enqueueSnackbar(err, { variant: "warning" });
    }
  };

  approve = async () => {
    try {
      const URL = `${config.endpoint}/hr/update-relocation-status`;
      const id = selectedReq?._id;
      const res = await axios.put(
        URL,
        { id: id, newStatus: "Approved" },
        { withCredentials: true }
      );
      if (res.status === 200) {
        const URL1 = `${config.endpoint}/hr/update-user-location`;
        const res1 = await axios.put(
          URL1,
          {
            id: selectedReq?.userDetails[0]._id,
            newLocation: selectedReq.location,
          },
          { withCredentials: true }
        );
        if (res1.status === 200) {
          getPenRequests();
          getEmployeeData();
          handleModalClose();
          enqueueSnackbar("Request Approved", { variant: "success" });
        }
      }
    } catch (err) {
      console.log(err);
      enqueueSnackbar(err, { variant: "warning" });
    }
  };

  return (
    <Box id="Outer-Modal" className={styles.modal} onClick={handleOutsideClick}>
      <Box className={styles["modal-content"]}>
      <Stack direction='row' justifyContent='space-between'  sx={{width:'100%'}} >
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
            Relocation Request
          </Typography>
          <Typography
            sx={{ fontWeight: "bold" }}
            variant="body2"
            color="primary.inactive"
          >
            {`Submitted On: ${format(selectedReq.createdAt, "PPP")} `}
          </Typography>
        </Stack>
        <CloseIcon onClick={handleModalClose} sx={{ marginRight: 2, cursor:'pointer', color:'primary.contrast' }} />
      </Stack>
        <Stack gap={1} sx={{ width: "100%", height: "100%" }} direction={{xs:'column',md:'row'}}>
          <Box sx={{ width: {xs:"100%", md:"50%"}, height: "100%" }}>
            <Details isReview isGrid user={selectedReq?.userDetails[0]} />
            <Box
              p={2}
              flex={1}
              sx={{
                height: "50%",
                borderRadius: "0.6rem",
                boxShadow:
                  " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              }}
            >
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="body2"
                color="primary.inactive"
              >
                Questionnaire
              </Typography>
              <Box
                mt={1}
                p={1}
                sx={{
                  width: "100%",
                  borderRadius: "0.6rem",
                  overflowWrap: "break-word",
                  bgcolor: "primary.dark",
                }}
              >
                <Typography
                  variant="caption"
                  fontWeight="bold"
                  color="primary.light"
                >
                  {selectedReq?.userResponses[0]?.responses[0]?.questionText}
                </Typography>
                <Typography mt={1} sx={{ display: "block" }} variant="caption">
                  {selectedReq?.userResponses[0]?.responses[0]?.response}
                </Typography>
              </Box>
              <Box
                mt={1}
                p={1}
                sx={{
                  width: "100%",
                  bgcolor: "primary.dark",
                  borderRadius: "0.6rem",
                  overflowWrap: "break-word",
                }}
              >
                <Typography
                  variant="caption"
                  fontWeight="bold"
                  color="primary.light"
                >
                  {selectedReq?.userResponses[0]?.responses[1]?.questionText}
                </Typography>
                <Typography mt={1} sx={{ display: "block" }} variant="caption">
                  {selectedReq?.userResponses[0]?.responses[1]?.response}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: {xs:"100%", md:"50%"}, height: "100%" }}>
            <Box
              p={1}
              sx={{
                height: "50%",
                minHeight: "15vh",
                width: "100%",
                borderRadius: "0.6rem",
              }}
            >
              <Stack direction="row">
                <Stack
                  justifyContent="center"
                  sx={{ width: "40%", minWidth: "100px" }}
                >
                  <Typography
                    fontWeight="bold"
                    color="primary.light"
                    variant="caption"
                    mr={1}
                  >{`Current Location`}</Typography>
                  <Typography
                    fontWeight="bold"
                    color="primary.light"
                    variant="caption"
                    mr={1}
                  >{`Requested Location`}</Typography>
                </Stack>
                <Stack justifyContent="center" sx={{ width: "10%" }}>
                  <Typography
                    fontWeight="bold"
                    color="primary.inactive"
                    variant="caption"
                    mr={1}
                  >{`:`}</Typography>
                  <Typography
                    fontWeight="bold"
                    color="primary.inactive"
                    variant="caption"
                    mr={1}
                  >{`:`}</Typography>
                </Stack>
                <Stack justifyContent="center" sx={{ width: "50%" }}>
                  <Typography variant="caption">
                    {selectedReq?.userDetails[0]?.location}
                  </Typography>
                  <Typography variant="caption">
                    {selectedReq?.location}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
            <Box
              mt={1}
              sx={{
                position: "relative",
                height: "100%",
                minHeight: "170px",
                width: "100%",
                borderRadius: "0.6rem",
              }}
            >
              <Box
                component="img"
                m={1}
                sx={{
                  position: "absolute",
                  height: "60%",
                  width: "60%",
                  bottom: "0%",
                  right: "0%",
                }}
                alt="profile"
                src={review}
              />
            </Box>
          </Box>
        </Stack>

        <Stack
          pt={6}
          px={2}
          direction="row"
          justifyContent="flex-end"
          gap={0.5}
        >
          <Button sx={{ bgcolor: "primary.inactive" }} onClick={reject}>
            Reject
          </Button>
          <Button sx={{ bgcolor: "primary.contrast" }} onClick={approve}>
            Approve
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default RelocationModal;
