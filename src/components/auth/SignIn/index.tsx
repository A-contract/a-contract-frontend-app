"use client";
import FormFields from "./SignInFormFields";
import SignInButton from "./SignInButton";
import SignInSnackbar from "./SignInSnackbar";
import SignInLinks from "./SignInLinks";

const SignIn = () => {
  return (
    <>
      <FormFields />
      <SignInButton />
      <SignInSnackbar />
      <SignInLinks />
    </>
  );
};

export default SignIn;
