import { NextResponse } from "next/server";
import { verifyToken } from "./src/lib/jwt";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  if (!token) return NextResponse.redirect(new URL("/login", req.url));

  const user = verifyToken(token);
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/admin") && user?.role !== "admin") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  if (pathname.startsWith("/developer") && user?.role !== "developer") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}
