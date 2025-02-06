// Role-based access
export function authorizeRoles(user, allowedRoles) {
  return allowedRoles.includes(user.role);
}
