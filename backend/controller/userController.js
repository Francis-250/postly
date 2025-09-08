import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { otpGenerator } from "../middleware/otpGenerator.js";
import UserModal from "../models/userModel.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(404)
      .json({ success: false, message: "Fill All The Filled" });
  }
  try {
    const existingUser = await UserModal.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User Already Exists" });
    }
    const otp = otpGenerator();
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModal({
      name,
      email,
      password: hashedPassword,
      verificationToken: otp,
    });
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
    });

    await newUser.save();

    res
      .status(200)
      .json({ success: true, message: "User Registered Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(404)
      .json({ success: false, message: "Fill All The Filled" });
  }
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const verifyOtp = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const profile = async (req, res) => {
  try {
    console.log("hello");
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
