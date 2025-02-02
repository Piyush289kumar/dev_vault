export function checkRole(user, allowedRoles) {
  return allowedRoles.includes(user.role);
}
