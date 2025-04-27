const AuthService = require("../services/auth.service");
const AuthServiceInstance = new AuthService();
const UserService = require("../services/user.service");
const UserServiceInstance = new UserService();

// 1. REGISTER USER
const register = async (req, res) => {
  try {
    //Hash Password
    const hashedPassword = await AuthServiceInstance.generatePasswordHash(
      req.body.password
    );
    const newUser = await UserServiceInstance.create({
      ...req.body,
      password: hashedPassword,
    });
    const newUserRole = await UserServiceInstance.createUserRole({
      userId: newUser._id,
    });
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).send({ message: "Registration failed!", err });
  }
};

// 2. LOGIN USER
const login = async (req, res) => {
  try {
    //search users table by username
    const user = await UserServiceInstance.findByUsername(req.body.username);

    if (!user) {
      res
        .status(401)
        .json({ message: "Either username or password is incorrect" });
    } else {
      //if found match password / jwt compare
      const isPasswordValid = await AuthServiceInstance.comparePasswordHash(
        req.body.password,
        user.password
      );
     
      //if matched create jwt token
      if (isPasswordValid) {
        //get user role
        const { roleId } = await UserServiceInstance.getUserRoleMapping(
          user._id
        );
        
        const { role } = await UserServiceInstance.getRole(roleId);
       
        //create jwt token
        const jwtToken =  AuthServiceInstance.generateJwt({
          userId: user._id,
        });
        
        res
          .status(200)
          .cookie("remember-token", jwtToken, {
            maxAge: 30 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: "None"
          })
          .send({ 
                  role: role 
          });
      } else {
        res.status(401).json({ message: "Either username or password is incorrect" });
      }
    }

    //return jwt token
  } catch (err) {
    res.status(500).json({ message: "Something went wrong!", err });
  }
};

// 3. LOGOUT USER BY CLEARING HTTP ONLY COOKIE  
const logout = (req,res)=>{
  try{
      res.status(200)
      .clearCookie(
          "remember-token",
           {
              httpOnly: true,
              secure:true,
              sameSite:'None'
           }
      )
      .json({message:"Logged Out"})
  }catch(err){
      res.status(500).send({ message: "Something went wrong", err });
  }
 
  
};

//4. RETURN USER DETAILS, WILL GO TO JWT AUTH FIRST, IF LOGIN TOKEN TIMED OUT WILL NOT REACH HERE
const loginstatus = async (req,res) =>{
    try{
         const {roleId} = await UserServiceInstance.getUserRoleMapping(req.user._id);
         const {role} = await UserServiceInstance.getRole(roleId);

        res.status(200).json({
            status : true,
            userId: req.user._id,
            userName:req.user.username,
            role : role
        })
    }catch(err){
        res.status(500).send({ message: "Something went wrong", err });
    }
};

module.exports = {
  register,
  login,
  logout,
  loginstatus
};
