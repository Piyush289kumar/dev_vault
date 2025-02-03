import { clearAuthCookie } from "@/lib/cookies";

export async function POST() {
  const cookie = clearAuthCookie();

  return new Response(
    JSON.stringify({ message: "Logged out successfully" }),
    { status: 200, headers: { "Content-Type": "application/json", "Set-Cookie": cookie } }
  );
}
