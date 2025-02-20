import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    /** Basic Info **/
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, select: false }, // Hidden from queries
    avatar: { type: String }, // Profile picture URL (Google, GitHub, etc.)

    /** Authentication Methods **/
    authProvider: {
      type: String,
      enum: ["email", "google", "github"],
      default: "email",
    },
    googleId: { type: String, unique: true, sparse: true },
    githubId: { type: String, unique: true, sparse: true },

    /** Multi-Tenancy (For SaaS) **/
    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
    }, // Multi-company support

    /** Role-Based Access Control (RBAC) **/
    role: {
      type: String,
      enum: ["client", "admin", "developer", "manager", "owner", "staff"],
      default: "client",
    },
    permissions: {
      canCreateProject: { type: Boolean, default: false },
      canEditProject: { type: Boolean, default: false },
      canDeleteProject: { type: Boolean, default: false },
      canAssignTasks: { type: Boolean, default: false },
      canManageUsers: { type: Boolean, default: false },
    },

    /** Project & Task Assignments **/
    assignedProjects: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    ], // User's projects
    assignedTasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }], // User's tasks

    /** Subscription & Billing **/
    subscription: {
      plan: {
        type: String,
        enum: ["free", "basic", "pro", "enterprise"],
        default: "free",
      },
      status: {
        type: String,
        enum: ["active", "expired", "canceled"],
        default: "active",
      },
      renewalDate: { type: Date },
    },

    /** Security Enhancements **/
    isVerified: { type: Boolean, default: false }, // Email verification
    status: {
      type: String,
      enum: ["active", "inactive", "banned"],
      default: "active",
    },
    twoFactorEnabled: { type: Boolean, default: false },
    twoFactorSecret: { type: String, select: false }, // Store 2FA secret (if using)

    /** Activity Tracking **/
    lastLogin: { type: Date },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
