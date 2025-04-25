const router = require("express").Router();

//IMPORT CONTROLLER FUNCTIONS
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

//IMPORT MIDDLEWARES 
const jwtAuthorize = require("../middlewares/authorizeJwt.middleware");
const { validateSchema } = require("../middlewares/validate.middleware");
const validateRolePermission = require("../middlewares/validateRolePermission.middleware");

//IMPORT SCHEMA VALIDATIONS
const {annValidateSchema} = require("../validations/hr.validations");

// 1. GET ALL USER DETAILS
router.get("/all-user-details", jwtAuthorize, validateRolePermission("see-all", "users"), getAllUsers);

// 2. GET PENDING LEAVES
router.get("/pending-leaves", jwtAuthorize, validateRolePermission("see-all", "pending-leaves"), getPendingLeaves);

// 3. GET PENDING RELOCATIONS
router.get("/pending-relocations", jwtAuthorize, validateRolePermission("see-all", "pending-relocations"), getPendingRelocations);

// 4. GET PENDING RESIGNATIONS
router.get("/pending-resignations", jwtAuthorize, validateRolePermission("see-all", "pending-resignations"), getPendingResignations);

// 5. GET CURRENT MONTH RESIGNATIONS
router.get("/current-month-resignations", jwtAuthorize, validateRolePermission("see-all", "current-month-resignations"), getCurrMonthResignations);

// 6. POST ANNOUNCEMENT 
router.post("/create-announcement", jwtAuthorize, validateRolePermission("create", "announcement"), validateSchema(annValidateSchema), createAnnouncement);

// 7. GET ALL ANNOUNCEMENTS 
router.get("/announcements",jwtAuthorize, validateRolePermission("see-all", "announcement"),  getAnnouncements);

// 8. UPDATE ANNOUNCEMENT 
router.put("/update-announcement",jwtAuthorize, validateRolePermission("update", "announcement"),  updateAnnouncement);

// 9. DELETE ANNOUNCEMENT
router.delete("/delete-announcement",jwtAuthorize, validateRolePermission("delete", "announcement"), deleteAnnouncement);

// 10. UPDATE LEAVE BALANCE
router.put("/update-leave-bal",jwtAuthorize, validateRolePermission("update", "leave-balance"), updateLeaveBal);

// 11. UPDATE LEAVE STATUS
router.put("/update-leave-status",jwtAuthorize, validateRolePermission("review", "leave"), updateLeaveStatus );

// 12. UPDATE RELOCATION STATUS
router.put("/update-relocation-status",jwtAuthorize, validateRolePermission("review", "relocation"), updateRelocationStatus );

// 13. UPDATE RESIGNATION STATUS
router.put("/update-resignation-status",jwtAuthorize, validateRolePermission("review", "resignation"), updateResignationStatus );

// 14. UPDATE USER LOCATION
router.put("/update-user-location",jwtAuthorize, validateRolePermission("update", "user-location"), updateUserLocation );

// 15. UPDATE USER DETAILS
router.put("/update-user-details",jwtAuthorize, validateRolePermission("update", "user-details"), updateUser );

// 16. DELETE ALL USER DATA
router.delete("/delete-all-user-data/:userId", jwtAuthorize, validateRolePermission("delete", "user-details"),  deleteAllUserData);

module.exports = router;
