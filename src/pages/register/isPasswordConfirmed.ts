export const isPasswordConfirmed = (
  password: string,
  confirmPassword: string
): boolean => {
  if (password && confirmPassword && password === confirmPassword) return true;
  return false;
};
