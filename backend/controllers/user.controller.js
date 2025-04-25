const UserService = require("../services/user.service");
const UserServiceInstance = new UserService();

// 1. GET USER'S DETAILS
const userDetails = async (req, res) =>{
  try{
    const user = await UserServiceInstance.findByUserId(req.user._id);
    res.status(200).send(user);
  }catch(err){
    res.status(500).send({ message: "Could not get user details!", err });
  }
};

// 2. GET USER'S REQUEST HISTORY
const getRequestHistoryByUserId = async (req, res) =>{
  try{
    const leaveHistory = await UserServiceInstance.getleavesByUserId(req.user._id);
    const relocationHistory = await UserServiceInstance.getRelocationByUserId(req.user._id);
    const resignationHistory = await UserServiceInstance.getResignationByUserId(req.user._id);
    const requestHistory = {
      leaves : leaveHistory,
      relocations : relocationHistory,
      resignations : resignationHistory
    }; 
    res.status(200).send(requestHistory);
  }catch(err){
    res.status(500).send({ message: "Could not get user request history!", err });
  }
}

// 3. GET USER'S LEAVE BALANCE
const getLeaveBalByUserId = async (req, res) =>{
  try{
    const user = await UserServiceInstance.findByUserId(req.user._id);
    const {leaveBal} = user;
    res.status(200).send(leaveBal);
  }catch(err){
    res.status(500).send({ message: "Could not get user leave balance!", err });
  }
};

// 4. CREATE LEAVE REQUEST
const leave = async (req, res) => {
  try {
    const newLeave = await UserServiceInstance.leave(
      req.user._id,
      req.body.startDate,
      req.body.endDate,
      req.body.leaveType
    );
    const body = {
      data: {
        leave: {
          _id: newLeave._id
        }
      },
    };
    res.status(200).json(body);
  } catch (err) {
    res.status(500).send({ message: "Leave submission failed!", err });
  }
};

// 5. UPDATE LEAVE BALANCE COUNT
const updateLeaveBal = async (req, res ) =>{
  try{
    const newUser = await UserServiceInstance.updateLeaveBal( req.user._id, req.body.newBal );
    res.status(200).json(newUser);
  }catch(err){
    res.status(500).send({ message: "Could not update leave balance!", err });
  }
}

// 6. GET LEAVE REQUEST HISTORY BY USER ID
const getLeavesByUserId = async (req, res) => {
    try {
      const leave = await UserServiceInstance.getleavesByUserId(
        req.user._id
      );
      res.status(200).json(leave);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch leave", err });
    }
};

// 7. GET PENDING LEAVES BY USER ID
const getPendingLeavesByUserId = async (req, res) => {
  try {
    const leave = await UserServiceInstance.getPendingleavesByUserId(
      req.user._id
    );
    res.status(200).json(leave);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch pending leaves", err });
  }
};



// 8. CREATE RELOCATION REQUEST
const relocate = async (req, res) => {
  try {
    const newRelocation = await UserServiceInstance.relocate(
      req.user._id,
      req.body.location
    );
    const body = {
      data: {
        relocation: {
          _id: newRelocation._id,
        },
      },
    };
    res.status(200).json(body);
  } catch (err) {
    res.status(500).send({ message: "Relocation submission failed!", err });
  }
};

// 9. CREATE RELOCATION RESPONSE FOR QUESTIONNAIRE
const submitRelocationResponse = async (req, res) => {
  try {
    const body = {
      relocationId: req.body.relocationId,
      userId: req.user._id,
      responses: req.body.responses,
    };

    const newResponse = await UserServiceInstance.submitRelocationResponse(
      body
    );
    res.status(200).send();
  } catch (err) {
    res.status(500).send({ message: "Response submission failed!", err });
  }
};

// 10. GET RELOCATION QUESTIONNAIRE
const relocationQuestionnaire = async (req, res) => {
  try {
    const allQuestions = await UserServiceInstance.getRelocationQuestions();
    res.status(200).send(allQuestions);
  } catch (err) {
    res.status(500).send({ message: "Could not fetch questionnaire!", err });
  }
};

// 11. GET RELOCATION REQUESTS HISTORY BY USER ID
const getRelocationByUserId = async (req, res) => {
  try {
    const relocation = await UserServiceInstance.getRelocationByUserId(
      req.user._id
    );
    res.status(200).json(relocation);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch relocation", err });
  }
};

// 12. GET PENDING RELOCATION REQUESTS BY USER ID
const getPendingRelocationByUserId = async (req, res) => {
  try {
    const relocation = await UserServiceInstance.getPendingRelocationByUserId(
      req.user._id
    );
    res.status(200).json(relocation);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch pending relocations", err });
  }
};

// 13. CREATE RESIGNATION REQUEST
const resign = async (req, res) => {
  try {
    const newResignation = await UserServiceInstance.resign(
      req.user._id,
      req.body.lwd
    );
    const body = {
      data: {
        resignation: {
          _id: newResignation._id,
        },
      },
    };
    res.status(200).json(body);
  } catch (err) {
    res.status(500).send({ message: "Resignation submission failed!", err });
  }
};

// 14. CREATE RESIGNATION RESPONSE FOR QUESTIONNAIRE
const submitResponse = async (req, res) => {
  try {
    const body = {
      resignationId : req.body.resignationId,
      userId: req.user._id,
      responses: req.body.responses,
    };

    const newResponse = await UserServiceInstance.submitResponse(body);

    res.status(200).send();
  } catch (err) {
    res.status(500).send({ message: "Response submission failed!", err });
  }
};

// 15. GET RESIGNATION QUESTIONNAIRE
const questionnaire = async (req, res) => {
  try {
    const allQuestions = await UserServiceInstance.getQuestions();
    res.status(200).send(allQuestions);
  } catch (err) {
    res.status(500).send({ message: "Could not fetch questionnaire!", err });
  }
};

// 16. GET RESIGNATION REQUESTS HISTORY BY USER ID
const getResignationByUserId = async (req, res) => {
  try {
    const resignation = await UserServiceInstance.getResignationByUserId(
      req.user._id
    );
    res.status(200).json(resignation);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch resignation", err });
  }
};

// 17. GET PENDING RESIGNATION REQUESTS BY USER ID
const getPendingResignationByUserId = async (req, res) => {
  try {
    const resignation = await UserServiceInstance.getPendingResignationByUserId(
      req.user._id
    );
    res.status(200).json(resignation);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch pending resignations", err });
  }
};

module.exports = {
  leave,
  getLeavesByUserId,
  getPendingLeavesByUserId,
  getPendingRelocationByUserId,
  resign,
  submitResponse,
  questionnaire,
  getResignationByUserId,
  getPendingResignationByUserId,
  relocate,
  getRelocationByUserId,
  relocationQuestionnaire,
  submitRelocationResponse,
  userDetails,
  getRequestHistoryByUserId,
  getLeaveBalByUserId,
  updateLeaveBal
};
