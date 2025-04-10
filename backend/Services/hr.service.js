const User = require("../models/user.model");

class HRService {
  // getAllUsers = () => {
  //   try {
  //     const users = User.find({});
  //     return users;
  //   } catch (err) {
  //     throw err;
  //   }
  // };

  getAllUsers = () => {
    try {
      const users = User.aggregate([
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
}

module.exports = HRService;
