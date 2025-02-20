import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
  company: {
    name: { type: String, required: true },
    businessType: { type: String },
    website: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: String },
    country: { type: String },
    app: {
      name: { type: String, required: true },
      category: { type: String },
      url: { type: String },
      description: { type: String },
      users: { type: Number },
      plan: {
        type: String,
        enum: ["Free", "Basic", "Pro", "Enterprise"],
        default: "Free",
      },
    },
  },
  createdAt: { type: Date, default: Date.now },
});

const Client = mongoose.models.Client || mongoose.model("Client", ClientSchema);
export default Client;
