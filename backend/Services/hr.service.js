const User = require("../models/user.model");

class HRService {
  getAllUsers = () => {
    try {
      const users = User.find({});
      return users;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = HRService;
