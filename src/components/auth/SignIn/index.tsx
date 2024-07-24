"use client";
import FormFields from "./SignInFormFields";
import SignInButton from "./SignInButton";
import SignInLinks from "./SignInLinks";
import AuthSnackbar from "../AuthSnackbar";

const SignIn = () => {
  return (
    <>
      <FormFields />
      <SignInButton />
      <AuthSnackbar />
      <SignInLinks />
    </>
  );
};

export default SignIn;
