const router = require("express").Router();

//IMPORT CONTROLLER FUNCTIONS
const {
  leave,
  getLeavesByUserId,
  getPendingLeavesByUserId,
  resign,
  submitResponse,
  questionnaire,
  getResignationByUserId,
  getPendingResignationByUserId,
  relocate,
  getRelocationByUserId,
  getPendingRelocationByUserId,
  relocationQuestionnaire,
  submitRelocationResponse,
  userDetails,
  getRequestHistoryByUserId,
  getLeaveBalByUserId,
  updateLeaveBal
} = require("../controllers/user.controller");

// IMPORT MIDDLEWARES
const jwtAuthorize = require("../middlewares/authorizeJwt.middleware");
const { validateSchema } = require("../middlewares/validate.middleware");
const validateRolePermission = require("../middlewares/validateRolePermission.middleware");
const { dateValidation } = require("../middlewares/dateValidation.middleware");

//IMPORT SCHEMA VALIDATIONS
const {
  userValidationSchema,
  responsesValidationSchema,
  relocationValidationSchema,
  relocationResponsesValidationSchema,
  leaveValidationSchema
} = require("../validations/user.validations");


// 1. GET USER DETAILS
router.get("/details",jwtAuthorize,userDetails);

// 2. GET USER REQUEST HISTORY
router.get("/request-history",jwtAuthorize,getRequestHistoryByUserId);

// 3. GET USER LEAVE BALANCE
router.get("/leaveBal",jwtAuthorize, getLeaveBalByUserId);

// 4. UPDATE USER LEAVE BALANACE
router.post("/updateLeaveBal", jwtAuthorize, validateRolePermission("update", "leave-balance"), updateLeaveBal );

// 5. CREATE LEAVE REQUEST
router.post(
  "/leave",
  jwtAuthorize,
  validateRolePermission("submit", "leave"),
  validateSchema(leaveValidationSchema),
  leave
);

// 6. GET LEAVES BY USER ID
router.get("/leave-applications", jwtAuthorize, getLeavesByUserId);

// 7. GET PENDING LEAVES BY USER ID
router.get("/pending-leave-applications", jwtAuthorize, getPendingLeavesByUserId);

// 8. CREATE RELOCATION REQUEST
router.post(
  "/relocate",
  jwtAuthorize,
  validateRolePermission("submit", "relocation"),
  validateSchema(relocationValidationSchema),
  relocate
);

// 9. CREATE RELOCATION QUESTIONNAIRE RESPONSE
router.post(
    "/relocationresponses",
    jwtAuthorize,
    validateRolePermission("submit", "relocation-response"),
    validateSchema(relocationResponsesValidationSchema),
    submitRelocationResponse
  );

// 10. GET RELOCATION QUESTIONNAIRE
router.get("/relocationquestionnaire", relocationQuestionnaire);

// 11. GET RELOCATIONS BY USER ID
router.get("/relocation", jwtAuthorize, getRelocationByUserId);

// 12. GET PENDING RELOCATIONS BY USER ID
router.get("/pending-relocation", jwtAuthorize, getPendingRelocationByUserId);


// 13. CREATE RESIGNATION REQUEST
router.post(
  "/resign",
  jwtAuthorize,
  validateRolePermission("submit", "resignation"),
  validateSchema(userValidationSchema),
  dateValidation,
  resign
);

// 14. CREATE RESIGNATION QUESTIONNAIRE RESPONSE
router.post(
  "/responses",
  jwtAuthorize,
  validateRolePermission("submit", "resignation-response"),
  validateSchema(responsesValidationSchema),
  submitResponse
);

// 15. GET RESIGNATION QUESTIONNAIRE
router.get("/questionnaire", questionnaire);

// 16. GET RESIGNATION BY USER ID
router.get("/resignation", jwtAuthorize, getResignationByUserId);

// 17. GET PENDING RESIGNATION BY USER ID
router.get("/pending-resignation", jwtAuthorize, getPendingResignationByUserId);



module.exports = router;


