import { useState } from "react";
import { Stack, Box, Typography, Button, Paper } from "@mui/material";
import PendingRequestsSection from "./PendingRequestsSection";
import CalendarSection from "./CalendarSection";
import CreateAnnouncement from "./CreateAnnouncement";
import InfoCardSection from "./InfoCardSection";
import useGetPendingRequests from "../../../../Hooks/useGetPendingRequests";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { format, formatDistance, addDays } from "date-fns";
import useModal from "../../../../Hooks/useModal";
import RequestsModal from "../../../../components/Modal/RequestsModal";

const AdminHome = ({
  totalEmployees,
  avgLeaveBal,
  attrition,
  currMonthHires,
  isLoading,
}) => {
  const [selectedReqTab, setSelectedReqTab] = useState("");
  const [selectedReq, setSelectedReq] = useState("");
  const { isReqLoading, penRequests,getPenRequests } = useGetPendingRequests();
  const { handleModalOpen, handleModalClose, handleOutsideClick, isModalOpen } =
    useModal();

  handleBack = () => {
    setSelectedReqTab("");
  };

  handleReview = (id) =>{
    const leaves = penRequests?.leaves;
    const selectedRequest = leaves.find((item)=>item._id === id);
    setSelectedReq(selectedRequest);
    handleModalOpen();
  }
  
  return (
    <Box
      sx={{
        height: "100%",
        overflowY: "auto",
        paddingX: 2,
      }}
    >
      <Box sx={{ height: "70%", display: { xs: "none", md: "block" } }}>
        <PendingRequestsSection
          setSelectedReqTab={setSelectedReqTab}
          isLoading={isReqLoading}
          penRequests={penRequests}
        />
        {selectedReqTab.length === 0 && (
          <Stack
            mb={2}
            gap={1}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100%", height: "100%" }}
          >
            <InfoCardSection
              totalEmployees={totalEmployees}
              avgLeaveBal={avgLeaveBal}
              attrition={attrition}
              currMonthHires={currMonthHires}
              isLoading={isLoading}
            />
            <CalendarSection isLoading={isLoading} />
            <CreateAnnouncement isLoading={isLoading} />
          </Stack>
        )}
        {selectedReqTab.length != 0 && (
          <Stack
            mb={2}
            gap={1}
            direction="column"
            alignItems="space-between"
            justifyContent="flex-start"
            sx={{
              width: "100%",
              height: "100%",
              border: "2px solid white",
              borderRadius: "0.6rem",
            }}
          >
            <Stack p={1} gap={2} direction="row" sx={{ width: "100%" }}>
              <Button
                onClick={handleBack}
                size="small"
                sx={{
                  "&:hover": {
                    backgroundColor: "secondary.dark",
                  },
                }}
              >
                {`< Home `}
              </Button>
              <Typography variant="h6">{`Pending ${selectedReqTab}`}</Typography>
            </Stack>
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
                  <TableRow>
                    <TableCell align="left">Sl No</TableCell>
                    <TableCell align="left">Leave Type</TableCell>
                    <TableCell align="left">Duration</TableCell>
                    <TableCell align="left">Requested By</TableCell>
                    <TableCell align="left">Requested On</TableCell>
                    <TableCell align="left">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody key={1}>
                  {penRequests.leaves &&
                    penRequests.leaves.length > 0 &&
                    penRequests.leaves.map((item, idx) => (
                      <TableRow
                        key={item.id || `leave-${idx}`}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="left">{idx + 1}</TableCell>
                        <TableCell align="left">{item.leaveType}</TableCell>
                        <TableCell align="left">
                          {formatDistance(
                            item.startDate,
                            addDays(item.endDate, 1)
                          )}
                        </TableCell>
                        <TableCell align="left">{item?.userDetails[0]?.username}</TableCell>
                        <TableCell align="left">
                          {format(item.createdAt, "PPP")}
                        </TableCell>
                        <TableCell align="left">
                          <Button
                            onClick={()=>handleReview(item._id)}
                            sx={{
                              "&:hover": {
                                backgroundColor: "secondary.dark",
                              },
                            }}
                            size="small"
                          >
                            Review
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        )}
      </Box>
      {isModalOpen && (
        <RequestsModal
          handleOutsideClick={handleOutsideClick}
          handleModalClose={handleModalClose}
          selectedReq={selectedReq}
          getPenRequests={getPenRequests}
        />
      )}
    </Box>
  );
};

export default AdminHome;
