import { Path } from "react-hook-form";
import { SignInBody, SignUpBody } from "../schema/auth.schema";

// 1. Create a Generic Interface to handle any form body type
interface AuthField<T> {
    name: Path<T>;
    type: React.HTMLInputTypeAttribute;
    placeholder?: string;
    label: string;
}

// 2. Define the Sign In configuration
export const SignInFields: AuthField<SignInBody>[] = [
    { name: "email", type: "email", placeholder: "example@user.com", label: "Email" },
    { name: "password", type: "password", placeholder: "Password", label: "Password" },
];

// 3. Define the Sign Up configuration
export const SignUpFields: AuthField<SignUpBody>[] = [
    { name: "name", type: "text", placeholder: "John Doe", label: "Full Name" },
    { name: "email", type: "email", placeholder: "example@user.com", label: "Email" },
    { name: "password", type: "password", placeholder: "Password", label: "Password" },
];