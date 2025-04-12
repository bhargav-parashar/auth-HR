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
  deleteAnnouncement
} = require("../controllers/hr.controller");
const jwtAuthorize = require("../middlewares/authorizeJwt.middleware");

//ALL USER DETAILS
router.get("/all-user-details", jwtAuthorize, getAllUsers);

//PENDING LEAVES
router.get("/pending-leaves", jwtAuthorize, getPendingLeaves);

//PENDING RELOCATIONS
router.get("/pending-relocations", jwtAuthorize, getPendingRelocations);

//PENDING RESIGNATIONS
router.get("/pending-resignations", jwtAuthorize, getPendingResignations);

//CURRENT MONTH RESIGNATIONS
router.get("/current-month-resignations", jwtAuthorize, getCurrMonthResignations);

//CREATE ANNOUNCEMENT 
router.post("/create-announcement", jwtAuthorize, createAnnouncement);

//GET ALL ANNOUNCEMENTS 
router.get("/announcements",  getAnnouncements);

//UPDATE ANNOUNCEMENT 
router.put("/update-announcement",  updateAnnouncement);

//DELETE ANNOUNCEMENT
router.delete("/delete-announcement", deleteAnnouncement);

module.exports = router;
