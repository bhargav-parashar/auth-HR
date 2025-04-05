const UserService = require("../services/user.service");
const UserServiceInstance = new UserService();

//USER DETAILS

const userDetails = async (req, res) =>{
  try{
    const user = await UserServiceInstance.findByUserId(req.user._id);
    res.status(200).send({user});
  }catch(err){
    res.status(500).send({ message: "Could not get user details!", err });
  }
};

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

//LEAVE
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
        relocation: {
          _id: newLeave._id,
        },
      },
    };
    res.status(200).json(body);
  } catch (err) {
    res.status(500).send({ message: "Leave submission failed!", err });
  }
};

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


//RELOCATON
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

const submitRelocationResponse = async (req, res) => {
  try {
    const body = {
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

const relocationQuestionnaire = async (req, res) => {
  try {
    const allQuestions = await UserServiceInstance.getRelocationQuestions();
    res.status(200).send(allQuestions);
  } catch (err) {
    res.status(500).send({ message: "Could not fetch questionnaire!", err });
  }
};

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

//RESIGNATION
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

const submitResponse = async (req, res) => {
  try {
    const body = {
      userId: req.user._id,
      responses: req.body.responses,
    };

    const newResponse = await UserServiceInstance.submitResponse(body);

    res.status(200).send();
  } catch (err) {
    res.status(500).send({ message: "Response submission failed!", err });
  }
};

const questionnaire = async (req, res) => {
  try {
    const allQuestions = await UserServiceInstance.getQuestions();
    res.status(200).send(allQuestions);
  } catch (err) {
    res.status(500).send({ message: "Could not fetch questionnaire!", err });
  }
};

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

module.exports = {
  leave,
  getLeavesByUserId,
  resign,
  submitResponse,
  questionnaire,
  getResignationByUserId,
  relocate,
  getRelocationByUserId,
  relocationQuestionnaire,
  submitRelocationResponse,
  userDetails,
  getRequestHistoryByUserId
};
