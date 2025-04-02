const Joi = require("joi");
//LEAVE
const leaveValidationSchema = Joi.object().keys({
  startDate: Joi.string(),
  endDate: Joi.string(),
  leaveType: Joi.string(),
});

//RESIGNATION
const userValidationSchema = Joi.object().keys({
  lwd: Joi.string(),
});

const responseValidationSchema = Joi.object().keys({
  questionId: Joi.string(),
  questionText: Joi.string(),
  response: Joi.string(),
});
const responsesValidationSchema = Joi.object().keys({
  userId: Joi.string(),
  responses: Joi.array().items(responseValidationSchema),
});

//RELOCATION
const relocationValidationSchema = Joi.object().keys({
  location: Joi.string(),
});
const relocationResponseValidationSchema = Joi.object().keys({
  questionId: Joi.string(),
  questionText: Joi.string(),
  response: Joi.string(),
});
const relocationResponsesValidationSchema = Joi.object().keys({
  userId: Joi.string(),
  responses: Joi.array().items(relocationResponseValidationSchema),
});

module.exports = {
  userValidationSchema,
  responsesValidationSchema,
  relocationValidationSchema,
  relocationResponsesValidationSchema,
  leaveValidationSchema
};
