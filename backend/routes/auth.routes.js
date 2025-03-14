const router = require("express").Router();
const {register, login} = require("../controllers/auth.controller");
const {validateSchema} = require("../middlewares/validate.middleware");
const { registerValidationSchema, loginValidationSchema} = require("../validations/auth.validations");

router.post("/register", validateSchema(registerValidationSchema), register);
router.post("/login", validateSchema(loginValidationSchema), login);

module.exports = router;


