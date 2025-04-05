const mongoose = require("mongoose");
const  { ObjectId } = require ('mongodb');

const leaveSchema = new mongoose.Schema(
    {
        earned:{type: Number},
        sick :{type : Number},
        casual:{type: Number}
    },
    { timestamps: false, _id:false }
);

const userSchema = new mongoose.Schema(
    {
        username : { type: String, unique: true, required: true },
        password : { type : String, required : true},
        department : {type : String, required : true},
        location : {type : String, required : true},
        roleId : {type:  mongoose.Schema.Types.ObjectId, default :new ObjectId("67a4e1b8f087e933ca2a02b4")},
        leaveBal : {type : leaveSchema, default: () => ({ earned: 10, sick: 10, casual: 10 })}
    },
    {
        timestamps : true
    }
);

const userModel = mongoose.model("User",userSchema);

module.exports = userModel; 

