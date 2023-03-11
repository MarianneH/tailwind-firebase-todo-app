export const isPasswordConfirmed = (password, confirmPassword) => {
  if (password && confirmPassword && password === confirmPassword) return true;
  return false;
};
