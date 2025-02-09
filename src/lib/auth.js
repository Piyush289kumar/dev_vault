import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function getUserById(userId) {
  try {
    await dbConnect();
    const user = await User.findById(userId).select("-password"); // Exclude password
    return user || null;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}

export async function getUserSession() {
  try {

    const cookieStore = await cookies(); // ✅ Await cookies()
    const token = cookieStore.get("access_token")?.value;

    if (!token) {
      console.warn("No access_token found in cookies.");
      return null;
    }

    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    console.log("Decoded Token:", decoded); // Debugging step
    return decoded?.id ? decoded : null;
  } catch (error) {
    console.error("Error verifying JWT:", error.message);
    return null;
  }
}
