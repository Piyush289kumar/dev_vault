import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export function authMiddleware(req) {
  const token = req.cookies.get("authToken")?.value;
  if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const decoded = verifyToken(token, process.env.JWT_ACCESS_SECRET);
  if (!decoded) return NextResponse.json({ message: "Invalid token" }, { status: 401 });

  req.user = decoded;
  return NextResponse.next();
}
