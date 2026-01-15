import { Path } from "react-hook-form";
import { SignInBody } from "../schema/auth.schema";
import { SignUpBody } from "../schema/auth.schema";

interface SignInItem {
    name: Path<SignInBody>;
    type: React.HTMLInputTypeAttribute;
    placeholder?: string;
    label: string
}
export const SignIn: SignInItem[] = [
    { name: "email", type: "text", placeholder: "example@user.com" , label: "Email"},
    { name: "password", type: "password", placeholder: "Password" , label: "Password"},
];


interface SignUpItem {
    name: Path<SignUpBody>;
    type: React.HTMLInputTypeAttribute;
    placeholder?: string;
}
export const SignUp: SignUpItem[] = [
    { name: "name", type: "text", placeholder: "Jon Doe"},
    { name: "email", type: "text", placeholder: "example@user.com"},
    { name: "password", type: "password", placeholder: "Password" },
];
