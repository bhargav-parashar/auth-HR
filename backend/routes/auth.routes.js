const router = require("express").Router();
const {register, login, logout,loginstatus} = require("../controllers/auth.controller");
const {validateSchema} = require("../middlewares/validate.middleware");
const { registerValidationSchema, loginValidationSchema} = require("../validations/auth.validations");
const jwtAuthorize = require("../middlewares/authorizeJwt.middleware");

router.post("/register", validateSchema(registerValidationSchema), register);
router.post("/login", validateSchema(loginValidationSchema), login);
router.post("/logout", logout );
router.post("/loginstatus",jwtAuthorize,loginstatus);

module.exports = router;


