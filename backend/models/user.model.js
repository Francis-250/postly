import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    registrationOtp: { type: String, required: true, default: "def123" },
    otpIsVerified: { type: Boolean, default: false },
    resetOtp: { type: String, default: null },
    VerifyResetOtp: { type: String, default: null },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
