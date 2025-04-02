const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema(
    {
        employeeId:{type: mongoose.Schema.Types.ObjectId},
        startDate:{ type : String, required : true},
        endDate:{ type : String},
        leaveType:{ type : String, required : true},
        status : {type : String, default : "Pending"}
    },
    {
        timestamps:true
    }

);

const leaveModel = mongoose.model("Leave",leaveSchema);

module.exports = leaveModel;