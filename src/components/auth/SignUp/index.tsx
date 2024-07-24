import SignUpFormFields from "./SignUpFormFields";
import SignUpButton from "./SignUpButton";
import AuthSnackbar from "../AuthSnackbar";

const SignUp = () => {
  return (
    <>
      <SignUpFormFields />
      <AuthSnackbar />
      <SignUpButton />
    </>
  );
};

export default SignUp;
