const User = require("../models/user.model");
const Resignation = require("../models/resignation.model");
const Role = require("../models/role.model");
const Response = require("../models/userResponse.model");
const UserRole = require("../models/userRole.model");
const Questionnaire = require("../models/questionnaire.model");
const Relocation = require("../models/relocation.model");
const RelocationQuestionnaire = require("../models/relocationQuestionnaire.model");
const RelocationResponse = require("../models/relocationResponse.model");
const Leave = require("../models/leave.model");

class UserService {
  //LOGIN & REGISTER
  create = async (payload) => {
    try {
      const newUser = await User.create(payload);
      return newUser;
    } catch (err) {
      throw err;
    }
  };

  createUserRole = async (payload) => {
    try {
      const newUserRole = await UserRole.create(payload);
    } catch (err) {
      throw err;
    }
  };

  getUserRoleMapping = async (id) => {
    try {
      const userRoleMapping = await UserRole.findOne({ userId: id });
      return userRoleMapping;
    } catch (err) {
      throw err;
    }
  };

  findByUsername = async (username) => {
    try {
      const reqUser = await User.findOne({ username });
      return reqUser;
    } catch (err) {
      throw err;
    }
  };

  findByUserId = async (userId) => {
    try {
      const user = await User.findById(userId);
      return user;
    } catch (err) {
      throw err;
    }
  };

  getRole = async (roleId) => {
    try {
      const role = await Role.findById(roleId);
      return role;
    } catch (err) {
      throw err;
    }
  };


  //RESIGNATION
  resign = async (id, lastWorkDay) => {
    try {
      const body = {
        employeeId: id,
        lwd: lastWorkDay,
      };
      const newResignation = await Resignation.create(body);
      return newResignation;
    } catch (err) {
      throw err;
    }
  };

  submitResponse = async (payload) => {
    try {
      const response = await Response.create(payload);
      return response;
    } catch (err) {
      throw err;
    }
  };

  getQuestions = async () => {
    try {
      const questions = await Questionnaire.find({});
      return questions;
    } catch (err) {
      throw err;
    }
  };

  getResignationByUserId = async (userId) =>
   await Resignation.aggregate([
      {
        $match: { employeeId: userId },
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
        $lookup: {
          from: "userresponses",
          localField: "_id",
          foreignField: "resignationId",
          as: "userResponses",
        },
      },
      {
        $project: {
          _id: 1,
          employeeId: 1,
          lwd: 1,
          status: 1,
          createdAt: 1,
          updatedAt: 1,
          userDetails: { $arrayElemAt: ["$userDetails.username", 0] },
          userResponses: { $arrayElemAt: ["$userResponses.responses", 0] },
        },
      },
    ]);

    getPendingResignationByUserId = async (userId) =>
    await  Resignation.aggregate([
        {
          $match: { employeeId: userId, status:"Pending" },
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
          $lookup: {
            from: "userresponses",
            localField: "_id",
            foreignField: "resignationId",
            as: "userResponses",
          },
        },
        {
          $project: {
            _id: 1,
            employeeId: 1,
            lwd: 1,
            status: 1,
            createdAt: 1,
            updatedAt: 1,
            userDetails: { $arrayElemAt: ["$userDetails.username", 0] },
            userResponses: { $arrayElemAt: ["$userResponses.responses", 0] },
          },
        },
      ]);

  //RELOCATION
  relocate = async (id, location) => {
    try {
      const body = {
        employeeId: id,
        location: location,
      };
      const newRelocation = await Relocation.create(body);
      return newRelocation;
    } catch (err) {
      throw err;
    }
  };

  submitRelocationResponse = async (payload) => {
    try {
      const response = await RelocationResponse.create(payload);
      return response;
    } catch (err) {
      throw err;
    }
  };

  getRelocationQuestions = async () => {
    try {
      const questions = await RelocationQuestionnaire.find({});
      return questions;
    } catch (err) {
      throw err;
    }
  };

  getRelocationByUserId = async (userId) =>
    await Relocation.aggregate([
      {
        $match: { employeeId: userId },
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
        $lookup: {
          from: "relocationresponses",
          localField: "_id",
          foreignField: "relocationId",
          as: "relocationResponses",
        },
      },
      {
        $project: {
          _id: 1,
          employeeId: 1,
          location: 1,
          status: 1,
          createdAt: 1,
          updatedAt: 1,
          userDetails: { $arrayElemAt: ["$userDetails.username", 0] },
          relocationResponses: {
            $arrayElemAt: ["$relocationResponses.responses", 0],
          },
        },
      },
    ]);

  getPendingRelocationByUserId = async (userId) =>
   await Relocation.aggregate([
      {
        $match: { employeeId: userId, status:"Pending" },
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
        $lookup: {
          from: "relocationresponses",
          localField: "_id",
          foreignField: "relocationId",
          as: "relocationResponses",
        },
      },
      {
        $project: {
          _id: 1,
          employeeId: 1,
          location: 1,
          status: 1,
          createdAt: 1,
          updatedAt: 1,
          userDetails: { $arrayElemAt: ["$userDetails.username", 0] },
          relocationResponses: {
            $arrayElemAt: ["$relocationResponses.responses", 0],
          },
        },
      },
    ]);

  //LEAVE
  leave = async (id, startDate, endDate, leaveType) => {
    try {
      const body = {
        employeeId: id,
        startDate: startDate,
        leaveType: leaveType,
        endDate: endDate,
      };
      const newLeave = await Leave.create(body);
      return newLeave;
    } catch (err) {
      throw err;
    }
  };

  updateLeaveBal = async (userId, newBal) =>{
    try{
      const newLeaveBal = await User.findOneAndUpdate(
        { _id: userId },
        { $set: { leaveBal : newBal } }, 
        { new: true }
      );
      return newLeaveBal;
    }catch(err){
      throw(err);
    }
  };

  getleavesByUserId =  async (userId) =>
   await Leave.aggregate([
      {
        $match: { employeeId: userId },
      },
      {
        $lookup: {
          from: "users",
          localField: "employeeId",
          foreignField: "_id",
          as: "userDetails"
        },
      },
      {
        $project: {
          _id: 1,
          employeeId: 1,
          leaveType: 1,
          startDate: 1,
          endDate: 1,
          status: 1,
          createdAt: 1,
          updatedAt: 1,
          userDetails: { $arrayElemAt: ["$userDetails.username", 0] }
        },
      },
    ]);
  
  getPendingleavesByUserId = async (userId) =>
   await Leave.aggregate([
      {
        $match: { employeeId: userId, status:"Pending" },
      },
      {
        $lookup: {
          from: "users",
          localField: "employeeId",
          foreignField: "_id",
          as: "userDetails"
        },
      },
      {
        $project: {
          _id: 1,
          employeeId: 1,
          leaveType: 1,
          startDate: 1,
          endDate: 1,
          status: 1,
          createdAt: 1,
          updatedAt: 1,
          userDetails: { $arrayElemAt: ["$userDetails.username", 0] }
        },
      },
    ]);

    
}

module.exports = UserService;
