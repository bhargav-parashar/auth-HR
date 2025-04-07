const HRService = require("../services/hr.service");
const HRServiceInstance = new HRService();

const getAllUsers = async (req,res) =>{
    try{
        const userDetails = await HRServiceInstance.getAllUsers();
        res.status(200).json(userDetails);
    }catch(err){
        res.status(500).json({ message: "Failed to fetch user details", err });
    }
}

module.exports = {
    getAllUsers
};