const User = require("../models/user.model");
const Leaves = require("../models/leave.model");
const Relocations = require("../models/relocation.model");
const Resignations = require("../models/resignation.model");
const Announcement = require("../models/announcement.model");

class HRService {
  getAllUsers = () => {
    try {
      const users = User.aggregate([
        {
          $lookup: {
            from: "leaves",
            localField: "_id",
            foreignField: "employeeId",
            as: "leaves",
          },
        },
        {
          $lookup: {
            from: "relocations",
            localField: "_id",
            foreignField: "employeeId",
            as: "relocations",
          },
        },
        {
          $lookup: {
            from: "resignations",
            localField: "_id",
            foreignField: "employeeId",
            as: "resignations",
          },
        },
        {
          $project: {
            username: 1,
            roleId: 1,
            location: 1,
            department: 1,
            createdAt: 1,
            updatedAt: 1,
            leaveBal: 1,
            leaves: { $size: "$leaves" },
            relocations: { $size: "$relocations" },
            resignations: { $size: "$resignations" },
          },
        },
      ]);
      return users;
    } catch (err) {
      throw err;
    }
  };

  getPendingLeaves = () => {
    try {
      const pendingLeaves = Leaves.aggregate([
        {
          $match: { status: "Pending" },
        },
        {
          $lookup: {
            from: "users",
            localField: "employeeId",
            foreignField: "_id",
            as: "userDetails",
          },
        },
        {
          $project: {
            _id: 1,
            status: 1,
            startDate : 1,
            endDate : 1,
            leaveType:1,
            createdAt: 1,
            updatedAt: 1,
            userDetails: 1,
          },
        },
      ])
      return pendingLeaves;
    } catch (err) {
      throw err;
    }
  };

  getPendingRelocations = () => {
    try {
      const pendingRelocations = Relocations.find({ status: "Pending" });
      return pendingRelocations;
    } catch (err) {
      throw err;
    }
  };

  getPendingResignations = () => {
    try {
      const pendingResignations = Resignations.find({ status: "Pending" });
      return pendingResignations;
    } catch (err) {
      throw err;
    }
  };

  getCurrMonthResignations = () => {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    try {
      const currMonthResignations = Resignations.find({
        createdAt: { $gte: startOfMonth, $lt: startOfNextMonth },
      });
      return currMonthResignations;
    } catch (err) {
      throw err;
    }
  };

  createAnnouncement = (announcement) => {
    try {
      const body = {
        body: announcement,
      };
      const newAnn = Announcement.create(body);
      return newAnn;
    } catch (err) {
      throw err;
    }
  };

  getAnnouncements = () =>{
    try{
      const ann = Announcement.find().sort({ createdAt: -1 });
      return ann;
    }catch(err){
      throw err;
    }
  }

  updateAnnouncement = (id, announcement) => {
    try {
      const body = {
        body: announcement,
      };
      const updatedAnn = Announcement.findByIdAndUpdate(id, body, {
        new: true,
      });
      return updatedAnn;
    } catch (err) {
      throw err;
    }
  };

  deleteAnnouncement = (id) =>{
    try{
      const deletedAnn = Announcement.findByIdAndDelete(id, {new:true});
      return deletedAnn;
    }catch(err){
      throw err;
    }
  }

  updateLeaveBal = (id, newLeaveBal) =>{
    try{
      const updated = User.findByIdAndUpdate(
        id, 
        {$set:{leaveBal : newLeaveBal}},
        {new:true}
      );
      return updated;
    }catch(err){
      throw err;
    }
  }

  updateLeaveStatus = (id, newStatus) =>{
    try{
      const updated = Leaves.findByIdAndUpdate(
        id, 
        {$set:{status : newStatus}},
        {new:true}
      );
      return updated;
    }catch(err){
      throw err;
    }
  }
}

module.exports = HRService;
