const bcrypt =require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { json } = require("body-parser");

//<-----> Home Route <------->

const home = async (req, res) => {
    try {
        res.status(200).send("Home Page")    
    } 
    catch (error) {
        res.status(400).send({msg : "Page not found"});
    }
};

//  <-----> Register Route <------->

const register = async (req, res) => {
    try {
      const { username, email, phone, password } = req.body;
  
      const userExists = await User.findOne({ email });
  
      //check if the email already exists or not
      if (userExists) {
        return res.status(400).json({ message: "Email already esists" });
      }
  
      const createdUser = await User.create({ username, email, phone, password });
      await createdUser.save();
  
      res.status(200).json({
        user : createdUser,
        message: "Registered Successfully",
        token: await createdUser.generateToken(),
        userId: createdUser._id.toString(),
      });
    } catch (error) {
      res.status(500).json({message : error.message});
    }
  };
//  <-----> Login Route <------>

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const validEmail = await User.findOne({ email });
        
        if(!validEmail){
            res.status(400),json({ message : "User does not exists" })
        }

        const vaidatePass = bcrypt.compare(password, validEmail.password);

        if(vaidatePass){
            res.status(200).json({
                message : "Login Successfull",
                token : await validEmail.generateToken(),
                userId : validEmail._id.toString()
            });
        }
        else{
            res.status(500).json({ message : "Incorrect Password"})
        }
    }
    catch (error) {
        res.status(500),json("Internal Server Error!!");
    }
};

module.exports = { home, register, login}