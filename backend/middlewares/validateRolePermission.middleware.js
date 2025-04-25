const AuthService = require("../services/auth.service");
const AuthServiceInstance = new AuthService();
const UserService = require("../services/user.service");
const UserServiceInstance = new UserService();
const HRService = require("../services/hr.service");
const HRServiceInstance = new HRService();

const validateRolePermission = (requiredAction, requiredSubject) => async (req,res,next) =>{
   
   try{
      
      // GET USER ID FROM REQ BODY
      const userID = req.user?._id; 
      if (!userID) return res.status(401).json({ message: 'User not authenticated' });
      
      // GET USER ROLE ID FROM USER ROLES
      const userRole = await UserServiceInstance.getUserRoleMapping(userID);
      if (!userRole) return res.status(401).json({ message: 'User not authenticated' });
      
      // GET PERMISSION ID FROM ROLE PERMISSIONS 
      const rolePermissions = await HRServiceInstance.getRolePermissions(userRole.roleId);
      const permissionIds = rolePermissions.map(item => item.permissionId);
   
      // GET PERMISSIONS
      const permissions = await HRServiceInstance.getPermissions(permissionIds);
      
      // CHECK IF CURRENT TASK IS PART OF THE PERMISSION LIST
      const hasPermission = permissions.some(item => item.action === requiredAction && item.subject === requiredSubject);

      // IF YES, GO TO NEXT ELSE RES 403 
      if(!hasPermission){
         res.status(403).json({ message:"You do not have the permission to perform this action!",err})
      }

      // APPROVED : GO TO CONTROLLER
      next();
   }catch(err){
      res.status(500).json({ message:"Internal server error!",err});
   }
}

module.exports = validateRolePermission;