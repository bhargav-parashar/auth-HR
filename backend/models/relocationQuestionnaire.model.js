const mongoose = require("mongoose");

const relocationQuestionnaireSchema = new mongoose.Schema(
    {
        question: {type: String, required : true }
    },
    {
        timestamps: true
    }
)

const relocationQuestionnaireModel = mongoose.model("RelocationQuestionnaire",relocationQuestionnaireSchema,"relocationquestionnaire");

module.exports = relocationQuestionnaireModel;