export const isValidEmail = (value: string) =>
    value.includes("@") && value.includes(".");
export const isNotEmptyField = (value: string) => value.length > 0;
export const isValidPassword = (value: string) => value.length > 11;
export const isValidConfirmPassword = (
    password: string,
    confirmPassword: string
) => password === confirmPassword;
