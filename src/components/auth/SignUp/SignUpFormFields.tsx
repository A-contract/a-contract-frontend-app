import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
    Box,
    TextField,
    InputAdornment,
    IconButton,
    Typography,
} from "@mui/material";
import { useState } from "react";
import {
    isNotEmptyField,
    isValidConfirmPassword,
    isValidEmail,
    isValidPassword,
} from "./validation";

interface FormErrors {
    name: boolean;
    surname: boolean;
    email: boolean;
    password: boolean;
    passwordConfirmation: boolean;
    terms: boolean;
}

interface FormFields {
    name: string;
    surname: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    terms: boolean;
}

const SignUpFormFields = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const [formErrors, setFormErrors] = useState<FormErrors>({
        name: true,
        surname: true,
        email: true,
        password: true,
        passwordConfirmation: true,
        terms: true,
    });

    const [formFields, setFormFields] = useState<FormFields>({
        name: "",
        surname: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        terms: false,
    });

    const handleInputChange =
        (field: keyof FormFields) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = event.target.value;
            setFormFields({ ...formFields, [field]: newValue });
            validateField(field, newValue);
        };

    const validateField = (
        field: keyof FormFields,
        value: string | boolean
    ) => {
        let isValid;
        switch (field) {
            case "email":
                isValid = isValidEmail(value as string);
                break;
            case "password":
                isValid = isValidPassword(value as string);
                break;
            case "passwordConfirmation":
                isValid = isValidConfirmPassword(
                    formFields.password,
                    value as string
                );
                break;
            case "terms":
                isValid = value === true;
                break;
            default:
                isValid = isNotEmptyField(value as string);
        }
        setFormErrors({ ...formErrors, [field]: isValid });
    };

    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = event.target.checked;
        setFormFields({ ...formFields, terms: newValue });
        setFormErrors({ ...formErrors, terms: newValue });
    };

    return (
        <>
            <Box sx={{ pb: "25px" }}>
                <Typography sx={{ fontWeight: 600 }}>Sign up</Typography>
            </Box>
            {[
                { label: "name", placeholder: "name" },
                { label: "surname", placeholder: "surname" },
                { label: "email", placeholder: "email", type: "email" },
                {
                    label: "password",
                    placeholder: "password",
                    type: showPassword ? "text" : "password",
                },
                {
                    label: "confirm password",
                    placeholder: "password confirmation",
                    type: "password",
                    field: "passwordConfirmation",
                },
            ].map(
                (
                    { label, placeholder, type = "text", field = label },
                    index
                ) => (
                    <Box key={index} sx={{ pb: "10px" }}>
                        <TextField
                            required
                            placeholder={placeholder}
                            label={label}
                            type={type}
                            error={!formErrors[field as keyof FormErrors]}
                            helperText={
                                !formErrors[field as keyof FormErrors]
                                    ? `${label} is not correct`
                                    : ""
                            }
                            value={formFields[field as keyof FormFields]}
                            autoComplete="off"
                            onChange={handleInputChange(
                                field as keyof FormFields
                            )}
                            InputProps={
                                label === "password" ? (
                                    {
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() =>
                                                        setShowPassword(
                                                            !showPassword
                                                        )
                                                    }
                                                    onMouseDown={(e) =>
                                                        e.preventDefault()
                                                    }
                                                    edge="end"
                                                >
                                                    {showPassword ? (
                                                        <VisibilityOff />
                                                    ) : (
                                                        <Visibility />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }
                                ) : (
                                    <></>
                                )
                            }
                            sx={{ width: "300px" }}
                        />
                    </Box>
                )
            )}
        </>
    );
};

export default SignUpFormFields;
