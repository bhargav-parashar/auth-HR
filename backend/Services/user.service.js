const User = require("../models/user.model");
const Resignation = require("../models/resignation.model");
const Role = require("../models/role.model");
const Response = require("../models/userResponse.model");
const UserRole = require("../models/userRole.model");
const Questionnaire = require("../models/questionnaire.model");
const Relocation = require("../models/relocation.model");
const RelocationQuestionnaire = require("../models/relocationQuestionnaire.model");
const RelocationResponse = require("../models/relocationResponse.model");

class UserService{
    create =  (payload) =>{
        try{
            const newUser = User.create(payload);
            return newUser;
        }catch(err){
            throw err;
        }
    };

    createUserRole = (payload) =>{
        try{
            const newUserRole = UserRole.create(payload);
        }catch(err){
            throw err;
        }
    };

    getUserRoleMapping = (id) =>{
        try{
            const userRoleMapping = UserRole.findOne({userId : id });
            return userRoleMapping;
        }catch(err){
           
            throw err;
        }
    }

    findByUsername =  (username) =>{
        try{
            const reqUser = User.findOne({username});
            return reqUser;
        }catch(err){
            throw err;
        }
    };
        
    resign = async (id, lastWorkDay) =>{
        try{
            const body = {
                employeeId : id,
                lwd : lastWorkDay
                
            };
            const newResignation = Resignation.create(body);
            return newResignation;
        }catch(err){
            throw err;
        }
    };

    relocate = async (id, location) =>{
        try{
            const body = {
                employeeId : id,
                location : location
            };
            const newRelocation = Relocation.create(body);
            return newRelocation;
        }catch(err){
            throw err;
        }
    }
    
    findByUserId =  (userId) =>{
        try{
            const user =  User.findById(userId);
            return user;
        }catch(err){
            throw err;
        }
    };

    getRole = (roleId) =>{
        try{
            const role = Role.findById(roleId);
            return role;
        }catch(err){
            throw err;
        }
    };

    submitResponse = (payload) =>{
        try{
            const response = Response.create(payload);
            return response;
        } catch(err){
            throw err;
        }
    };

    submitRelocationResponse = (payload) =>{
        try{
            const response = RelocationResponse.create(payload);
            return response;
        } catch(err){
            throw err;
        }
    };

    getQuestions = () =>{
        try{
            const questions = Questionnaire.find({});
            return questions;
        }catch(err){
            throw err;
        }
    };

    getRelocationQuestions = () =>{
        try{
            const questions = RelocationQuestionnaire.find({});
            return questions;
        }catch(err){
            throw err;
        }
    };
    
    getResignationByUserId = (userId) => Resignation.aggregate([
        {
            $match:{employeeId:userId}
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
            $lookup: {
              from: "userresponses",
              localField: "employeeId",
              foreignField: "userId",
              as: "userResponses"
            },
        },
        {
            $project: {
            _id:1,
            employeeId:1,
            lwd:1,
            status:1,
            createdAt:1,
            updatedAt:1,
            userDetails: { $arrayElemAt: ["$userDetails.username", 0] },
            userResponses: { $arrayElemAt: ["$userResponses.responses", 0] }
          }
        }
    ]);

    getRelocationByUserId = (userId) => Relocation.aggregate([
        {
            $match:{employeeId:userId}
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
            $lookup: {
              from: "relocationresponses",
              localField: "employeeId",
              foreignField: "userId",
              as: "relocationResponses"
            },
        },
        {
            $project: {
            _id:1,
            employeeId:1,
            lwd:1,
            status:1,
            createdAt:1,
            updatedAt:1,
            userDetails: { $arrayElemAt: ["$userDetails.username", 0] },
            relocationResponses: { $arrayElemAt: ["$relocationResponses.responses", 0] }
          }
        }
    ]);
        
}

module.exports = UserService;