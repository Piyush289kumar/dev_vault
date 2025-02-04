import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { signJwtToken } from "@/lib/jwt";
import { setAuthCookie } from "@/lib/cookies";
import { errorHandler } from "@/utils/errorHandler";
import { z } from "zod";

// Define request validation schema
const signInSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
});

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const parsed = signInSchema.safeParse(body);

    if (!parsed.success) {
      return new Response(
        JSON.stringify({
          message: "Validation failed",
          errors: parsed.error.format(),
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const { email, password } = parsed.data;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Generate JWT token
    const token = signJwtToken({ _id: user._id, role: user.role });

    // Set token as HTTP-only secure cookie
    const cookie = setAuthCookie(token);

    return new Response(
      // JSON.stringify({ message: "Login successful", token }),
      JSON.stringify({ message: "Login successful" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", "Set-Cookie": cookie },
      }
    );
  } catch (error) {
    return errorHandler(error, "Error during sign-in");
  }
}
