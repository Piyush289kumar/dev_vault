import userModel from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { userId } = await request.json(); // Get userId from request body

    if (!userId) {
      return NextResponse.json({ message: "User ID is missing" }, { status: 400 });
    }

    // Find user and update verification status
    const user = await userModel.findOneAndUpdate(
      { _id: userId },
      { isVerified: true }, // Correctly updating verification field
      { new: true } // Return the updated document
    );

    if (user) {
      return NextResponse.json({ message: "User verified successfully!" });
    } else {
      return NextResponse.json(
        { message: "Verification failed. User not found." },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error verifying user:", error);
    return NextResponse.json(
      { message: "An error occurred during verification." },
      { status: 500 }
    );
  }
}
