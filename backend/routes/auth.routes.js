const router = require("express").Router();
const {register, login} = require("../controllers/auth.controller");
const {validateSchema} = require("../middlewares/validate.middleware");
const {authValidationSchema} = require("../validations/auth.validations");

router.post("/register", validateSchema(authValidationSchema), register);
router.post("/login", validateSchema(authValidationSchema), login);

module.exports = router;


