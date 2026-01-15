import { APIClientInstance } from "@/lib/api.instance";
import { SignInBody } from "@/schema/auth.schema";

export async function singIn(data: SignInBody): Promise<any> {
    return APIClientInstance.post("/auth/signin", data);
}