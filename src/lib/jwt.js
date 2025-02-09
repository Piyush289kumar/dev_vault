import jwt from "jsonwebtoken";

/**
 * Generate Access and Refresh Tokens
 * @param {Object} user - The user object containing `_id` and `role`
 * @returns {Object} - Access and Refresh tokens
 */
export function generateTokens(user) {
  if (!process.env.JWT_ACCESS_SECRET || !process.env.JWT_REFRESH_SECRET) {
    throw new Error("-JWT_ACCESS_SECRET or JWT_REFRESH_SECRET is not set.");
  }

  const accessToken = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: "1h" } // Short-lived token
  );

  const refreshToken = jwt.sign(
    { id: user._id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "7d" } // Long-lived token
  );

  return { accessToken, refreshToken };
}

/**
 * Verify a JWT Token
 * @param {string} token - The JWT token to verify
 * @param {string} secret - The secret key
 * @returns {Object | null} - Decoded token payload or null if invalid
 */
export function verifyToken(token, secret) {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    return null;
  }
}
  
