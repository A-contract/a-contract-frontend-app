"use client";
import SignInFormFields from "./SignInFormFields";
import SignInButton from "./SignInButton";
import SignInLinks from "./SignInLinks";
import AuthSnackbar from "../AuthSnackbar";

const SignIn = () => {
  return (
    <>
      <SignInFormFields />
      <SignInButton />
      <AuthSnackbar />
      <SignInLinks />
    </>
  );
};

export default SignIn;
