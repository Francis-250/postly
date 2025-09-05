import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {};

export const removeCookie = (req, res) => {
  console.log(req.cookies);

  res.clearCookie("regToken", {
    httpOnly: true,
    secure: false,
    sameSite: "lux",
  });

  res.status(200).json({ success: true, message: "Logged out successfully" });
};
