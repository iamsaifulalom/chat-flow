import { APIClientInstance } from "@/lib/api.instance";

export async function getActiveChatHistory(accessToken: string) {
    return APIClientInstance.get("chat/active", {
        headers: { Authorization: `Bearer ${accessToken}` }
    })
};