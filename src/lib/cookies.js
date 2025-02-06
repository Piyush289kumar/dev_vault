import { serialize } from "cookie";

/**
 * Generates an HTTP-only secure cookie for authentication
 * @param {string} token - The JWT token to store
 * @returns {string} - Serialized cookie string
 */
export function setAcessTokenCookie(token) {
  return serialize("access_token", token, {
    httpOnly: true, // Prevents JavaScript access (XSS protection)
    secure: process.env.NODE_ENV === "production", // Use secure flag in production
    sameSite: "strict", // Prevents CSRF attacks
    path: "/", // Cookie accessible in all routes
    maxAge: 3 * 24 * 60 * 60, // 3 days expiration
  });
}

/**
 * Clears the authentication cookie (or refresh token) by setting it to an expired state
 * @param {string} cookieName - The cookie name to clear ("access_token" or "refresh_token")
 * @returns {string} - Serialized empty cookie string
 */
export function clearAccessTokenCookie(cookieName) {
  return serialize(cookieName, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0, // Expire immediately
  });
}

/**
 * Sets a refresh token cookie
 * @param {string} refreshToken - The refresh token to store
 * @returns {string} - Serialized refresh token cookie string
 */
export function setRefreshTokenCookie(refreshToken) {
  return serialize("refresh_token", refreshToken, {
    httpOnly: true, // Prevents JavaScript access (XSS protection)
    secure: process.env.NODE_ENV === "production", // Use secure flag in production
    sameSite: "strict", // Prevents CSRF attacks
    path: "/", // Cookie accessible in all routes
    maxAge: 7 * 24 * 60 * 60, // 7 days expiration for refresh token
  });
}

/**
 * Clears the refresh token cookie
 * @returns {string} - Serialized empty refresh token cookie string
 */
export function clearRefreshTokenCookie() {
  return serialize("refresh_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0, // Expire immediately
  });
}
