const AuthService = require("../services/auth.service");
const AuthServiceInstance = new AuthService();
const UserService = require("../services/user.service");
const UserServiceInstance = new UserService();

const authorizeJwt = async (req,res,next) =>{
   
   try{
      const token = req.cookies["remember-token"];
      const {userId} =  AuthServiceInstance.verifyJwt(token);
      const user = await UserServiceInstance.findByUserId(userId);
      req.user = user;
      next();
   }catch(err){
      res.status(403).json({ message:"Unauthorized access!",err})
   }
}

module.exports = authorizeJwt;