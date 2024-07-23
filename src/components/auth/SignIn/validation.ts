export const isValidEmail = (value: string) => {
  return value.includes("@") && value.length > 4;
};

export const isValidPassword = (value: string) => {
  return value.length > 0;
};
