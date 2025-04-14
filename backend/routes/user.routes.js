const router = require("express").Router();
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
const jwtAuthorize = require("../middlewares/authorizeJwt.middleware");
const { validateSchema } = require("../middlewares/validate.middleware");
const {
  userValidationSchema,
  responsesValidationSchema,
  relocationValidationSchema,
  relocationResponsesValidationSchema,
  leaveValidationSchema
} = require("../validations/user.validations");
const { dateValidation } = require("../middlewares/dateValidation.middleware");

//USER DETAILS
router.get("/details",jwtAuthorize,userDetails);
router.get("/request-history",jwtAuthorize,getRequestHistoryByUserId);
router.get("/leaveBal",jwtAuthorize, getLeaveBalByUserId);
router.post("/updateLeaveBal",jwtAuthorize,updateLeaveBal );

//LEAVE
router.post(
  "/leave",
  jwtAuthorize,
  validateSchema(leaveValidationSchema),
  leave
);
router.get("/leave-applications", jwtAuthorize, getLeavesByUserId);
router.get("/pending-leave-applications", jwtAuthorize, getPendingLeavesByUserId);

//RELOCATION
router.post(
  "/relocate",
  jwtAuthorize,
  validateSchema(relocationValidationSchema),
  relocate
);
router.post(
    "/relocationresponses",
    jwtAuthorize,
    validateSchema(relocationResponsesValidationSchema),
    submitRelocationResponse
  );
router.get("/relocationquestionnaire", relocationQuestionnaire);
router.get("/relocation", jwtAuthorize, getRelocationByUserId);
router.get("/pending-relocation", jwtAuthorize, getPendingRelocationByUserId);

//RESIGNATION
router.post(
  "/resign",
  jwtAuthorize,
  validateSchema(userValidationSchema),
  dateValidation,
  resign
);
router.post(
  "/responses",
  jwtAuthorize,
  validateSchema(responsesValidationSchema),
  submitResponse
);
router.get("/questionnaire", questionnaire);
router.get("/resignation", jwtAuthorize, getResignationByUserId);
router.get("/pending-resignation", jwtAuthorize, getPendingResignationByUserId);



module.exports = router;


