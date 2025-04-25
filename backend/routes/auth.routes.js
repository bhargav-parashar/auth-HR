const router = require("express").Router();
const {register, login, logout,loginstatus} = require("../controllers/auth.controller");
const {validateSchema} = require("../middlewares/validate.middleware");
const { registerValidationSchema, loginValidationSchema} = require("../validations/auth.validations");
const jwtAuthorize = require("../middlewares/authorizeJwt.middleware");

// 1. REGISTER NEW USER
router.post("/register", validateSchema(registerValidationSchema), register);

// 2. LOGIN USER
router.post("/login", validateSchema(loginValidationSchema), login);

// 3. LOGOUT USER
router.post("/logout", logout );

// 4. CHECK USER LOGIN STATUS
router.post("/loginstatus",jwtAuthorize,loginstatus);

module.exports = router;


