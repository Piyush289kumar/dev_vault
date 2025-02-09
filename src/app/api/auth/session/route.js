import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode

export async function GET() {
  const cookieStore = await cookies(); // ✅ No await needed
  const token = cookieStore.get("access_token")?.value;

  if (!token) {
    console.warn("No token found in cookies.");
    return NextResponse.json({ user: null }, { status: 401 });
  }

  try {
    const decoded = jwtDecode(token);
    console.log("Decoded token:", decoded);
    return NextResponse.json({ user: decoded }, { status: 200 });
  } catch (error) {
    console.error("Token decoding failed:", error);
    return NextResponse.json({ user: null }, { status: 400 });
  }
}
