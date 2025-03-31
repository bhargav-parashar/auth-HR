const router = require("express").Router();
const {
  resign,
  submitResponse,
  questionnaire,
  getResignationByUserId,
  relocate,
  getRelocationByUserId,
  relocationQuestionnaire,
  submitRelocationResponse
} = require("../controllers/user.controller");
const jwtAuthorize = require("../middlewares/authorizeJwt.middleware");
const { validateSchema } = require("../middlewares/validate.middleware");
const {
  userValidationSchema,
  responsesValidationSchema,
  relocationValidationSchema,
  relocationResponsesValidationSchema
} = require("../validations/user.validations");
const { dateValidation } = require("../middlewares/dateValidation.middleware");

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

module.exports = router;


