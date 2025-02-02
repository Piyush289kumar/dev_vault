import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/userModel";

export async function GET(req) {
  await dbConnect();
  const userId = req.nextUrl.searchParams.get("user");

  const user = await User.findById(userId);
  if (!user)
    return new Response(
      JSON.stringify({ message: "Invalid verification link" }),
      {
        status: 400,
      }
    );

  user.isVerified = true;
  await user.save();

  return new Response(
    JSON.stringify({ message: "Email verified successfully" }),
    {
      status: 200,
    }
  );
}
