const router = require("express").Router();
const {register} = require("../controllers/auth.controller");
const {validateSchema} = require("../middlewares/validate.middleware");
const {authValidationSchema} = require("../validations/auth.validations");

router.post("/register", validateSchema(authValidationSchema), register);

module.exports = router;


