const Joi = require('joi');

//ANNOUNCEMENT
const annValidateSchema = Joi.object().keys({
    body : Joi.string()
});

module.exports = {annValidateSchema};