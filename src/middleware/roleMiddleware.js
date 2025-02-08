import { NextResponse } from "next/server";
import { getSession } from "next-auth/react";

export async function middleware(req) {
    const session = await getSession({ req });

    if (!session) {
        return NextResponse.redirect(new URL("/auth/sign-in", req.url));
    }

    const { role } = session.user;
    const pathname = req.nextUrl.pathname;

    if (pathname.startsWith("/dashboard/admin") && role !== "admin") {
        return NextResponse.redirect(new URL("/dashboard/client", req.url));
    }
    if (pathname.startsWith("/dashboard/developer") && role !== "developer") {
        return NextResponse.redirect(new URL("/dashboard/client", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"],
};
