import jwt from "jsonwebtoken";

/**
 * Generate a JWT token for a user
 * @param {Object} user - The user object containing `_id` and `role`
 * @returns {string} - The signed JWT token
 */
export function signJwtToken(user) {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables.");
  }

  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "3d",
    }
  );
}

/**
 * Verify a JWT token
 * @param {string} token - The JWT token to verify
 * @returns {Object | null} - Decoded token payload or null if invalid
 */
export function verifyJwtToken(token) {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables.");
  }

  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    return null;
  }
}
