import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  await dbConnect();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user)
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
    });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return new Response(JSON.stringify({ message: "Invalid credentials" }), {
      status: 401,
    });

  // Generate JWT token
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return new Response(JSON.stringify({ message: "Login successful", token }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
