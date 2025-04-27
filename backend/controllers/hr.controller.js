const HRService = require("../services/hr.service");
const HRServiceInstance = new HRService();
const AuthService = require("../services/auth.service");
const AuthServiceInstance = new AuthService();
const mongoose = require("mongoose");

// 1. GET ALL AVAILABLE USERS
const getAllUsers = async (req,res) =>{
    try{
        const userDetails = await HRServiceInstance.getAllUsers();
        res.status(200).json(userDetails);
    }catch(err){
        res.status(500).json({ message: "Failed to fetch user details", err });
    }
};

// 2. GET ALL PENDING LEAVES
const getPendingLeaves = async (req,res) =>{
    try{
        const pendingLeaves = await HRServiceInstance.getPendingLeaves();
        res.status(200).json(pendingLeaves);
    }catch(err){
        res.status(500).json({ message: "Failed to fetch pending Leaves", err });
    }
};

// 3. GET ALL PENDING RELOCATIONS
const getPendingRelocations = async (req,res) =>{
    try{
        const pendingRelocations = await HRServiceInstance.getPendingRelocations();
        res.status(200).json(pendingRelocations);
    }catch(err){
        res.status(500).json({ message: "Failed to fetch pending Relocations", err });
    }
};

// 4. GET ALL PENDING RESIGNATIONS
const getPendingResignations = async (req,res) =>{
    try{
        const pendingResignations = await HRServiceInstance.getPendingResignations();
        res.status(200).json(pendingResignations);
    }catch(err){
        res.status(500).json({ message: "Failed to fetch pending Resignations", err });
    }
};

// 5. GET CURRENT MONTH RESIGNATIONS
const getCurrMonthResignations = async (req,res) =>{
    try{
        const currMonthResignations = await HRServiceInstance.getCurrMonthResignations();
        res.status(200).json(currMonthResignations);
    }catch(err){
        res.status(500).json({ message: "Failed to fetch current month Resignations", err });
    }
};

