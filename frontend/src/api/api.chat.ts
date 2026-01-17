import { APIClientInstance } from "@/lib/api.instance";

export async function getActiveChatHistory(accessToken: string | null) {
    return APIClientInstance.get("/chats/active", {
        headers: { Authorization: `Bearer ${accessToken}` }
    })
};