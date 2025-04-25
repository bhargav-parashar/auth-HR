const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");
const User = require("../models/user.model");

class AuthService{

    // 1. HASH PASSWORD
    generatePasswordHash = (plainTextPassword) => bcrypt.hash(plainTextPassword,10);

    // 2. COMPARE INPUT PASSWORD AND HASHED PASSWORD
    comparePasswordHash = (plainTextPassword, hash) => bcrypt.compare(plainTextPassword, hash);

    // 3. GENERATE JWT
    generateJwt = (payload) => Jwt.sign(payload,process.env.JWT_SECRET_KEY, {expiresIn : "30m"});

    // 4. VERIFY JWT
    verifyJwt = (token) => Jwt.verify(token,process.env.JWT_SECRET_KEY);  

}

module.exports = AuthService;