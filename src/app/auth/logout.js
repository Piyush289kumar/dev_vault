import { serialize } from "cookie";

export async function POST() {
  const cookie = serialize("authToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/",
  });

  return new Response(JSON.stringify({ message: "Logout successful" }), {
    status: 200,
    headers: { "Set-Cookie": cookie },
  });
}
