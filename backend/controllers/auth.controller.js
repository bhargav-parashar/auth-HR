const AuthService = require("../services/auth.service");
const AuthServiceInstance = new AuthService();
const UserService = require("../services/user.service");
const UserServiceInstance = new UserService();


//CREATE USER
const register = async (req,res) =>{
    try{
        //Hash Password
        const hashedPassword = await AuthServiceInstance.generatePasswordHash(req.body.password);
        const newUser = await UserServiceInstance.create({...req.body, password : hashedPassword});
        const newUserRole = await UserServiceInstance.createUserRole({userId:newUser._id});
        res.status(201).json({message: "User registered successfully"});
     }catch(err){
        res.status(500).send({ message: "Registration failed!", err });
    }
};




module.exports = {
    register
};