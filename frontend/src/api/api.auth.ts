import { APIClientInstance } from "@/lib/api.instance";
import { SignInBody, SignUpBody } from "@/schema/auth.schema";

export async function signIn(data: SignInBody): Promise<any> {
    return APIClientInstance.post("/auth/signin", data);
}
export async function signUp(data: SignUpBody): Promise<any> {
    return APIClientInstance.post("/auth/signup", data);
}

