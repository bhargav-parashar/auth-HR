const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema(
    {
        questionId:{type:  mongoose.Schema.Types.ObjectId, required: true},
        questionText :{type : String, required: true},
        response:{type: String, maxlength: 500}
    },
    { timestamps: true }
);
const relocationSchema = new mongoose.Schema(
    {   
        userId:{type:  mongoose.Schema.Types.ObjectId, required:true},
        responses:{type: [responseSchema], default:[]}
    },
    {
        timestamps : true
    }
);

const relocationResponseModel = mongoose.model("Relocationresponse",relocationSchema );

module.exports = relocationResponseModel; 