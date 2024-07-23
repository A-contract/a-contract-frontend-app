import SignUpFormFields from "./SignUpFormFields";
import SignUpLegacy from "./SignUpLegacy";
import SignUpSnackbar from "./SignUpSnackbar";
import SignUpButton from "./SignUpButton";

const SignUp = () => {
    return (
        <>
            <SignUpFormFields />
            <SignUpLegacy />
            <SignUpSnackbar />
            <SignUpButton />
        </>
    );
};

export default SignUp;
