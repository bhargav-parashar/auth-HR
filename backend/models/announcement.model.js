const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema(
    {
        body:{type : String, required : true}
    },
    {
        timestamps:true
    }

);

const announcementModel = mongoose.model("Announcement",announcementSchema);

module.exports = announcementModel;