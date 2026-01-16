import { chatRepository } from "./chat.repository.js"
import { sanitizer } from "./chat.sanitizer.js";

export const ChatService = {

    getUserChatHistory: async (user) => {
        let chat = await chatRepository
            .findOpenedChatByUserId(user.id);

        if (!chat) {
            chat = await chatRepository
                .createChatWithUserId(user.id);
        };

        const chatHistory = await chatRepository
            .findChatHistoryByChatId(chat._id);

        return chatHistory;
    }
}