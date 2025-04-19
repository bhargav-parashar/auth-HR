const router = require("express").Router();
const {
  getAllUsers,
  getPendingLeaves,
  getPendingRelocations,
  getPendingResignations,
  getCurrMonthResignations,
  createAnnouncement,
  getAnnouncements,
  updateAnnouncement,
  deleteAnnouncement,
  updateLeaveBal,
  updateLeaveStatus,
  updateRelocationStatus,
  updateResignationStatus,
  updateUserLocation,
  updateUser,
  deleteAllUserData
} = require("../controllers/hr.controller");
const jwtAuthorize = require("../middlewares/authorizeJwt.middleware");
const { validateSchema } = require("../middlewares/validate.middleware");
const {annValidateSchema} = require("../validations/hr.validations");

//GET ALL USER DETAILS
router.get("/all-user-details", jwtAuthorize, getAllUsers);

//GET PENDING LEAVES
router.get("/pending-leaves", jwtAuthorize, getPendingLeaves);

//GET PENDING RELOCATIONS
router.get("/pending-relocations", jwtAuthorize, getPendingRelocations);

//GET PENDING RESIGNATIONS
router.get("/pending-resignations", jwtAuthorize, getPendingResignations);

//GET CURRENT MONTH RESIGNATIONS
router.get("/current-month-resignations", jwtAuthorize, getCurrMonthResignations);

//POST ANNOUNCEMENT 
router.post("/create-announcement", jwtAuthorize, validateSchema(annValidateSchema), createAnnouncement);

//GET ALL ANNOUNCEMENTS 
router.get("/announcements",jwtAuthorize,  getAnnouncements);

//UPDATE ANNOUNCEMENT 
router.put("/update-announcement",jwtAuthorize,  updateAnnouncement);

//DELETE ANNOUNCEMENT
router.delete("/delete-announcement",jwtAuthorize, deleteAnnouncement);

//UPDATE LEAVE BALANCE
router.put("/update-leave-bal",jwtAuthorize, updateLeaveBal);

//UPDATE LEAVE STATUS
router.put("/update-leave-status",jwtAuthorize, updateLeaveStatus );

//UPDATE RELOCATION STATUS
router.put("/update-relocation-status",jwtAuthorize, updateRelocationStatus );

//UPDATE RESIGNATION STATUS
router.put("/update-resignation-status",jwtAuthorize, updateResignationStatus );

//UPDATE USER LOCATION
router.put("/update-user-location",jwtAuthorize, updateUserLocation );

//UPDATE USER DETAILS
router.put("/update-user-details",jwtAuthorize, updateUser );

//DELETE ALL USER DATA
router.delete("/delete-all-user-data/:userId", jwtAuthorize, deleteAllUserData)

module.exports = router;
