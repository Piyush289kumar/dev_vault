import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String },  // Not needed for Google login
    role: {
      type: String,
      enum: ["client", "admin", "developer"],
      default: "client",
    },
    isVerified: { type: Boolean, default: false },
    image: { type: String },  // Store Google profile image URL
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
