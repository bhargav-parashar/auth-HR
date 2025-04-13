const HRService = require("../services/hr.service");
const HRServiceInstance = new HRService();

const getAllUsers = async (req,res) =>{
    try{
        const userDetails = await HRServiceInstance.getAllUsers();
        res.status(200).json(userDetails);
    }catch(err){
        res.status(500).json({ message: "Failed to fetch user details", err });
    }
};

const getPendingLeaves = async (req,res) =>{
    try{
        const pendingLeaves = await HRServiceInstance.getPendingLeaves();
        res.status(200).json(pendingLeaves);
    }catch(err){
        res.status(500).json({ message: "Failed to fetch pending Leaves", err });
    }
};

const getPendingRelocations = async (req,res) =>{
    try{
        const pendingRelocations = await HRServiceInstance.getPendingRelocations();
        res.status(200).json(pendingRelocations);
    }catch(err){
        res.status(500).json({ message: "Failed to fetch pending Relocations", err });
    }
};

const getPendingResignations = async (req,res) =>{
    try{
        const pendingResignations = await HRServiceInstance.getPendingResignations();
        res.status(200).json(pendingResignations);
    }catch(err){
        res.status(500).json({ message: "Failed to fetch pending Resignations", err });
    }
};


const getCurrMonthResignations = async (req,res) =>{
    try{
        const currMonthResignations = await HRServiceInstance.getCurrMonthResignations();
        res.status(200).json(currMonthResignations);
    }catch(err){
        res.status(500).json({ message: "Failed to fetch current month Resignations", err });
    }
};

// CREATE ANNOUNCEMENT
const createAnnouncement = async (req,res) => {
    try {
      const newAnn = await HRServiceInstance.createAnnouncement(req.body.body);
      res.status(200).json(newAnn);
    } catch (err) {
        res.status(500).json({ message: "Failed to create Announcement", err });
    }
  };

  // GET ANNOUNCEMENTS
  const getAnnouncements = async (req,res) =>{
    try{
      const ann = await HRServiceInstance.getAnnouncements();
      res.status(200).json(ann);
    }catch(err){
      res.status(500).json({ message: "Failed to get Announcements", err });
    }
  };

  // UPDATE ANNOUNCEMENTS
  const updateAnnouncement = async (req,res) => {
    try {
       const updatedAnn = await HRServiceInstance.updateAnnouncement(req.body.id, req.body.body);
       res.status(200).json(updatedAnn);
    } catch (err) {
        res.status(500).json({ message: "Failed to update Announcement", err });
    }
  };

  // DELETE ANNOUNCEMENT
  const deleteAnnouncement = async (req,res) =>{
    try{
      const deletedAnn = await HRServiceInstance.deleteAnnouncement(req.body.id);
      res.status(200).json(deletedAnn);
    }catch(err){
        res.status(500).json({ message: "Failed to delete Announcement", err });
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
    deleteAnnouncement
};