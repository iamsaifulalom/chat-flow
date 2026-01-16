import { sendResponse } from "../../core/send-response.js";
import { ChatService } from "./chat.service.js"

export const ChatController = {
    getChatHistory: async (req, res) => {
        const result = await ChatService.getUserChatHistory(req.user);
        sendResponse({
            res,
            statusCode: 200,
            message: "Chat history",
            success: true,
            data: result
        })
    }
}