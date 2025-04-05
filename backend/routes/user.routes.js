const router = require("express").Router();
const {
  leave,
  getLeavesByUserId,
  resign,
  submitResponse,
  questionnaire,
  getResignationByUserId,
  relocate,
  getRelocationByUserId,
  relocationQuestionnaire,
  submitRelocationResponse,
  userDetails,
  getRequestHistoryByUserId
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

//LEAVE
router.post(
  "/leave",
  jwtAuthorize,
  validateSchema(leaveValidationSchema),
  leave
);
router.get("/leave-applications", jwtAuthorize, getLeavesByUserId);

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



module.exports = router;


