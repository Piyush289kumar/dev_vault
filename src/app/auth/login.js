import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { generateToken } from "@/utils/jwt";
import { serialize } from "cookie";

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

  if (!user.isVerified)
    return new Response(JSON.stringify({ message: "Email not verified" }), {
      status: 403,
    });

  const token = generateToken(user);
  const cookie = serialize("authToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 3 * 24 * 60 * 60, // 3 days
    path: "/",
  });

  return new Response(JSON.stringify({ message: "Login successful" }), {
    status: 200,
    headers: { "Set-Cookie": cookie },
  });
}
