import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
    },

    // 🔒 Authentication
    password: { type: String, required: true },

    emailVerified: {
      type: Boolean,
      default: false,
    },

    verificationToken: {
      type: String,
    },

    resetPasswordToken: {
      type: String,
    },

    resetPasswordExpires: {
      type: Date,
    },

    // 👤 Profile
    profile: {
      name: { type: String },
      bio: { type: String },
      avatarUrl: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

const UserModal = mongoose.model("user", UserSchema);
export default UserModal;
