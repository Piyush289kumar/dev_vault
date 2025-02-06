import { verifyToken, generateTokens } from "@/lib/jwt";
import { setAuthCookie } from "@/lib/cookies";

export async function POST(req) {
  try {
    const refreshToken = req.cookies.get("refreshToken")?.value;
    if (!refreshToken) {
      return new Response(JSON.stringify({ message: "Refresh token missing" }), { status: 401 });
    }

    const decoded = verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET);
    if (!decoded) {
      return new Response(JSON.stringify({ message: "Invalid refresh token" }), { status: 401 });
    }

    const newTokens = generateTokens({ _id: decoded.id });
    const accessCookie = setAuthCookie(newTokens.accessToken);

    return new Response(
      JSON.stringify({ message: "Token refreshed", accessToken: newTokens.accessToken }),
      { status: 200, headers: { "Set-Cookie": accessCookie } }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error refreshing token" }), { status: 500 });
  }
}
