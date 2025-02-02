import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/utils/email";

export async function POST(req) {
  await dbConnect();
  const { name, email, password } = await req.json();

  const existingUser = await User.findOne({ email });
  if (existingUser)
    return new Response(JSON.stringify({ message: "Email already in use" }), {
      status: 400,
    });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });

  await sendVerificationEmail(user.email, user._id);

  return new Response(
    JSON.stringify({ message: "User registered. Please verify your email." }),
    { status: 201 }
  );
}
