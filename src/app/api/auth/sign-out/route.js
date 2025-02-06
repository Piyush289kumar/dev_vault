import { clearAccessTokenCookie, clearRefreshTokenCookie } from "@/lib/cookies";

export async function POST() {
  // Clear both access token and refresh_token cookies
  const authCookie = clearAccessTokenCookie("access_token");
  const refreshCookie = clearRefreshTokenCookie();

  return new Response(
    JSON.stringify({ message: "Logged out successfully" }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": `${authCookie}, ${refreshCookie}`,
      },
    }
  );
}
