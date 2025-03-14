const Joi = require("joi");

const registerValidationSchema = Joi.object().keys({
    username: Joi.string().default("").max(50),
    password: Joi.string().required(),
    department: Joi.string().required()   
});

const loginValidationSchema = Joi.object().keys({
    username: Joi.string().default("").max(50),
    password: Joi.string().required()  
});


module.exports = {registerValidationSchema,loginValidationSchema};