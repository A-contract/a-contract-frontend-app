export const isValidEmail = (value: string) => {
  return value.includes("@") && value.length > 4;
};

export const isValidPassword = (value: string) => {
  return value.length > 7;
};

export const isNotEmptyField = (value: string) => value.length > 0;

export const isValidConfirmPassword = (
  password: string,
  confirmPassword: string
) => {
  console.log(password, confirmPassword);
  return password === confirmPassword;
};
