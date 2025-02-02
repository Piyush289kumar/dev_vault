import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function authMiddleware(req) {
  const token = req.cookies.get("authToken")?.value;
  if (!token)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    return NextResponse.next();
  } catch (error) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}
