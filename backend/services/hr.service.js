const User = require("../models/user.model");
const UserRole = require("../models/userRole.model");
const Leaves = require("../models/leave.model");
const Relocations = require("../models/relocation.model");
const RelocationResp = require("../models/relocationResponse.model");
const Resignations = require("../models/resignation.model");
const ResignationResp = require("../models/userResponse.model");
const Announcement = require("../models/announcement.model");
const RolePermission = require("../models/rolePermission.model");
const Permission = require("../models/permission.model");

class HRService {

  //ANALYTICS SERVICES

  // 1. GET ALL USERS
  getAllUsers = async () => {
    try {
      const users = await User.aggregate([
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

  // 2. GET PENDING LEAVES
  getPendingLeaves = async () => {
    try {
      const pendingLeaves = await Leaves.aggregate([
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
            startDate: 1,
            endDate: 1,
            leaveType: 1,
            createdAt: 1,
            updatedAt: 1,
            userDetails: 1,
          },
        },
      ]);
      return pendingLeaves;
    } catch (err) {
      throw err;
    }
  };

  // 3. GET PENDING RELOCATIONS
  getPendingRelocations = async () => {
    try {
      const pendingRelocations = await Relocations.aggregate([
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
          $lookup: {
            from: "relocationresponses",
            localField: "_id",
            foreignField: "relocationId",
            as: "userResponses",
          },
        },
        {
          $project: {
            _id: 1,
            status: 1,
            location: 1,
            createdAt: 1,
            updatedAt: 1,
            userDetails: 1,
            userResponses: 1,
          },
        },
      ]);
      return pendingRelocations;
    } catch (err) {
      throw err;
    }
  };

  // 4. GET PENDING RESIGNATIONS
  getPendingResignations = async () => {
    try {
      const pendingResignations = await Resignations.aggregate([
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
            status: 1,
            lwd: 1,
            createdAt: 1,
            updatedAt: 1,
            userDetails: 1,
            userResponses: 1,
          },
        },
      ]);
      return pendingResignations;
    } catch (err) {
      throw err;
    }
  };

  // 5. GET CURRENT MONTH RESIGNATIONS
  getCurrMonthResignations = async () => {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    try {
      const currMonthResignations = await Resignations.find({
        createdAt: { $gte: startOfMonth, $lt: startOfNextMonth },
      });
      return currMonthResignations;
    } catch (err) {
      throw err;
    }
  };



  //ANNOUONCEMENT SERVICES

  // 6. CREATE ANNOUNCEMENT
  createAnnouncement = async (announcement) => {
    try {
      const body = {
        body: announcement,
      };
      const newAnn = await Announcement.create(body);
      return newAnn;
    } catch (err) {
      throw err;
    }
  };

  // 7. GET ANNOUNCEMENTS
  getAnnouncements = async () => {
    try {
      const ann = await Announcement.find().sort({ createdAt: -1 });
      return ann;
    } catch (err) {
      throw err;
    }
  };

  // 8. UPDATE ANNOUNCEMENT
  updateAnnouncement = async (id, announcement) => {
    try {
      const body = {
        body: announcement,
      };
      const updatedAnn = await Announcement.findByIdAndUpdate(id, body, {
        new: true,
      });
      return updatedAnn;
    } catch (err) {
      throw err;
    }
  };

  // 9. DELETE ANNOUNCEMENT
  deleteAnnouncement = async (id) => {
    try {
      const deletedAnn = await Announcement.findByIdAndDelete(id, { new: true });
      return deletedAnn;
    } catch (err) {
      throw err;
    }
  };



  //USER LEAVE SERVICES

  // 10. UPDATE LEAVE BALANCE
  updateLeaveBal = async (id, newLeaveBal) => {
    try {
      if (typeof newLeaveBal === 'string') {
        newLeaveBal = JSON.parse(newLeaveBal);
      }
      const updated = await User.findByIdAndUpdate(
        id,
        { $set: { leaveBal: newLeaveBal } },
        { new: true }
      );
      return updated;
    } catch (err) {
      throw err;
    }
  };

  // 11. UPDATE LEAVE STATUS
  updateLeaveStatus = async (id, newStatus) => {
    try {
      const updated = await Leaves.findByIdAndUpdate(
        id,
        { $set: { status: newStatus } },
        { new: true }
      );
      return updated;
    } catch (err) {
      throw err;
    }
  };



  //USER RELOCATION SERVICES

  // 12. UPDATE RELOCATION STATUS
  updateRelocationStatus = async (id, newStatus) => {
    try {
      const updated = await Relocations.findByIdAndUpdate(
        id,
        { $set: { status: newStatus } },
        { new: true }
      );
      return updated;
    } catch (err) {
      throw err;
    }
  };

  // 13. UPDATE USER LOCATION
  updateUserLocation = async (id, newLocation) => {
    try {
      const updated = await User.findByIdAndUpdate(
        id,
        { $set: { location: newLocation } },
        { new: true }
      );
      return updated;
    } catch (err) {
      throw err;
    }
  };


  //USER RESIGNATION SERVICES

  // 14. UPDATE RESIGNATION STATUS
  updateResignationStatus = async (id, newStatus, newLwd) => {
    try {
      const updated = await Resignations.findByIdAndUpdate(
        id,
        { $set: { status: newStatus, lwd: newLwd } },
        { new: true }
      );
      return updated;
    } catch (err) {
      throw err;
    }
  };



  //USER DATA SERVICES

  // 15. UPDATE USER BY USER ID
  updateUser = async (id, newBody) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        {
          $set: newBody
        },
        { new: true }
      );
      return updatedUser;
    } catch (err) {
      throw err;
    }
  };

  // 16. DELETE USER BY ID
  deleteUserById = async ( userId, session = null ) => {
    try {
      // CREATE THE BASE QUERY
      const query = User.findByIdAndDelete(userId);

      // IF THE REQUEST IS PART OF SESSION, THEN MUTATE QUERY OBJECT AND ADD SESSION 
      if(session){
        query.session(session);
      }

      // EXECUTE QUERY
      const result = await query;
      
      return result;

    } catch (err) {
      throw new Error(`Could not delete user : ${err.messge}`);
    }
  };

  // 17. DELETE USER ROLES BY USER ID
  deleteUserRolesByUserId = async (userId, session = null ) =>{
    try{
      // CREATE THE BASE QUERY
      const query = UserRole.deleteMany({userId : userId});

      // IF THE REQUEST IS PART OF SESSION, THEN MUTATE QUERY OBJECT AND ADD SESSION 
      if(session){
        query.session(session);
      }
 
      // EXECUTE QUERY
      const result = await query;
      
      return result;

    }catch(err){
      throw new Error(`Could not delete user roles : ${err.messge}`);
    }
  };

  // 18. DELETE USER LEAVES BY USER ID
  deleteLeavesByUserId = async (userId, session = null ) =>{
    try{
      // CREATE THE BASE QUERY
      const query = Leaves.deleteMany({employeeId : userId});

      // IF THE REQUEST IS PART OF SESSION, THEN MUTATE QUERY OBJECT AND ADD SESSION 
      if(session){
        query.session(session);
      }
 
      // EXECUTE QUERY
      const result = await query;
      
      return result;

    }catch(err){
      throw new Error(`Could not delete user's leaves : ${err.messge}`);
    }
  };

  // 19. DELETE USER RELOCATIONS BY USER ID
  deleteRelocationsByUserId = async (userId, session = null ) =>{
    try{
      // CREATE THE BASE QUERY
      const query = Relocations.deleteMany({employeeId : userId});

      // IF THE REQUEST IS PART OF SESSION, THEN MUTATE QUERY OBJECT AND ADD SESSION 
      if(session){
        query.session(session);
      }
 
      // EXECUTE QUERY
      const result = await query;
      
      return result;

    }catch(err){
      throw new Error(`Could not delete user's relocations : ${err.messge}`);
    }
  };

  // 20. DELETE USER RELOCATION RESPONSES BY USER ID
  deleteRelocationRespByUserId = async (userId, session = null ) =>{
    try{
      // CREATE THE BASE QUERY
      const query = RelocationResp.deleteMany({userId : userId});

      // IF THE REQUEST IS PART OF SESSION, THEN MUTATE QUERY OBJECT AND ADD SESSION 
      if(session){
        query.session(session);
      }
 
      // EXECUTE QUERY
      const result = await query;
      
      return result;

    }catch(err){
      throw new Error(`Could not delete user's relocation responses : ${err.messge}`);
    }
  };

  // 21. DELETE USER RESIGNATIONS BY USER ID
  deleteResignationsByUserId = async (userId, session = null ) =>{
    try{
      // CREATE THE BASE QUERY
      const query = Resignations.deleteMany({ employeeId : userId });

      // IF THE REQUEST IS PART OF SESSION, THEN MUTATE QUERY OBJECT AND ADD SESSION 
      if(session){
        query.session(session);
      }
 
      // EXECUTE QUERY
      const result = await query;
      
      return result;

    }catch(err){
      throw new Error(`Could not delete user's resignations : ${err.messge}`);
    }
  };

  // 22. DELETE USER RESIGNATION RESPONSES BY USER ID
  deleteResignationRespByUserId = async (userId, session = null ) =>{
    try{
      // CREATE THE BASE QUERY
      const query = ResignationResp.deleteMany({ userId : userId });

      // IF THE REQUEST IS PART OF SESSION, THEN MUTATE QUERY OBJECT AND ADD SESSION 
      if(session){
        query.session(session);
      }
 
      // EXECUTE QUERY
      const result = await query;
      
      return result;

    }catch(err){
      throw new Error(`Could not delete user's resignation responses : ${err.messge}`);
    }
  };

  // 23. GET ROLE PERMISSIONS
  getRolePermissions = async (roleId) =>{
    try{
      const rolePermissions = await RolePermission.find({roleId : roleId});
      return rolePermissions;
    }catch(err){
      throw err;
    }
  };

  // 24. GET PERMISSIONS BY IDS
  getPermissions = async (permissionIds) =>{
    try{
      const permissions = await Permission.find({ _id :{ $in: permissionIds  } });
      return permissions;
    }catch(err){
      throw err;
    }
  };

}

module.exports = HRService;
