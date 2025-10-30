import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

// function for creating token
const creatToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// controller function for user login
const loginUser = async (req, res) => {
  try {
     const { email, password } = req.body;

    
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "user dosent exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (isMatch) {
      const token = creatToken(user._id);
      res.status(200).json({ sucess: true, token: token });
    } else {
      res.json({ success: false, message: "Invalid credential" });
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ sucess: false, message: error.message });
  }
};

// controller function for user Register
const registerUser = async (req, res) => {
  try {
      const { name, email, password } = req.body;
    // check if user already exists
    const existingUser = await userModel.findOne({email});
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    // validate password and checking password strenght
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "please enter a valid email" });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ success: false, message: "please enter a valid password" });
    }

    // hash user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const token = creatToken(user._id);
    res.status(201).json({ sucess: true, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ sucess: false, message: error.message });
  }
};

// controller function for  admin login
const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
