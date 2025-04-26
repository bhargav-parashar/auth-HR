import * as styles from "./RequestModal.module.css";
import {
  Box,
  Typography,
  Stack,
  Button
} from "@mui/material";
import Details from "../../pages/Dashboard/Employee/HomeTab/Details";
import LeaveBal from "../../pages/Dashboard/Employee/HomeTab/LeaveBal";
import addDays from "date-fns/addDays";
import format from "date-fns/format";
import formatDistance from "date-fns/formatDistance";
import differenceInDays from "date-fns/differenceInDays";
import review from "../../assets/reviewHR.svg";
import axios from "axios";
import { useSnackbar } from "notistack";
import config from "../../config/config";
import CloseIcon from '@mui/icons-material/Close';


const LeaveModal = ({
  handleOutsideClick,
  handleModalClose,
  handleSubmit,
  selectedReq,
  getPenRequests
}) => {
  const { enqueueSnackbar } = useSnackbar();

  const reject = async (balanceObject) => {
    try {
      const URL = `${config.endpoint}/hr/update-leave-status`;
      const id = selectedReq?._id;
      const res = await axios.put(
        URL,
        { id: id, newStatus: "Rejected" },
        { withCredentials: true }
      );
      if (res.status === 200) {
        const URL1 = `${config.endpoint}/hr/update-leave-bal`;
        const id = selectedReq?.userDetails[0]?._id;
        const updated = await axios.put(
          URL1,
          { id: id, newLeaveBal: balanceObject },
          { withCredentials: true }
        );
        if (updated.status === 200) {
          getPenRequests();
          handleModalClose();
          enqueueSnackbar("Request Rejected", { variant: "success" });
        }
      }
    } catch (err) {
      console.log(err);
      enqueueSnackbar(err, { variant: "warning" });
    }
    
  };

  const approve = async () => {
    try {
        const URL = `${config.endpoint}/hr/update-leave-status`;
        const id = selectedReq?._id;
        const res = await axios.put(
          URL,
          { id: id, newStatus: "Approved" },
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

  const handleClose = () => {
    //Add duration number of days back to the type of leave for the specific user
    const balanceObject = selectedReq?.userDetails[0]?.leaveBal;
    const lt = selectedReq.leaveType;
    const category =
      lt === "Casual Leave"
        ? "casual"
        : lt === "Sick Leave"
        ? "sick"
        : lt === "Earned Leave"
        ? "earned"
        : "casual";
    const oldBal = balanceObject[category];
    const difference = differenceInDays(
      addDays(selectedReq.endDate, 1),
      selectedReq.startDate
    );
    const newBal = oldBal + difference;
    balanceObject[category] = newBal;
    reject(balanceObject);
  };

  const handleApprove = () =>{
    approve();
  }

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
              {selectedReq.leaveType}
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
        
        <Stack gap={1} sx={{ width: "100%", height: "100%" }} direction={{xs:'columnn', md:'row'}}>
          <Box sx={{ width:{xs:"100%", md:"50%"} , height: "100%" }}>
            <Details isReview isGrid user={selectedReq?.userDetails[0]} />
            <LeaveBal lable="Employee's new leave balance after approval"  isReview user={selectedReq?.userDetails[0]} />
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
                <Stack justifyContent="center" sx={{ minWidth: "100px" }}>
                  <Typography
                    fontWeight="bold"
                    color="primary.light"
                    variant="caption"
                    mr={1}
                  >{`Start Date`}</Typography>
                  <Typography
                    fontWeight="bold"
                    color="primary.light"
                    variant="caption"
                    mr={1}
                  >{`End Date`}</Typography>
                  <Typography
                    fontWeight="bold"
                    color="primary.light"
                    variant="caption"
                    mr={1}
                  >{`Duration`}</Typography>
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
                  <Typography
                    fontWeight="bold"
                    color="primary.inactive"
                    variant="caption"
                    mr={1}
                  >{`:`}</Typography>
                </Stack>
                <Stack justifyContent="center" sx={{ width: "100%" }}>
                  <Typography variant="caption">
                    {format(selectedReq?.startDate, "PPP")}
                  </Typography>
                  <Typography variant="caption">
                    {format(selectedReq?.endDate, "PPP")}
                  </Typography>
                  <Typography variant="caption">
                    {formatDistance(
                      selectedReq?.startDate,
                      addDays(selectedReq?.endDate, 1)
                    )}
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
          <Button sx={{ bgcolor: "primary.inactive" }} onClick={handleClose}>
            Reject
          </Button>
          <Button
            sx={{ bgcolor: "primary.contrast" }}
            onClick={handleApprove}
          >
            Approve
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default LeaveModal;
