import userModel from "@/models/userModel";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    console.log("Enter User Get");
    
    await dbConnect();

    const url = new URL(req.url); // Get the full URL
    const userId = url.pathname.split("/").pop(); // Extract the userId from the URL path

    if (!userId) {
      return NextResponse.json(
        { message: "User ID is missing" },
        { status: 400 }
      );
    }

    // Find user by userId
    const user = await userModel.findOne({ _id: userId });

    if (user) {
      return NextResponse.json({ user }, { status: 200 });
    } else {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error finding user by ID:", error);
    return NextResponse.json(
      { message: "An error occurred during Fetch User By Id." },
      { status: 500 }
    );
  }
}
