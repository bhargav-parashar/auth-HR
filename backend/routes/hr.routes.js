const router = require("express").Router();
const {getAllUsers} = require("../controllers/hr.controller");
const jwtAuthorize = require("../middlewares/authorizeJwt.middleware");

//ALL USER DETAILS
router.get("/all-user-details",jwtAuthorize, getAllUsers);

module.exports = router;