// 6. CREATE ANNOUNCEMENT
const createAnnouncement = async (req,res) => {
    try {
      const newAnn = await HRServiceInstance.createAnnouncement(req.body.body);
      res.status(200).json(newAnn);
    } catch (err) {
        res.status(500).json({ message: "Failed to create Announcement", err });
    }
  };

  // 7. GET ANNOUNCEMENTS
  const getAnnouncements = async (req,res) =>{
    try{
      const ann = await HRServiceInstance.getAnnouncements();
      res.status(200).json(ann);
    }catch(err){
      res.status(500).json({ message: "Failed to get Announcements", err });
    }
  };

  // 8. UPDATE ANNOUNCEMENTS
  const updateAnnouncement = async (req,res) => {
    try {
       const updatedAnn = await HRServiceInstance.updateAnnouncement(req.body.id, req.body.body);
       res.status(200).json(updatedAnn);
    } catch (err) {
        res.status(500).json({ message: "Failed to update Announcement", err });
    }
  };

  // 9. DELETE ANNOUNCEMENT
  const deleteAnnouncement = async (req,res) =>{
    try{
      const deletedAnn = await HRServiceInstance.deleteAnnouncement(req.body.id);
      res.status(200).json(deletedAnn);
    }catch(err){
        res.status(500).json({ message: "Failed to delete Announcement", err });
    }
  }

  // 10. UPDATE LEAVE BALANCE
  const updateLeaveBal = async (req,res) =>{
    try{
      console.log("REACHED CONTROLLER");
      console.log(`User Id : ${req.user._id}`);
      console.log(`User Id : ${req.body.newLeaveBal}`);
      console.log("------------");
      const updated = await HRServiceInstance.updateLeaveBal(req.user._id, req.body.newLeaveBal);
      res.status(200).json(updated);
    }catch(err){
        res.status(500).json({ message: "Failed to update leave balance", err });
    }
  }

  // 11. UPDATE LEAVE STATUS
  const updateLeaveStatus = async (req,res) =>{
    try{
      const updated = await HRServiceInstance.updateLeaveStatus(req.body.id, req.body.newStatus);
      res.status(200).json(updated);
    }catch(err){
        res.status(500).json({ message: "Failed to update leave status", err });
    }
  }

  // 12. UPDATE RELOCATION STATUS
  const updateRelocationStatus = async (req,res) =>{
    try{
      const updated = await HRServiceInstance.updateRelocationStatus(req.body.id, req.body.newStatus);
      res.status(200).json(updated);
    }catch(err){
        res.status(500).json({ message: "Failed to update relocation status", err });
    }
  }
  
  // 13. UPDATE USER LOCATION 
  const updateUserLocation = async (req,res) =>{
    try{
      const updated = await HRServiceInstance.updateUserLocation(req.body.id, req.body.newLocation);
      res.status(200).json(updated);
    }catch(err){
        res.status(500).json({ message: "Failed to update user location", err });
    }
  }

  // 14. UPDATE RESIGNATION STATUS
  const updateResignationStatus = async (req,res) =>{
    try{
      const updated = await HRServiceInstance.updateResignationStatus(req.body.id, req.body.newStatus, req.body.newLwd);
      res.status(200).json(updated);
    }catch(err){
        res.status(500).json({ message: "Failed to update resignation status", err });
    }
  }

  // 15. UPDATE USER
  const updateUser = async (req, res ) =>{
    const newPassword = req.body.body.password;
    let hashedPassword = '';
    let updatedUser;

    try{

      if(newPassword){

        // HASH PASSWORD
        hashedPassword = await AuthServiceInstance.generatePasswordHash(newPassword);
        const newBody = {
          username: req.body.body.username,
          location: req.body.body.location,
          department: req.body.body.department,
          password: hashedPassword
        };
        updatedUser = await HRServiceInstance.updateUser(req.body.id, newBody );
      
      }else{

        const newBody = {
          username: req.body.body.username,
          location: req.body.body.location,
          department: req.body.body.department
        };
        updatedUser = await HRServiceInstance.updateUser(req.body.id, newBody );
      
      }

      res.status(200).json(updatedUser);
    
    }catch(err){
      res.status(500).json({ message: "Failed to update user", err });
    }
  }

  

  // 16. DELETE USER AND ALL USER'S ROLES, REQUESTS, RESPONSES
  const deleteAllUserData = async (req,res) =>{
    const userId = req.params.userId;

    // CREATE A MONGOOSE SESSION AND GROUP A SERIES OF TRANSACTIONS IN IT
    const session = await mongoose.startSession();
    session.startTransaction();

    try{

      // DELETE USER BY USER ID
      const user = await HRServiceInstance.deleteUserById(userId, session);

      // IF NO USER ID FOUND, ABORT TRANSACTION
      if(!user){
        await session.abortTransaction();
        res.status(404).json({ message: "User not found!" });
      }

      // PARALLELY DELETE ALL USER DOCUMENTS FROM RELATED COLLECTIONS USING PROMISE.ALL
      const [
        userRolesDeleted, 
        leavesDeleted, 
        relocationsDeleted, 
        relocationRespDeleted, 
        resignationsDeleted, 
        resignationRespDeleted,
       ] = await Promise.all([
          HRServiceInstance.deleteUserRolesByUserId(userId,session),
          HRServiceInstance.deleteLeavesByUserId(userId,session),
          HRServiceInstance.deleteRelocationsByUserId(userId,session),
          HRServiceInstance.deleteRelocationRespByUserId(userId,session),
          HRServiceInstance.deleteResignationsByUserId(userId,session),
          HRServiceInstance.deleteResignationRespByUserId(userId,session),
       ]);

       // COMMIT SESSION AND MAKE CHANGES PERMANENT, THEN END SESSION
       await session.commitTransaction();
       session.endSession();

       //RETURN RESPONSE
       res.status(200).json({
        message: "User and all related data deleted",
        deleteCount:{
          userRoles        : userRolesDeleted.deletedCount,
          leaves           : leavesDeleted.deletedCount,
          relocations      : relocationsDeleted.deletedCount,
          relocationResp   : relocationRespDeleted.deletedCount,
          resignations     : resignationsDeleted.deletedCount,
          resignationResp  : resignationRespDeleted.deletedCount
        }
       })

    }catch(err){
      console.log(err);
       //ABORT AND ROLL BACK GROUP OF TRANSACTIONS AND END SESSION
       await session.abortTransaction();
       session.endSession();

       //RETURN RESPONSE
       res.status(500).json({message: 'Server Error', error: err.message});
    }
  }

module.exports = {
    getAllUsers,
    getPendingLeaves,
    getPendingRelocations,
    getPendingResignations,
    getCurrMonthResignations,
    createAnnouncement,
    getAnnouncements,
    updateAnnouncement,
    deleteAnnouncement,
    updateLeaveBal,
    updateLeaveStatus,
    updateRelocationStatus,
    updateResignationStatus,
    updateUserLocation,
    updateUser,
    deleteAllUserData
};