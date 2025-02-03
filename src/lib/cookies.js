import { serialize } from "cookie";

/**
 * Generates an HTTP-only secure cookie for authentication
 * @param {string} token - The JWT token to store
 * @returns {string} - Serialized cookie string
 */
export function setAuthCookie(token) {
  return serialize("auth_token", token, {
    httpOnly: true, // Prevents JavaScript access (XSS protection)
    secure: process.env.NODE_ENV === "production", // Use secure flag in production
    sameSite: "strict", // Prevents CSRF attacks
    path: "/", // Cookie accessible in all routes
    maxAge: 3 * 24 * 60 * 60, // 3 days expiration
  });
}

/**
 * Clears the authentication cookie
 * @returns {string} - Serialized empty cookie string
 */
export function clearAuthCookie() {
  return serialize("auth_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0, // Expire immediately
  });
}
