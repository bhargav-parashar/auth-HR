const mongoose = require("mongoose");

const relocationSchema = new mongoose.Schema(
    {
        employeeId:{type: mongoose.Schema.Types.ObjectId},
        location:{ type : String, required : true},
        status : {type : String, default : "Pending"}
    },
    {
        timestamps:true
    }

);

const relocationModel = mongoose.model("Relocation",relocationSchema);

module.exports = relocationModel;