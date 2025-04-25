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
  // LOGIN & REGISTRATION SERVICES

  // 1. CREATE USER
  create = async (payload) => {
    try {
      const newUser = await User.create(payload);
      return newUser;
    } catch (err) {
      throw err;
    }
  };

  // 2. CREATE USER ROLE MAPPING
  createUserRole = async (payload) => {
    try {
      const newUserRole = await UserRole.create(payload);
    } catch (err) {
      throw err;
    }
  };

  // 3. GET USER ROLE MAPPING
  getUserRoleMapping = async (id) => {
    try {
      const userRoleMapping = await UserRole.findOne({ userId: id });
      return userRoleMapping;
    } catch (err) {
      throw err;
    }
  };

  // 4. FIND USER BY USERNAME
  findByUsername = async (username) => {
    try {
      const reqUser = await User.findOne({ username });
      return reqUser;
    } catch (err) {
      throw err;
    }
  };


  // 5. FIND USER BY ID
  findByUserId = async (userId) => {
    try {
      const user = await User.findById(userId);
      return user;
    } catch (err) {
      throw err;
    }
  };


  // 6. GET ROLE BY ID
  getRole = async (roleId) => {
    try {
      const role = await Role.findById(roleId);
      return role;
    } catch (err) {
      throw err;
    }
  };



  // RESIGNATION SERVICES

  // 7. CREATE RESIGNATION
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

  // 8. SUBMIT RESIGNATION QUESTIONNAIRE RESPONSE
  submitResponse = async (payload) => {
    try {
      const response = await Response.create(payload);
      return response;
    } catch (err) {
      throw err;
    }
  };

  // 9. GET RESIGNATION QUESTIONNAIRE
  getQuestions = async () => {
    try {
      const questions = await Questionnaire.find({});
      return questions;
    } catch (err) {
      throw err;
    }
  };

  // 10. GET RESIGNATIONS BY USER ID
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

  // 11. GET PENDING RESIGNATION BY USER ID
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



  //RELOCATION SERVICES

  // 12. CREATE RELOCATION REQUEST
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

  // 13. CREATE RELOCATION QUESTIONNAIRE RESPONSE
  submitRelocationResponse = async (payload) => {
    try {
      const response = await RelocationResponse.create(payload);
      return response;
    } catch (err) {
      throw err;
    }
  };

  // 14. GET RELOCATION QUESTIONNAIRE
  getRelocationQuestions = async () => {
    try {
      const questions = await RelocationQuestionnaire.find({});
      return questions;
    } catch (err) {
      throw err;
    }
  };

  // 15. GET RELOCATIONS BY USER ID
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

  // 16. GET PENDING RELOCATIONS BY USER ID 
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



  // LEAVE SERVICES 

  // 17. CREATE LEAVE REQUEST
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

  // 18. UPDATE LEAVE BALANCE
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

  // 19. GET LEAVE BALANCE
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
  
  // 20. GET PENDING LEAVES BY USER ID  
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
