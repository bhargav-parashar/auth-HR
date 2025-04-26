import { useState } from "react";
import { Stack, Box } from "@mui/material";
import PendingRequestsSection from "./PendingRequestsSection";
import CalendarSection from "./CalendarSection";
import CreateAnnouncement from "./CreateAnnouncement";
import InfoCardSection from "./InfoCardSection";
import useGetPendingRequests from "../../../../Hooks/useGetPendingRequests";
import useModal from "../../../../Hooks/useModal";
import LeaveModal from "../../../../components/Modal/LeaveModal";
import RelocationModal from "../../../../components/Modal/RelocationModal";
import ResignationModal from "../../../../components/Modal/ResignationModal";
import LeavesGrid from "./LeavesGrid";
import RelocationsGrid from "./RelocationsGrid";
import ResignationsGrid from "./ResignationsGrid";

const AdminHome = ({
  totalEmployees,
  avgLeaveBal,
  attrition,
  currMonthHires,
  isLoading,
  getEmployeeData 
}) => {
  const [selectedReqTab, setSelectedReqTab] = useState("");
  const [selectedReq, setSelectedReq] = useState("");
  const { isReqLoading, penRequests, getPenRequests } = useGetPendingRequests();
  const { handleModalOpen, handleModalClose, handleOutsideClick, isModalOpen } = useModal();
  
  handleBack = () => {
    setSelectedReqTab("");
  };

  const handleLeaveReview = (id) => {
    const leaves = penRequests?.leaves;
    const selectedRequest = leaves.find((item) => item._id === id);
    setSelectedReq(selectedRequest);
    handleModalOpen();
  };

  const handleRelocationReview = (id) => {
    const relocations = penRequests?.relocations;
    const selectedRequest = relocations.find((item) => item._id === id);
    setSelectedReq(selectedRequest);
    handleModalOpen();
  };

 const handleResignationReview = (id) => {
    const resignations = penRequests?.resignations;
    const selectedRequest = resignations.find((item) => item._id === id);
    setSelectedReq(selectedRequest);
    handleModalOpen();
  };

  return (
    <Box
      sx={{
        height: "100%",
        paddingX: 2,
        overflowY: {xs:'auto', md:'clip'} 
      }}
    >
      <Box sx={{ height: "70%" }}>
        <Box sx={{ width: "100%", display: { xs: "block", md: "none" } }}>
          <PendingRequestsSection
            selectedReqTab={selectedReqTab}
            setSelectedReqTab={setSelectedReqTab}
            isLoading={isReqLoading}
            penRequests={penRequests}
            isMobile
          />
        </Box>
        <Box sx={{ width: "100%", display: { xs: "none", md: "block" } }}>
          <PendingRequestsSection
            selectedReqTab={selectedReqTab}
            setSelectedReqTab={setSelectedReqTab}
            isLoading={isReqLoading}
            penRequests={penRequests}
          />
        </Box>
        {selectedReqTab.length === 0 && (
          <Stack
            mb={2}
            gap={1}
            direction={{ xs: "column", md: "row" }}
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
        {selectedReqTab.length != 0 && selectedReqTab === "Leaves" && (
          <LeavesGrid
            handleBack={handleBack}
            selectedReqTab={selectedReqTab}
            penRequests={penRequests}
            handleLeaveReview={handleLeaveReview}
            isMobile={{xs:true,md:false}}
          />
        )}
        {selectedReqTab.length != 0 && selectedReqTab === "Relocations" && (
          <RelocationsGrid
            handleBack={handleBack}
            selectedReqTab={selectedReqTab}
            penRequests={penRequests}
            handleRelocationReview={handleRelocationReview}
            isMobile={{xs:true,md:false}}
          />
        )}
        {selectedReqTab.length != 0 && selectedReqTab === "Resignations" && (
          <ResignationsGrid
            handleBack={handleBack}
            selectedReqTab={selectedReqTab}
            penRequests={penRequests}
            handleResignationReview={handleResignationReview}
          />
        )}
      </Box>

      {isModalOpen && selectedReqTab === "Leaves" && (
        <LeaveModal
          handleOutsideClick={handleOutsideClick}
          handleModalClose={handleModalClose}
          selectedReq={selectedReq}
          getPenRequests={getPenRequests}
        />
      )}
      {isModalOpen && selectedReqTab === "Relocations" && (
        <RelocationModal
          handleOutsideClick={handleOutsideClick}
          handleModalClose={handleModalClose}
          selectedReq={selectedReq}
          getPenRequests={getPenRequests}
          getEmployeeData={getEmployeeData}
        />
      )}
      {isModalOpen && selectedReqTab === "Resignations" && (
        <ResignationModal
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
